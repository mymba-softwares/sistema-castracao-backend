import * as admin from 'firebase-admin';
import * as path from 'path';
import * as fs from 'fs';

if (!admin.apps.length) {
  const projectId = process.env.FIREBASE_PROJECT_ID;

  if (!projectId) {
    throw new Error(
      'FIREBASE_PROJECT_ID environment variable is not set. '
      + 'Please add it to your .env file with your Firebase project ID.'
    );
  }

  // Try to load from FIREBASE_PRIVATE_KEY (simpler approach for production)
  const privateKey = process.env.FIREBASE_PRIVATE_KEY;
  
  if (privateKey) {
    // Production: Use individual environment variables
    const serviceAccount = {
      type: 'service_account',
      project_id: projectId,
      private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
      private_key: privateKey.replace(/\\n/g, '\n'),
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      client_id: process.env.FIREBASE_CLIENT_ID,
      auth_uri: 'https://accounts.google.com/o/oauth2/auth',
      token_uri: 'https://oauth2.googleapis.com/token',
      auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
      client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT_URL,
      universe_domain: 'googleapis.com'
    };
    
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as any),
      projectId: projectId,
    });
  } else {
    // Development: Load from file
    const serviceAccountFileName = process.env.FIREBASE_SERVICE_ACCOUNT_FILE;

    if (!serviceAccountFileName) {
      throw new Error(
        'Neither FIREBASE_SERVICE_ACCOUNT_JSON nor FIREBASE_SERVICE_ACCOUNT_FILE environment variable is set. '
        + 'Please set one of them in your .env file.'
      );
    }

    const possiblePaths = [
      path.join(__dirname, serviceAccountFileName),
      path.join(process.cwd(), 'src', 'notifications', 'firebase', serviceAccountFileName),
    ];

    let serviceAccountPath: string | null = null;

    for (const filePath of possiblePaths) {
      if (fs.existsSync(filePath)) {
        serviceAccountPath = filePath;
        break;
      }
    }

    if (!serviceAccountPath) {
      throw new Error(
        `Firebase service account file "${serviceAccountFileName}" not found. Tried paths: ${possiblePaths.join(', ')}`
      );
    }

    const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));
    
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      projectId: projectId,
    });
  }
}

export const firebaseAdmin = admin;
export const messaging = admin.messaging();
