let a = [1, 2, 3, 4, 5]

console.log(a[3])

a.push(6)
console.log(a)
a.pop()
console.log(a)

let b = a.slice(0, a.length)
console.log(b)

b.splice(2, 1)
console.log(b)

b.splice(2, 0, 10, 11, 12, 13)
console.log(b)
