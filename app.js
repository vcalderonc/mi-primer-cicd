// app.js
// Función principal: suma dos números
function sumar(a, b) {
  return a + b; // ✅ Corregido
}

// Servidor web simple
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hola Arquitectos de Software — CI/CD funcionando al 100%!\n');
});

// Exportamos la función para que el test pueda usarla
module.exports = { sumar };

// Solo iniciar el servidor si ejecutamos este archivo directamente
if (require.main === module) {
  // Render inyecta el puerto via variable de entorno
  // Si no existe, usamos 3000 para desarrollo local
  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
}