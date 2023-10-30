const axios = require('axios')

const query = 'company name' // Replace with the company name you want to search for

const apiKey = 'YOUR_API_KEY' // Obtain an API key from Domainr

const apiUrl = `https://domainr.p.rapidapi.com/v2/search?query=${query}`

const headers = {
  'X-RapidAPI-Host': 'domainr.p.rapidapi.com',
  'X-RapidAPI-Key': apiKey,
}

axios
  .get(apiUrl, { headers })
  .then((response) => {
    const results = response.data.results
    if (results && results.length > 0) {
      const domainName = results[0].domain
      console.log(`Domain name for "${query}": ${domainName}`)
    } else {
      console.log(`No matching domain found for "${query}"`)
    }
  })
  .catch((error) => {
    console.error(error)
  })
