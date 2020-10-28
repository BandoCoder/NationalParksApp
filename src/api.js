import keys from '/src/keys'

const baseUrl = `https://developer.nps.gov/api/v1/api_key=${keys.apiKey}`

const searchForPark = function(query, state, max) {
    fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${state}&limit=${max}&q=${query}&api_key=${keys.apiKey}
    -H accept: application/json`)
}