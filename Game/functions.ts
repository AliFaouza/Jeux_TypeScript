const readline = require('readline-sync');
function affichVie(monster: Personnage, player: Personnage) {
    console.log(`${monster.name}`.red);
    console.log(`HP : ${'I'.repeat(monster.hp)} ${'_'.repeat(monster.maxHp - monster.hp)}  ${monster.hp} / ${monster.maxHp}`);

    console.log(`${player.name}`.green);
    console.log(`HP : ${'I'.repeat(player.hp)} ${'_'.repeat(player.maxHp - player.hp)} ${player.hp} / ${player.maxHp}`);     
  }
  
  function heal(player: Personnage){
    player.hp += (player.maxHp / 2) 

    if (player.hp > player.maxHp){
      player.hp = player.maxHp;
    };
  }
  
  function attack(player: Personnage, enenmy: Personnage) {
    console.log('---- Options ----------');     
    const options = ['Attack', 'Heal'];
    const answer = readline.keyInSelect(options,'');
    console.log(`You attacked and dealt ${player.str} damages!`)
  
    if (options[answer] === 'Attack') {
     enenmy.hp -= player.str;
     if (enenmy.hp < 0) {
      enenmy.hp = 0;
     }
    } else if (options[answer] === 'Heal') {
      heal(player)
    }
  }

export {attack, affichVie, heal} ;