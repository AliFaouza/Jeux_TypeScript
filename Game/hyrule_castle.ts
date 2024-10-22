import 'colorts/lib/string';
import { Personnage } from './interfaces';
import { attack, heal, affichVie } from './functions';

function game(player:Personnage) {
   let Fight = 0;
   let floor: number = 1;
  
    while (floor <= 10 && player.hp > 0) {
      
      let enenmy = {
        name: 'Bokoblin',
        hp: 30, 
        str: 5,
        maxHp: 30
    }
  while (player.hp > 0 && enenmy.hp > 0) {
      console.log(`Etage ${floor}`);
      console.log(`=== Fight ${Fight += 1} ===`);
 
      affichVie(enenmy,player);
      attack(player, enenmy);

      if(enenmy.hp > 0){
        console.log(`${enenmy.name} attacked and dealt ${enenmy.str} damage!`);
        
        player.hp -= enenmy.str; 
        if (player.hp < 0) {
          player.hp = 0;
        }
      } else{
        console.log('Bokoblin died!')
      }
    
      }
      floor++
      if (floor === 10) {
        let enenmy = {
          name: 'Ganon',
          hp: 150, 
          str: 20,
          maxHp: 150
      }
      while (player.hp > 0 && enenmy.hp > 0) {
        console.log(`${enenmy.name} en vue`)

        affichVie(enenmy,player);
        attack(player, enenmy);
        if(enenmy.hp > 0){
          console.log(`${enenmy.name} attacked and dealt ${enenmy.str} damage!`);
          
          player.hp -= enenmy.str; 
          if (player.hp < 0) {
            player.hp = 0;
          }
        }   
      }
      if (player.hp === 0){
        console.log(`Dommage tu as perdu`)
        return false
        
      } else{
        console.log(`Féliciation!!!!!`)
        return true
      }
     }
     
   }
 }

 export default game;