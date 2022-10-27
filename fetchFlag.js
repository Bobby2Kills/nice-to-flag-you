const flagObject = require('./flagObject');
const fetch = require('isomorphic-fetch');

let previousEnties = [];

 async function fetchFlag(){
    let randomNum = Math.floor(Math.random()*10);
    let flagNum = flagObject[randomNum].number;
    const response = await fetch(`https://countryflagsapi.com/png/${flagNum}`);
    const data = await response.json;
    return {flag: data, name: flagObject[randomNum].name};
}

fetchFlag()