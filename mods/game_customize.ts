const readline = require('readline-sync');
import 'colorts/lib/string';  
import { getBosses, getEnemies } from './getDonnées';

function modeDifficulty(){
    console.log(` 1.NORMAL `.bgWhite + ` 2.DIFFICULT `.bgYellow +'\n' +` 3.INSANE `.bgRed);
    const modeDifficult = readline.question('Choisissez le mode de difficulter souhaiter (1|2|3): ');

    if (modeDifficult  === '1') {
        console.log('Vous avez choisi le mode Normale!!!');
        
    } else if (modeDifficult  === '2') {
        console.log('Vous avez choisi le mode difficile!!!');
        const enemie = getEnemies();
        const boss = getBosses();
        Math.floor(enemie.hp = enemie.hp * 1.5);
        Math.floor(enemie.str = enemie.str * 1.5);

        Math.floor(boss.hp = boss.hp * 1.5);
        Math.floor(boss.str = boss.str * 1.5);
    } else if (modeDifficult  === '3'){
        console.log('Vous avez choisi le mode insane')
        const enemie = getEnemies();
        const boss = getBosses();

        enemie.hp = enemie.hp * 2;
        enemie.str = enemie.str * 2;

        boss.hp = boss.hp * 2;
        boss.str = boss.str * 2;
    }

    return modeDifficult
}
function startGame() {
  const start: boolean = false;
  var emoji = String.fromCodePoint(0x1F621)
  while(start === false){
    console.log()
    console.log(` 1.START `.bgCyan.dim +   ` 2.QUIT `.bgMagenta +'\n');
    const answer = readline.question('Choisissez une des ces otpions: ');

    if (answer === 'START' || answer === 'start' || answer === 'Start' || answer === '1') {
        console.log('Bienvenue dans notre Jeux '+'HyruleCastle \n'.italic.bold);
       
        return  modeDifficulty()
    } else if (answer === 'QUIT' || answer === 'quit' || answer === 'Quit' || answer === '2') {
        const reponse = readline.keyInYN(`Êtes-vous sur de vouloir quitter le jeux?`.red); 
        if (reponse === true) {
          console.log(`À bientot!!!! ${emoji}`);
          return false
        } else {  
          return modeDifficulty();
        }    
    } else {
            console.log('error: Vous devez choisir un des choix proposer'.red)
    }
}
}

export  {startGame, modeDifficulty};