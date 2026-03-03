"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDb = void 0;
const admin = __importStar(require("firebase-admin"));
const getDb = () => {
    if (!admin.apps.length) {
        let credential;
        if (process.env.FIREBASE_SERVICE_ACCOUNT) {
            // If deployed on Vercel, read the JSON string directly from the secret environment variable
            try {
                // Vercel sometimes escapes newlines in dashboard variables
                const privateKeyFix = process.env.FIREBASE_SERVICE_ACCOUNT.replace(/\\n/g, '\n');
                const serviceAccount = JSON.parse(privateKeyFix);
                credential = admin.credential.cert(serviceAccount);
            }
            catch (e) {
                console.error("Failed to parse FIREBASE_SERVICE_ACCOUNT JSON. Check Vercel Env Vars.", e);
                throw e;
            }
        }
        else {
            // For local development, it relies on GOOGLE_APPLICATION_CREDENTIALS pointing to the file path
            console.warn("Warning: FIREBASE_SERVICE_ACCOUNT not set. Falling back to applicationDefault(). This may crash if no local credentials exist.");
            credential = admin.credential.applicationDefault();
        }
        try {
            admin.initializeApp({
                credential: credential
            });
            console.log('Firebase Admin SDK initialized successfully.');
        }
        catch (error) {
            console.error('Firebase Admin SDK initialization error:', error);
            throw error; // Rethrow so the crash happens here with a clear message, rather than silently failing and crashing at db creation.
        }
    }
    return admin.firestore();
};
exports.getDb = getDb;
