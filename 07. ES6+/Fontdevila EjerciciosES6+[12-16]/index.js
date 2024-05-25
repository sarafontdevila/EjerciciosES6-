const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

const findArrayIndex = (array, text) => {
  return array.indexOf(text)
}
console.log(findArrayIndex(mainCharacters, 'Luke'))
console.log(findArrayIndex(mainCharacters, 'Hola'))

const removeItem = (array, text) => {
  const index = findArrayIndex(array, text)
  if (index !== -1) {
    array.splice(index, 1)
  }
  return array
}
console.log(removeItem(mainCharacters, 'Anakin'))
console.log(removeItem(mainCharacters, 'Hola'))

const rollDice = (numFaces) => {
  const random = Math.floor(Math.random() * numFaces) + 1
  return random
}
const numFaces = 6
const result = rollDice(numFaces)
console.log('el dado de ${numFaces} caras y obtuviste un {result}')

const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]
const swap = (array, index1, index2) => {
  const temp = array[index1]
  array[index1] = array[index2]
  array[index2] = temp

  return array
}
const swappedFantastic = swap(fantasticFour, 1, 2)
console.log(swappedFantastic)
