class Pessoa {
    constructor(nome, animal) {
      this.nome = nome;
      this.animal = animal;
    }
  
    andarAnimal() {
      return this.animal.andar();
    }
  }
  
  class Animal {
    constructor(tipo, patas) {
      this.tipo = tipo;
      this.patas = patas;
    }
  
    andar() {
      return `${this.tipo} está andando com ${this.patas} patas.`;
    }
  }
  
  const animal = new Animal("Cachorro", 4);
  const pessoa = new Pessoa("João", animal);
  console.log(pessoa.andarAnimal());