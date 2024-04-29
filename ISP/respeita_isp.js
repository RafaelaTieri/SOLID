class Animal {
    constructor(name) {
      this.name = name;
    }
  
    eat() {
      console.log(`${this.name} is eating.`);
    }
  
    sleep() {
      console.log(`${this.name} is sleeping.`);
    }
  }
  
  class Flyable {
    fly() {
      throw new Error(`${this.name} cannot fly.`);
    }
  }
  
  class Bird extends Animal {
    constructor(name) {
      super(name);
    }
  
    fly() {
      console.log(`${this.name} is flying.`);
    }
  }
  
  class Dog extends Animal {}
  
  const bird = new Bird('Sparrow');
  bird.eat();
  bird.sleep();
  bird.fly();
  
  const dog = new Dog('Buddy');
  dog.eat();
  dog.sleep();
  