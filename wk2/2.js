class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  sayHello(other) {
    console.log(`${this.name} says hello to ${other}`)
  }
}

let jim = new Person('jim', 22)
let jane = new Person('jane', 21)
jim.sayHello('anne')
jane.sayHello('anne')