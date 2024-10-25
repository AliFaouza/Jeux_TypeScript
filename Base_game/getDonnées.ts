import { Personnage } from './interfaces';

const fs = require('fs');

const players = fs.readFileSync('./jsonFiles/players.json', 'utf-8');
const parsePlayers = JSON.parse(players);

const enenmies = fs.readFileSync('./jsonFiles/enemies.json', 'utf-8');
const parseEnenmies = JSON.parse(enenmies);

const bosses = fs.readFileSync('./jsonFiles/bosses.json', 'utf-8');
const parseBosses = JSON.parse(bosses);

const randomValue = Math.round(Math.random() * 100 + 1);

let selcetedRarity : number;

if (randomValue > 50 && randomValue <= 100) {
  selcetedRarity = 1;
} else if (randomValue > 20 && randomValue <= 50) {
  selcetedRarity = 2;
} else if (randomValue > 5 && randomValue <= 20) {
  selcetedRarity = 3;
} else if (randomValue > 1 && randomValue <= 5) {
  selcetedRarity = 4;
} else if (randomValue === 1) {
  selcetedRarity = 5;
} else {
  selcetedRarity = 0;
}

function getPlayers() {
  const tableau: Array<Personnage> = [];
  for (const elements of parsePlayers) {
    if (selcetedRarity === elements.rarity) {
      tableau.push(elements);
    }
  }
  const randomTabIndex = Math.floor(Math.random() * tableau.length);
  return tableau[randomTabIndex];
}

function getEnemies() {
  const tableau: Array<Personnage> = [];
  for (const elements of parseEnenmies) {
    if (selcetedRarity === elements.rarity) {
      tableau.push(elements);
    }
  }
  const randomTabIndex = Math.floor(Math.random() * tableau.length);
  return tableau[randomTabIndex];
}
function getBosses() {
  const tableau: Array<Personnage> = [];
  for (const elements of parseBosses) {
    if (selcetedRarity === elements.rarity) {
      tableau.push(elements);
    }
  }
  const randomTabIndex = Math.floor(Math.random() * tableau.length);
  return tableau[randomTabIndex];
}

export { getPlayers, getBosses, getEnemies };
