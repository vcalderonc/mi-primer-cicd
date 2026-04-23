// app.js

function sumar(a, b) {
  return a + b; // ✅ Corregido
}


const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hola DevOps!\n');
});


module.exports = { sumar };


if (require.main === module) {
  
  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
}