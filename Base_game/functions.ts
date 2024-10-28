import { Personnage } from './interfaces';
const readline = require('readline-sync');

function affichVie(monster: Personnage, player: Personnage) {
  console.log(`${monster.name}`.red);
  console.log(`HP : ${'💚'.repeat(monster.hp)} ${'\u{1F90D}'.red.repeat(monster.maxHp - monster.hp)}  ${monster.hp} / ${monster.maxHp}`);

  console.log(`${player.name}`.green);
  console.log(`HP : ${'\u{1F49C}'.repeat(player.hp)} ${'\u{1F90D}'.blue.repeat(player.maxHp - player.hp)} ${player.hp} / ${player.maxHp}`);
  console.log('---- Options ----------\n');
  console.log('1. Atttack   2. Heal')
  const answer = readline.question(``);

  return answer;
}

function heal(player: Personnage) {
  player.hp += (player.maxHp / 2);
  if (player.hp > player.maxHp) {
    player.hp = player.maxHp;
  }
}

function attack(player: Personnage, enenmy: Personnage) {
  enenmy.hp -= player.str;
  if (enenmy.hp < 0) {
    enenmy.hp = 0;
  }
  console.log(`You attacked and dealt ${player.str} damages!`);
}
export { attack, affichVie, heal};
