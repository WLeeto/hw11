import {archer} from './iterator.js'
import {mage} from './iterator.js'
import {warrior} from './iterator.js'

class Team {

    constructor() {
        this.characters = []
    }

    addCharacter(character) {
        this.characters.push(character)
    }

    *[Symbol.iterator]() {
        for (let character of this.characters) {
            yield character
        }
    }

}

const team = new Team();

team.addCharacter(archer); 
team.addCharacter(mage);
team.addCharacter(warrior);

for (let character of team) {
  console.log(character); 
}

// Задача со звездочкой 

function canIterate(obj) {
    if (obj == null || typeof obj !== 'object' && typeof obj !== 'string') {
        return false
    }
    if (typeof obj[Symbol.iterator] === 'function') {
        return true
    }
    return false
}

console.log(canIterate(new Map()))
console.log(canIterate(new Set()))
console.log(canIterate(null))
console.log(canIterate(10))
console.log(canIterate("Netology"))