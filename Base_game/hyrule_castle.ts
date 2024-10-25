import 'colorts/lib/string';
import { Personnage } from './interfaces';
import { attack, heal, affichVie } from './functions';
import { getBosses, getEnemies, getPlayers } from './getDonnées';

const readline = require('readline-sync');

function game(player:Personnage) {
  let Fight = 0;
  let floor: number = 1;
  const enemie = getEnemies();
  enemie.maxHp = enemie.hp

  while (floor <= 10 && player.hp > 0) {
    enemie.hp = enemie.maxHp;
    while (player.hp > 0 && enemie.hp > 0) {
      console.log();
      console.log(`******** Etage ${floor} ********\n`.yellow);
      console.log(`=== Fight ${Fight += 1} ===`);
      const answer = affichVie(enemie, player);
      if (answer === 'Attack') {
        attack(player, enemie);
      } else {
        heal(player);
      }
      affichVie(enemie, player);
      if (enemie.hp > 0) {
        console.log(`${enemie.name} attacked and dealt ${enemie.str} damage!\n`);
        player.hp -= enemie.str;
        if (player.hp < 0) {
          player.hp = 0;
        }
      } else {
        console.log(`${enemie.name} Bokoblin died!\n`);
      }
      console.log('********************************************* ');
    }
    let reponse = readline.keyInYN(`Voulez vous monter à l'étage N°${floor + 1} ??`);
    console.log('tt',reponse)
    if (reponse) {
      console.log("reponse bien");
      floor += 1;
    } else {
      console.log("reponse pas bien");
      console.log('Dommage, à bientot!!!!');
      return false;
    }
    console.log("apres le if avec floor = ",floor);
    if (floor === 10) {
      const boss = getBosses();
      boss.maxHp = boss.hp;
      while (player.hp > 0 && boss.hp > 0) {
        console.log(` Dans cette étage vous allez affronter ${boss.name}`);
        const answer = affichVie(boss, player);
        if (answer === 'Attack') {
          attack(player, boss);
        } else {
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
        console.log('Dommage tu as perdu');
        return false;
      }
      console.log('Féliciation!!!!!');
      return true;
    }
  }
}


export default game;
