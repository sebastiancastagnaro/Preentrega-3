// filesystemDAO.js
const fs = require('fs');

class FileSystemDAO {
  constructor() {
    this.filePath = 'data/users.json'; // Ruta al archivo de datos
  }

  getUserById(userId) {
    const users = this.loadUsersFromDisk();
    const user = users.find((user) => user.userId === userId);
    return user;
  }

  // Otras operaciones de DAO para FileSystem según sea necesario

  // Método auxiliar para cargar usuarios desde el disco
  loadUsersFromDisk() {
    try {
      const data = fs.readFileSync(this.filePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      // Manejar errores de lectura
      console.error('Error al cargar usuarios desde el disco', error);
      return [];
    }
  }
}

module.exports = FileSystemDAO;
