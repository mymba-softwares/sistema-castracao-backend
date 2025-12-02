import * as admin from 'firebase-admin';
import * as path from 'path';
import * as fs from 'fs';

if (!admin.apps.length) {
  // Load service account from environment variable or default path
  const serviceAccountFileName = process.env.FIREBASE_SERVICE_ACCOUNT_FILE;
  const projectId = process.env.FIREBASE_PROJECT_ID;

  if (!serviceAccountFileName) {
    throw new Error(
      'FIREBASE_SERVICE_ACCOUNT_FILE environment variable is not set. '
      + 'Please add it to your .env file with the name of your Firebase service account JSON file.'
    );
  }

  if (!projectId) {
    throw new Error(
      'FIREBASE_PROJECT_ID environment variable is not set. '
      + 'Please add it to your .env file with your Firebase project ID.'
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

export const firebaseAdmin = admin;
export const messaging = admin.messaging();
