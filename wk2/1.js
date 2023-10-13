let o = {
  name: 'jim',
  age: 22,
  sayHello: function (other) {
    console.log(`${this.name} says hello to ${other}`)
  }
}

o.sayHello('jane')