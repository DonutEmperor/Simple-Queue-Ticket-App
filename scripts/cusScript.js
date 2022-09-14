const { response } = require("express");
const { METHODS } = require("http");

function takeNumber(){
    const letters = ['a','b','c' ,'d','e'];
    const randomLetter = Math.floor(Math.random()*letters.length);
    const numbers = Math.floor(Math.random() * 1000);

    return letters[randomLetter].toUpperCase() + numbers;
}

async function getTicket() {
    let url = "http://localhost:3000/";
    try{
        let res = await fetch(url);
        return await res.json();
    }catch(err){
        console.log(err);
    }
}

async function printTicket(){
    let ticket = await getTicket();
    


    document.getElementById()
}

async function postTicket(){
    let url = "http://localhost:3000/";
    const ticket = takeNumber();

    fetch(url,{
        method: "POST",

        body: JSON.stringify({
            body: ticket,
        })
    })

    .then(reponse => response.json)

    .then(json => console.log(json))

    .catch(err => console.log(err));
}

