class UserManagement {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
    this.saveUser(user);
  }

  saveUser(user) {
    console.log(`Usuário ${user.name} salvo no banco de dados.`);
  }

  getUserById(id) {
    for (let user of this.users) {
      if (user.id === id) {
        return user;
      }
    }
    return null;
  }

  updateUser(id, newData) {
    const user = this.getUserById(id);
    if (user) {
      Object.assign(user, newData);
      this.saveUser(user); 
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

const userManager = new UserManagement();
userManager.addUser(new User(1, "Alice", "alice@example.com"));
userManager.updateUser(1, { name: "Alice Smith" });
userManager.deleteUser(1);