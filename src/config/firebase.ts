import * as admin from 'firebase-admin';
import * as dotenv from 'dotenv';

dotenv.config();

if (!admin.apps.length) {
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
        console.warn("Warning: FIREBASE_SERVICE_ACCOUNT not set. Falling back to applicationDefault(). This may crash if no local credentials exist.");
        credential = admin.credential.applicationDefault();
    }

    try {
        admin.initializeApp({
            credential: credential
        });
        console.log('Firebase Admin SDK initialized successfully.');
    } catch (error) {
        console.error('Firebase Admin SDK initialization error:', error);
        throw error; // Rethrow so the crash happens here with a clear message, rather than silently failing and crashing at db creation.
    }
}

export const getDb = () => admin.firestore();
