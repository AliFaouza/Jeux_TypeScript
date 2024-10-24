import game from "./hyrule_castle";
import {getPlayers} from "./getDonnées"

const player = getPlayers()
player.maxHp = player.hp
// console.log(player)
game(player);
