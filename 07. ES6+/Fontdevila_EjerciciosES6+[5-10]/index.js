const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90]
const filtered = ages.filter((age) => age > 18)
console.log(filtered)

const filtered2 = ages.filter((age) => age % 2 === 0)
console.log(filtered2)

const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]
const filtered3 = streamers.filter(
  (streamer) => streamer.gameMorePlayed === 'League of Legends'
)
console.log(filtered3)

const filtered4 = streamers.filter((streamer) => streamer.name.includes('u'))
console.log(filtered4)

const filtered5 = streamers.filter((streamer) => {
  if (streamer.gameMorePlayed.includes('Legends')) {
    if (streamer.age > 35) {
      streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase()
    }
    return streamer
  }
})
console.log(filtered5)
