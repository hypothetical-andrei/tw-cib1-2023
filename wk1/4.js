let o = {
  name: 'john',
  age: 29
}

console.log(o)

for (let prop in o) {
  console.log(o[prop])
}