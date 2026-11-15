const crypto = require('crypto');

// Generate a random string once on startup and keep it in memory.
const randomString = crypto.randomBytes(16).toString('hex');

function logStatus() {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: ${randomString}`);
}

// Output immediately, then every 5 seconds.
logStatus();
setInterval(logStatus, 5000);
