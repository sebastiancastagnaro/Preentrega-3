// userRepository.js
class UserRepository {
    constructor(dao) {
      this.dao = dao;
    }
  
    getUserById(userId) {
      return this.dao.getUserById(userId);
    }
  }
  
  module.exports = UserRepository;
  