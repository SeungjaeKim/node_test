import getType from './getType'

console.log(typeof "hello js")
console.log(typeof 123)
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof {})
console.log(typeof [])

console.log(getType(123))
console.log(getType(false))
console.log(getType(null))
console.log(getType({}))
console.log(getType([]))

// 산술 연산자(arithmetic operator)
console.log(1 + 2)
console.log(5 - 7)
console.log(3 * 4)
console.log(10 / 4)
console.log(7 % 5)

// 할당 연산자(assignment operator)
const a = 2     //const는 재할당이 불가능함
let b = 2       
b += 1
console.log(a)
console.log(b)
