const numbers = [32, 21, 63, 95, 100, 67, 43]
console.log(numbers.find((number) => number === 100))

const movies = [
  { title: 'Madagascar', stars: 4.5, date: 2015 },
  { title: 'Origen', stars: 5, date: 2010 },
  { title: 'Your Name', stars: 5, date: 2016 }
]
console.log(movies.find((movie) => movie.date === 2010))

const aliens = [
  { name: 'Zalamero', planet: 'Eden', age: 4029 },
  { name: 'Paktu', planet: 'Andromeda', age: 32 },
  { name: 'Cucushumushu', planet: 'Marte', age: 503021 }
]
const mutations = [
  {
    name: 'Porompompero',
    description:
      'Hace que el alien pueda adquirir la habilidad de tocar el tambor'
  },
  {
    name: 'Fly me to the moon',
    description: 'Permite volar, solo y exclusivamente a la luna'
  },
  {
    name: 'Andando que es gerundio',
    description: 'Invoca a un señor mayor como Personal Trainer'
  }
]
const alien = {
  ...aliens.find((alien) => alien.name === 'Cucushumushu'),
  mutation: {
    ...mutations.find((mutation) => mutation.name === 'Porompompero')
  }
}
console.log(alien)

const exams = [
  { name: 'Yuyu Cabeza Crack', score: 5 },
  { name: 'Maria Aranda Jimenez', score: 1 },
  { name: 'Cristóbal Martínez Lorenzo', score: 6 },
  { name: 'Mercedez Regrera Brito', score: 7 },
  { name: 'Pamela Anderson', score: 3 },
  { name: 'Enrique Perez Lijó', score: 6 },
  { name: 'Pedro Benitez Pacheco', score: 8 },
  { name: 'Ayumi Hamasaki', score: 4 },
  { name: 'Robert Kiyosaki', score: 2 },
  { name: 'Keanu Reeves', score: 10 }
]
const totalScore = exams.reduce(
  (accumulator, exam) => accumulator + exam.score,
  0
)
console.log(totalScore)

const aprobados = exams.reduce((accumulator, exam) => {
  if (exam.score >= 5) {
    return accumulator + exam.score
  }
  return accumulator
}, 0)
console.log(aprobados)

const media =
  exams.reduce((accumulator, exam) => accumulator + exam.score, 0) /
  exams.length
console.log(media)

const videogames = [
  { name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5 },
  { name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5 },
  { name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8 },
  { name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5 },
  { name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5 },
  { name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10 }
]

const genderfiltered = videogames.filter((game) => game.genders.includes('RPG'))

const Score = genderfiltered.reduce(
  (accumulator, game) => accumulator + game.score,
  0
)
const averageScore = Score / genderfiltered.length
console.log('la media es:', averageScore)

const movies1 = [
  {
    title: 'Bracula: Condemor II',
    duration: 192,
    categories: ['comedia', 'aventura']
  },
  {
    title: 'Spider-Man: No Way Home',
    duration: 122,
    categories: ['aventura', 'acción']
  },
  {
    title: 'The Voices',
    duration: 223,
    categories: ['comedia', 'thriller']
  },
  {
    title: 'Shrek',
    duration: 111,
    categories: ['comedia', 'aventura', 'animación']
  }
]
const uniqueCategories = []
for (const movie of movies) {
  if (!uniqueCategories.includes(category)) {
    uniqueCategories.push(category)
  }
}
console.log('Array de categorias sin repetir:', uniqueCategories)

const users = [
  {
    name: 'Alberto',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 50 },
      rain: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Antonio',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 30 },
      shower: { format: 'ogg', volume: 55 },
      train: { format: 'mp3', volume: 60 }
    }
  },
  {
    name: 'Pedro',
    favoritesSounds: {
      shower: { format: 'mp3', volume: 50 },
      train: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Cristina',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 67 },
      wind: { format: 'ogg', volume: 35 },
      firecamp: { format: 'mp3', volume: 60 }
    }
  }
]
let totalVolume = 0
let soundCount = 0
for (const user of users) {
  for (const sound in user.favoritesSounds) {
    totalVolume += user.favoritesSounds[sound].volume
    soundCount++
  }
}
const average = totalVolume / soundCount
console.log(average)

const soundCount1 = {}
for (const user of users) {
  for (const sound1 in user.favoritesSounds) {
    const soundName = sound1
    if (soundCount1[soundName]) {
      soundCount1[soundName]++
    } else {
      soundCount1[soundName] = 1
    }
  }
}
console.log('cuenta de sonidos favoritos', soundCount1)
