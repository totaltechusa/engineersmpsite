require('dotenv').config({ path: require('node:path').resolve(__dirname, '..', '.env') });

const app = require('./app');
const { connectToDatabase } = require('./config/database');
const { validateVerificationConfig } = require('./services/userService');
const emailService = require('./services/emailService');

const port = Number(process.env.PORT) || 3000;
const host = process.env.HOST || '0.0.0.0';

async function startServer() {
    validateVerificationConfig();
    if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32) {
        throw new Error('JWT_SECRET must be configured with at least 32 characters');
    }
    emailService.validateSmtpConfig();
    await connectToDatabase();
    app.listen(port, host, () => {
        console.log(`Backend server running at http://${host === '0.0.0.0' ? '192.168.1.4' : host}:${port}`);
    });
}

startServer().catch((error) => {
    console.error('Failed to start the server:', error);
    process.exitCode = 1;
});
