import 'colorts/lib/string';
import { Personnage } from './interfaces';
import { attack, heal, affichVie } from './functions';
import { getBosses, getEnemies, getPlayers } from './getDonnées';
import { startGame } from './game_customize';
const readline = require('readline-sync');

function initGame(player:Personnage) {
    let Fight = 0;
    let floor: number = 1;
    let nbrpieces: number = 12;
    const enemie = getEnemies();
    console.log(enemie);
    enemie.maxHp = enemie.hp;
    const nbrEtage = parseInt(readline.question(`Combien de combat voulez-vous faire? `));

     while (floor <= nbrEtage && player.hp > 0) {
        enemie.hp = enemie.maxHp;
        while (player.hp > 0 && enemie.hp > 0) {
          console.log();
          console.log(`******** Etage ${floor} ********\n`.yellow);
          console.log(`Vous avez ` + `${nbrpieces} \u{1F947} pièces\n`);
          console.log(`=== Fight ${Fight += 1} ===`);
          const answer = affichVie(enemie, player);
          if (answer === '1' || answer === 'attack' ) {
            attack(player, enemie);
          } else if (answer === '2' || answer === 'heal') {
            heal(player);
          }
          affichVie(enemie, player);
          /// ecrire une fconction
          if (enemie.hp > 0) {
            console.log(`${enemie.name} attacked and dealt ${enemie.str} damage!\n`);
            player.hp -= enemie.str;
            if (player.hp < 0) {
              player.hp = 0;
            }
          } else {
            console.log(`${enemie.name} died!\n`);     
          }
          console.log('********************************************* ');
        }
        console.log(`À present Vous avez ` + `${nbrpieces += 1} \u{1F947} pièces`); 
        const reponse = readline.keyInYN(`Souhaitez-vous continuer à l'étage N°${floor + 1} ?`);
  
        if (reponse === true) {
          if (floor === nbrEtage){
            console.log(`Votre route s\'arrete içi car nous n\'aviez choisi que ${nbrEtage} combat à faire...`.yellow);  
          }
          floor += 1;
         
        } else {
          console.log('Orevoir \u{1F44B} ');
          return false;
        }
//avant l'attaque de l'enemie pour qu'il verifie cette condtion d'abord avant de commencer le combat 
        if (floor % 10 === 0) {
          const boss = getBosses();
          boss.maxHp = boss.hp;
          while (player.hp > 0 && boss.hp > 0) {
            console.log(` À cette étage vous allez affronter ${boss.name}`);
            const answer = affichVie(boss, player);
            if (answer === '1' || answer === 'attack') {
              attack(player, boss);
            } else if (answer === '2' || answer === 'heal') {
              heal(player);
            }
            affichVie(boss, player);
            if (boss.hp > 0) {
              console.log(`${boss.name} attacked and dealt ${boss.str} damage!`);
              player.hp -= boss.str;
              if (player.hp < 0) {
                player.hp = 0;
              }
            }
          }
          if (player.hp === 0) {
            console.log('Dommage Vous y etiez presque \u{1F61E} .');
            return false;
          }
          console.log(`Féliciation, ${boss.str} a etait vaincue \u{1F38A} \u{1F38A} \u{1F38A} \u{1F38A}`);
          return true;
        }
      }
}

function game() {
  const player = getPlayers();
  player.maxHp = player.hp
  
  const difficult = startGame()
  if (difficult === '1') {
    console.log('Bienvenue dans notre Jeux '+'HyruleCastle \n'.italic.bold);
    initGame(player) 
  } else if (difficult === '2') {
      initGame(player)   
  } else if (difficult === '3'){ 
      initGame(player)
  }
  
}

game()

export default game;

