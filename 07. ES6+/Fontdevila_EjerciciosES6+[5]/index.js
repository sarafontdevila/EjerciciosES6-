const filter = (e) => {
  const filtered = streamers.filter((streamer) =>
    streamer.name.toLowerCase().includes(e.target.value)
  )
  console.log(filtered)
}
const input = document.querySelector('input')
