import 'colorts/lib/string';
import { Personnage } from './interfaces';
import { attack,heal, affichVie } from './functions';
const readline = require('readline-sync');

function game(player:Personnage) {
  let Fight = 0;
  let floor: number = 1;
  
  //tant que l'étage actuelle est inferieur à 10 (nombre d'étage maximal) 
  // Et tant que les vie du joueur sont supérieur à 0
  while (floor <= 10 && player.hp > 0) {
    let enenmy = {
    name: 'Bokoblin',
    hp: 30, 
    str: 5,
    maxHp: 30
    }
    // tant que les vies du joueur et de l'énemie sont supérieur à 0
    while (player.hp > 0 && enenmy.hp > 0) {
      //on affiche l'étage actuel
      console.log(`****** Etage ${floor} ******`);
      //nombre de combats 
      console.log(`=== Fight ${Fight += 1} ===`);
      //Affiche le nombre de vie de player et de l'enemie
      let answer = affichVie(enenmy,player)
      //Verification de l'option que l'utilisateur aura choisie
      //Si c'est attaque on attaque l'enemie
      //Sinon on guérit 
      if (answer === 'Attack') {
        attack(player, enenmy)
      } else {
        heal(player)
      }
      //Affichage des vies car sinon on ne verra pas l'evolution de l'option heal
      affichVie(enenmy,player)
      //Attaque de l'enemie
      if(enenmy.hp > 0) {
        console.log(`${enenmy.name} attacked and dealt ${enenmy.str} damage!\n`);
        player.hp -= enenmy.str; 
        if (player.hp < 0) {
          player.hp = 0;
        }
      } else {
        console.log('Bokoblin died!\n')
      }
      console.log('********************************************* ')
    }
    //Avant de monter d'une étage on lui demande s'il souhaite continuer
    const answer =readline.keyInYN(`Voulez vous monter à l'étage N°${floor+1} ??`);

    if (answer === true) {
      floor++
    } else {
      console.log('Domage, à bientot!!!!')
      return false
    }
    //On monte d'un étage dès que l'enemie soit mort 
    
    //Dans le cas ou l'étage est 10 on lui precise qu'il affronte un autre énemie
    if (floor === 10) {
      let enenmy = {
        name: 'Ganon',
        hp: 150, 
        str: 20,
        maxHp: 150
      }
      //Tant que le nombre de vie du joueur et de l'énemie sont supérieur à 0
      while (player.hp > 0 && enenmy.hp > 0) {
        console.log(` Dans cette étage vous allez affronter ${enenmy.name}`)
        //Affichage du nombre des vis des du joueur et de son enemie
        let answer = affichVie(enenmy,player)
        //Verification de l'option que l'utilisateur aura choisie
        //Si c'est attaque on attaque l'enemie
        //Sinon on guérit 
        if (answer === 'Attack') {
          attack(player, enenmy)
        } else {
          heal(player)
        }
        //Réafichage des vies 
        affichVie(enenmy,player)
        //Attaque de l'énemie dans le cas ou ses nombres de vies seront supérieur à 0
        if(enenmy.hp > 0){
          console.log(`${enenmy.name} attacked and dealt ${enenmy.str} damage!`);            
          player.hp -= enenmy.str; 
          //Dans le cas ou on auras des vies negatif on attribue la valeur 0 au hp du joueur
          //C'est à dire qu'il sera égale à 0 et non -6 
          if (player.hp < 0) {
            player.hp = 0;
          }
        }   
      }
      //Verification des vies des utilisateurs
      //Si ils sont égale à 0 (il a perdu et on sort de la boucle )
      //Sinon on lui affiche un message de féliciation et le jeux est fini
      if (player.hp === 0){
        console.log(`Dommage tu as perdu`)
        return false   
      } else  {
        console.log(`Féliciation!!!!!`)
        return true
      }
    }
  }   
}
 export default game;
