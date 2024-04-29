class UserManager {
    constructor() {
      this.storage = new UserStorage();
    }
  
    addUser(user) {
      this.storage.saveUser(user);
    }
  
    getUserById(id) {
      return this.storage.getUserById(id);
    }
  
    updateUser(id, newData) {
      this.storage.updateUser(id, newData);
    }
  
    deleteUser(id) {
      this.storage.deleteUser(id);
    }
  }
  
  class UserStorage {
    constructor() {
      this.users = [];
    }
  
    saveUser(user) {
      this.users.push(user);
      console.log(`Usuário ${user.name} salvo no banco de dados.`);
    }
  
    getUserById(id) {
      return this.users.find(user => user.id === id) || null;
    }
  
    updateUser(id, newData) {
      const user = this.getUserById(id);
      if (user) {
        Object.assign(user, newData);
        console.log(`Usuário ${user.name} atualizado no banco de dados.`);
      } else {
        console.log("Usuário não encontrado.");
      }
    }
  
    deleteUser(id) {
      const index = this.users.findIndex(user => user.id === id);
      if (index !== -1) {
        const deletedUser = this.users.splice(index, 1)[0];
        console.log(`Usuário ${deletedUser.name} removido.`);
      } else {
        console.log("Usuário não encontrado.");
      }
    }
  }
  
  class User {
    constructor(id, name, email) {
      this.id = id;
      this.name = name;
      this.email = email;
    }
  }
  
  // Uso das classes UserManager e User
  const userManager = new UserManager();
  userManager.addUser(new User(1, "Alice", "alice@example.com"));
  userManager.updateUser(1, { name: "Alice Smith" });
  userManager.deleteUser(1);