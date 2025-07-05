// Use a generic when you want data in a function to change its type based on what you pass in or return, or to build a reusable component


// If you try and hardcode a type, the return type will expect that no matter what. So this function will only work if you have an array of numbers
function getFirstElement(array: number[]) {
  return array[0]
}

const numbers = [1, 2, 3]
const firstNum = getFirstElement(numbers)

const strings = ['one', 'two', 'three']
const firstString = getFirstElement(strings) // throws an error

// The generic is in the brackets, can be named anything
function fixedGetFirstElement<ElementType>(array: ElementType[]) {
  return array[0]
}

const Numbers = [1, 2, 3]
const FirstNum = fixedGetFirstElement(Numbers)

const Strings = ["one", "two", "three"]
const FirstString = fixedGetFirstElement(Strings) // No more error because now the type is based on the elements that are passed in. Passing in a number array returns a number, passing in a string array returns a string.
