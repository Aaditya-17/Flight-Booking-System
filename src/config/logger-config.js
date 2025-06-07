const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf } = format;

// Define the custom format for the log messages
const customFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`;
});

const logger = createLogger({
    level: "info", // Set the default log level
    format: combine(timestamp(), customFormat),
    transports: [
        new transports.Console(), // Log to the console
        new transports.File({
            filename: "app.log",
        }), // Log to a file
    ],
});

module.exports = logger;
