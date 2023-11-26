class Team {
    constructor() {
        this.characters = []
    }

    addCharacter(character) {
        this.characters.push(character)
    }

    [Symbol.iterator]() {
        let index = -1
    
        return {
            next: () => {
                if (index < this.characters.length) {
                    index ++
                    return {
                        value: this.characters[index],
                        done: false
                    }
                } else if (index == this.characters.length) {
                    return {
                        value: this.characters[index],
                        done: true
                    }
                } else {
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }
}

const team = new Team()

export const archer = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10
  }
  
export const mage = {
    name: 'Маг',
    type: 'Wizard',
    health: 40,
    level: 1,
    attack: 30,
    defence: 8
}

export const warrior = {
    name: 'Воин',
    type: 'Warrior',
    health: 60,
    level: 1,
    attack: 30,
    defence: 20
}

team.addCharacter(archer)
team.addCharacter(mage)
team.addCharacter(warrior)

for (const character of team) {
    console.log(character)
}