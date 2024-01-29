// userController.js
class UserController {
    static sendMessage(req, res) {
      // Lógica para que el usuario envíe mensajes al chat
      // ...
  
      res.json({ message: 'Mensaje enviado al chat' });
    }
  
    static addToCart(req, res) {
      // Lógica para que el usuario agregue productos a su carrito
      // ...
  
      res.json({ message: 'Producto agregado al carrito' });
    }
  }
  
  module.exports = UserController;
  