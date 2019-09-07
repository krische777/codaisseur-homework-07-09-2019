const axios = require('axios')

function getTatooineResidents() {
    return promise = new Promise((resolved, reject) => {
        axios.get('https://swapi.co/api/planets/1/')
            .then(response => {

                resolved(response.data.residents)
            })
            .catch(error => reject(error))
    }
    )
}

function promiseMeAString(inputString) {

    return promise = new Promise((resolved, reject) => {
        if (typeof inputString === 'string') {
            resolved("You kept the Promise!")
        }
        else if (inputString === null) {
            reject("You have failed me!")
        }
    })
}


module.exports.getTatooineResidents = getTatooineResidents
module.exports.promiseMeAString = promiseMeAString