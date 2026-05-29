"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
const cors_1 = require("../../src/utils/cors");
const auth_1 = require("../../src/middleware/auth");
const container_1 = require("../../src/config/container");
async function handler(req, res) {
    if ((0, cors_1.handleCors)(req, res))
        return;
    if (!(0, auth_1.authenticateApiKey)(req, res))
        return;
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
    await container_1.container.packageController.list(req, res);
}
