import { Personnage } from "./interfaces";
// import {getPlayers,getBosses, getEnemies} from "./getDonnées"

const readline = require('readline-sync');
let gameStarted: boolean = false;

function startGame(){
  gameStarted = true;
  console.log('Vous pouvez commancer le jeux!!!')
}

function affichVie(monster: Personnage, player: Personnage) {
    console.log(`${monster.name}`.red);
    console.log(`HP : ${'I'.repeat(monster.hp)} ${'_'.red.repeat(monster.maxHp - monster.hp)}  ${monster.hp} / ${monster.maxHp}`);

    console.log(`${player.name}`.green);
    console.log(`HP : ${'I'.repeat(player.hp)} ${'_'.blue.repeat(player.maxHp - player.hp)} ${player.hp} / ${player.maxHp}`);  
    console.log('---- Options ----------');     
    const options = ['Attack', 'Heal'];
    const answer = readline.keyInSelect(options,'');
    
    return options[answer]
  }
  
function heal(player: Personnage){
  player.hp += (player.maxHp / 2)
  if (player.hp > player.maxHp){
    player.hp = player.maxHp
  }
}
  
function attack(player: Personnage, enenmy: Personnage) {
    enenmy.hp -= player.str;
    if (enenmy.hp < 0) {
     enenmy.hp = 0;
    }
  console.log(`You attacked and dealt ${player.str} damages!`)
}

export {attack, affichVie, heal} ;