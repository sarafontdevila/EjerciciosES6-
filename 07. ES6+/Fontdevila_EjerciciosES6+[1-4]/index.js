/* ejercicio 1*/
const suma = (a = 10, b = 5) => {
  console.log(a + b)
}
suma()
suma(2)
suma(2, 2)

/* ejercicio 2*/
const game = {
  title: 'The last us 2',
  gender: ['action', 'zombie', 'survival'],
  year: 2020
}

const { title, gender, year } = game
console.log('${title} ${gender} ${year}')

const fruits = ['Banana', 'Strawberry', 'Orange']

const [fruit1, fruit2, fruit3] = fruits
console.log('${fruit1} ${fruit2} ${fruit3}')

/*const animalFunction = () => {
  return { name: 'Bengal Tiger', race: 'Tiger' }
}
const {name, race } = animalFunction();
console.log('${name} ${race}')*/

/*const car = { name: 'Mazda 6', itv: [2015, 2011, 2020] }
const { name, itv } = car
const [year1, year2, year3] = itv
console.log('${name} ${itv} ${year1 ${year2} ${year3}')*/
/*ejercio 3- Spread operator*/
const pointsList = [32, 54, 21, 64, 75, 43]
const points = [...pointsList]
console.log(points)

const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const copyToy = { ...toy }
console.log(copyToy)

const pointsList3 = [54, 87, 99, 65, 32]
const All = [...pointsList, ...poinstsList3]
console.log(All)

const toy2 = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] }
const fusion = { ...toy2, ...toyUpdate }

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']
const copyColors = [...colors]
copyColors.splice(2, 1)
console.log(copyColors)

/*Ejercicio 4 Map*/
const users = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]
const names = users.map((user) => user.name)
console.log(names)

const users2 = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]
const names2 = users2.map((user) => {
  if (user.name[0] === 'A') {
    return 'Anacleto'
  } else {
    return user.name
  }
})
console.log(names2)

const cities = [
  { isVisited: true, name: 'Tokyo' },
  { isVisited: false, name: 'Madagascar' },
  { isVisited: true, name: 'Amsterdam' },
  { isVisited: false, name: 'Seul' }
]
const visitadas = cities.map((city) => {
  if (city.isVisited === true) {
    return (city.name += '(Visitado)')
  } else {
    return city.name
  }
})
