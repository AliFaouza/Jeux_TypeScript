import 'colorts/lib/string';
import { Personnage } from './interfaces';
import { exit } from 'process';
const readline = require('readline-sync');

function attack() {

}

function heal(player: Personnage){
  let maxHpPlayer: number = player.hp;
  player.hp += maxHpPlayer/ 2;
  if( player.hp > maxHpPlayer){
      player.hp = maxHpPlayer;
  }
}

function condition(enenmy:Personnage, player:Personnage) {
   let Fight = 0;
   let maxHpMonster: number = enenmy.hp;
   let maxHpPlayer: number = player.hp;
   let floor: number = 1;
   
    while (floor < 10) {
      console.log(`${floor}`);
      console.log(`=== Fight ${Fight += 1} ===`);
      let nbr: number = 0;
 
     // Affichage de l'enemie
     console.log(`${enenmy.name}`.red);
     console.log(`HP : ${'I'.repeat(enenmy.hp)} ${'_'.repeat(maxHpMonster - enenmy.hp)}  ${enenmy.hp} / 30`);

      //Affichage du nom du joueur
     console.log(`${player.name}`.green);
     console.log(`HP : ${'I'.repeat(player.hp)} ${'_'.repeat(maxHpPlayer - player.hp)} ${player.hp} / 60`);

     //  // section d'option Attack / heal
     console.log('---- Options ----------');
      
      const options = ['Attack', 'Heal'];
      const answer = readline.keyInSelect(options,'');
      
      //console.log(`${nbr += 1}.${options[answer]}`);
      console.log(`You attacked and dealt ${player.str} damages!`)
 
      if (options[answer] === 'Attack') {
       enenmy.hp = enenmy.hp - player.str;
       player.hp = player.hp - enenmy.str;
       
      } else if (options[answer] === 'Heal') {
        console.log(heal(player));
      } else{
        exit;
      }
    
     floor++;
   }
 }

 export default condition;