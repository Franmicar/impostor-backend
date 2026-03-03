import * as admin from 'firebase-admin';
import * as dotenv from 'dotenv';

dotenv.config();

// Default initialization using application default credentials, 
// or providing a specific file via GOOGLE_APPLICATION_CREDENTIALS in .env
try {
    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.applicationDefault()
        });
        console.log('Firebase Admin SDK initialized successfully.');
    }
} catch (error) {
    console.error('Firebase Admin SDK initialization error:', error);
}

export const db = admin.firestore();
