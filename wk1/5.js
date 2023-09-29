function addSomething(a, b) {
  return a + b
}

console.log(addSomething(2, 3))

const addSomething2 = function (a, b) {
  return a + b
}

const addSomething3 = (a, b) => a + b

let a = [1, 2, 3, 4, 5]
let b = a.map(e => e * e).map(e => e * 2)

console.log(b)