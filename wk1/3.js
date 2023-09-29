let a = ['a', 'b', 'c', 'd', 'e']

for (let element of a) {
  console.log(element)
}

for (let index = 0; index < a.length; index++) {
  if (a[index] === 'd') {
    console.log(index)
    break
  }
}