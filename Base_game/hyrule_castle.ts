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

      if (answer === '1' || answer === 'attack') {
        attack(player, enemie);
      } else if (answer === '2' || answer === 'heal') {
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
        console.log(`${enemie.name} died!\n`);
      }
      console.log('********************************************* ');
    }
    
    let reponse = readline.keyInYN(`Voulez vous monter à l'étage N°${floor + 1} ??`);
    if (reponse) {
      floor += 1;
    } else {
      console.log('Orevoir \u{1F44B} ');
      return false;
    }
    if (floor === 10) {
      const boss = getBosses();
      boss.maxHp = boss.hp;
      while (player.hp > 0 && boss.hp > 0) {
        console.log(` Dans cette étage vous allez affronter ${boss.name}`);
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
      console.log(`Féliciation, ${boss.str} a etait vaincue \u{1F38A} \u{1F38A} \u{1F38A} \u{1F38A}`);;
      return true;
    }
  }
}


export default game;
