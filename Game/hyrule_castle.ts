import 'colorts/lib/string';
import { Player, Enenmy } from './interfaces';
const readline = require('readline-sync');

function attack (enenmy:Enenmy, player:Player) {
   let Fight = 0;
   for (let i = 0; i < 10; i++) {
    while (enenmy.hp !==0 || player.hp !== 0) {
      console.log(`=== Fight ${Fight += 1} ===`);

      let HP: string = 'HP: '; 
      let nbr: number = 0;
 
     // Affichage de l'enemie
     console.log(`${enenmy.name}`.red);
     for (let j=0; j < enenmy.hp; j++) {
       //Affichage des vies
        HP += 'I';     
        
     }
 
     console.log(`${HP}  ${enenmy.hp} / 30`);
      //Affichage du nom du joueur
      console.log(`${player.name}`.green); 
      for (let k = 0; k <player.hp; k++) {
       HP += 'I';    
       
      }
      console.log(`${HP}  ${player.hp} / 60`);
     //  // section d'option Attack / heal
      console.log('---- Options ----------');
      
      const options = ['Attack', 'Heal'];
      const answer = readline.keyInSelect(options,'');
      
      console.log(`${nbr += 1}.${options[answer]}`);
      console.log(`You attacked and dealt ${player.str} damages!`)
 
      if (options[answer] === 'Attack') {
      
       enenmy.hp = enenmy.hp - player.str;
       player.hp = player.hp - enenmy.str;
       console.log("########-------------#########")
       console.log(`HP : ${'I'.repeat(player.hp)} ${'_'.repeat(player.hp- player.hp)}`)
       
       console.log("########-------------#########")
      console.log(enenmy.hp)
      } else{
        console.log('Dommage!!!!!');
      }
    }
     
   }
 }

 export default attack;