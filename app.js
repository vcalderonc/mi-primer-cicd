// app.js
// Función principal: suma dos números
function sumar(a, b) {
  return a * b; // 🐛 BUG: multiplicamos en vez de sumar
}

// Servidor web simple
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hola Mundo desde mi Pipeline CI/CD!\n');
});

// Exportamos la función para que el test pueda usarla
module.exports = { sumar };

// Solo iniciar el servidor si ejecutamos este archivo directamente
if (require.main === module) {
  server.listen(3000, () => console.log('Servidor corriendo en puerto 3000'));
}