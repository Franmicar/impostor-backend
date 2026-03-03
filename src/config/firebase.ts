import * as admin from 'firebase-admin';
import * as dotenv from 'dotenv';

dotenv.config();

try {
    let credential;

    if (process.env.FIREBASE_SERVICE_ACCOUNT) {
        // If deployed on Vercel, read the JSON string directly from the secret environment variable
        try {
            const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
            credential = admin.credential.cert(serviceAccount);
        } catch (e) {
            console.error("Failed to parse FIREBASE_SERVICE_ACCOUNT JSON. Check Vercel Env Vars.", e);
            throw e;
        }
    } else {
        // For local development, it relies on GOOGLE_APPLICATION_CREDENTIALS pointing to the file path
        credential = admin.credential.applicationDefault();
    }

    admin.initializeApp({
        credential: credential
    });

    console.log('Firebase Admin SDK initialized successfully.');
} catch (error) {
    console.error('Firebase Admin SDK initialization error:', error);
}

export const db = admin.firestore();
