const fs = require('fs');
const stream = require('stream');

function logRequest(req, res, next) {
  const timestamp = new Date().toISOString();
  let logData = `${timestamp} - ${req.method} ${req.url}`;

  let responseBody = '';
  const originalWrite = res.write;
  const originalEnd = res.end;

  const chunks = [];

  res.write = function (chunk) {
    chunks.push(Buffer.from(chunk));
    originalWrite.apply(res, arguments);
  };

  res.end = function (chunk) {
    if (chunk) {
      chunks.push(Buffer.from(chunk));
    }
    originalEnd.apply(res, arguments);

    logData += ` - Status Code: ${res.statusCode}`;
    logData += ` - Response Time: ${Date.now() - req.startTime}ms`;

    fs.appendFile('requests.log', logData + '\n', (err) => {
      if (err) {
        console.error('Error al registrar la solicitud:', err);
      }
    });
  };

  // Registra el tiempo de inicio de la solicitud
  req.startTime = Date.now();

  next();
}

module.exports = logRequest;

