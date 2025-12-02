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

  // Try to load from FIREBASE_SERVICE_ACCOUNT_JSON (for production/Render)
  const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  
  if (serviceAccountJson) {
    // Production: Load from environment variable (JSON string)
    const serviceAccount = JSON.parse(serviceAccountJson);
    
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
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
