/**
 * Copy and paste the library you built at home into this file.
 */

'use strict'

//Request URLs using 'fetch' from 'node-fetch'
const fetch = require("node-fetch")



//console.log('Beginning FT-Web-Task...')

module.exports = function requestMultipleUrls(urls){
    
    let results = Promise.all(urls.map(url =>
        fetch(url)
             .then(parseJSON)
            
    ))
    .catch(error => console.log(`There was a problem fetching a URL! \n${error}`))

    return results;
}

function parseJSON(response) {
    return response.json()
}
