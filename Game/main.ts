import attack from "./hyrule_castle"

const person = {
    name: 'Link',
    hp: 60,
    str: 15
}
const enenmy = {
    name: 'Bokoblin',
    hp: 30, 
    str: 5
}
attack(enenmy, person);
