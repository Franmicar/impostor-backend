"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
function handler(req, res) {
    res.status(200).json({ status: 'Impostor Backend API is running successfully on Vercel Native Serverless!' });
}
