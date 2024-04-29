class Pessoa {
    constructor(nome) {
      this.nome = nome;
      this.animal = new Animal();
    }
  
    andarAnimal() {
      return this.animal.andar();
    }
  }
  
  class Animal {
    constructor() {
      this.tipo = "Cachorro";
      this.patas = 4;
    }
  
    andar() {
      return `${this.tipo} está andando com ${this.patas} patas.`;
    }
  }
  
  const pessoa = new Pessoa("João");
  console.log(pessoa.andarAnimal());