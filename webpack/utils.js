exports.isDev = process.env.NODE_ENV.includes("development");
exports.isProd = !exports.isDev;
