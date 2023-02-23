const fetch = require("node-fetch");

async function lyrics(track = "My Ordinary life", artist = "The Living Tombstone") {
  const response = await fetch('https://lyrics-api-production-6cb9.up.railway.app/v1/lyrics/' + track + '/' + artist, {
    method: "GET",
    headers: {
      'Authorization': 'listeniskawaiandcute'
    }
  });

  const result = await response.text()
  return result
}

lyrics().then((a) => {
  console.log(JSON.parse(a))
})