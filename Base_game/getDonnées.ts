import { Personnage } from './interfaces';
const fs = require('fs');

//données liés au fichier players.json
const players = fs.readFileSync('./jsonFiles/players.json', 'utf-8');
const parsePlayers = JSON.parse(players);
//données liés au fichier enemies.json
const enenmies = fs.readFileSync('./jsonFiles/enemies.json', 'utf-8');
const parseEnenmies = JSON.parse(enenmies);
//données liés au fichier bosses.json
const bosses = fs.readFileSync('./jsonFiles/bosses.json', 'utf-8');
const parseBosses = JSON.parse(bosses);
//genère un nombre aléatoire 
const randomValue = Math.round(Math.random() * 100 + 1);
// console.log(randomValue)
let selcetedRarity : number;
 
if (randomValue > 50 && randomValue <= 100) {
 selcetedRarity  = 1
} else if (randomValue > 20 && randomValue <= 50) {
 selcetedRarity  = 2
} else if (randomValue > 5 &&  randomValue <= 20 ) {
 selcetedRarity  = 3
} else if (randomValue > 1 &&  randomValue <= 5) {
selcetedRarity  = 4
} else if (randomValue === 1) {
 selcetedRarity = 5
} else {
 selcetedRarity  = 0
}

function getPlayers() {
    const tableau: Array<Personnage> = []; 
    for (const elements of parsePlayers) {
        if (selcetedRarity === elements.rarity) {
          tableau.push(elements)
        }
    }  
    const random_tab_index = Math.round(Math.random() * tableau.length - 1)
    return tableau[random_tab_index];
}

function getEnemies() {
    const tableau: Array<Personnage> = []; 
    for (const elements of parseEnenmies) {
        // console.log(elements.rarity)
        if (selcetedRarity === elements.rarity) {
          tableau.push(elements)
        }
    }
    const random_tab_index = Math.round(Math.random() * tableau.length - 1)
    console.log(tableau[random_tab_index])
    return tableau[random_tab_index];
}
function getBosses() {
    const tableau: Array<Personnage> = []; 
    for (const elements of parseBosses) {
        // console.log(elements.rarity)
        if (selcetedRarity === elements.rarity) {
         tableau.push(elements)
        }
    } 
    const random_tab_index = Math.round(Math.random() * tableau.length - 1)
    return tableau[random_tab_index]; 
}

export {getPlayers,getBosses, getEnemies};
