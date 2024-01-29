// authorizationMiddleware.js
function authorizationMiddleware(req, res, next) {
    // Lógica de autorización basada en roles y acciones
    // ...
  
    next();
  }
  
  module.exports = authorizationMiddleware;
  