const { execSync } = require('child_process');
const fs = require('fs');

try {
    console.log("Reading firebase-credentials.json...");
    const jsonStr = fs.readFileSync('./firebase-credentials.json', 'utf8');
    const jsonObj = JSON.parse(jsonStr);

    // Convert to a single-line strict JSON string
    const compressedJson = JSON.stringify(jsonObj);

    console.log("Removing old FIREBASE_SERVICE_ACCOUNT from Vercel...");
    try {
        execSync('npx vercel env rm FIREBASE_SERVICE_ACCOUNT production -y', { stdio: 'ignore' });
    } catch (e) {
        // Might fail if not exists, which is fine
    }

    console.log("Uploading compressed FIREBASE_SERVICE_ACCOUNT to Vercel...");
    // We execute vercel env add and write the compressed JSON directly to its standard input
    execSync('npx vercel env add FIREBASE_SERVICE_ACCOUNT production', {
        input: compressedJson,
        stdio: ['pipe', 'inherit', 'inherit']
    });

    console.log("Success! Redeploying...");
    execSync('npx vercel --prod --yes', { stdio: 'inherit' });

} catch (error) {
    console.error("Error formatting or uploading:", error);
}
