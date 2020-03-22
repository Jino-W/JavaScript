function superPower(array, name) {
    if (name.length !== 0) {
        const object = array.find(function (obj) {
            return obj.name == name
        })
            if (object) {
                return object.powers.join(', ')
            } else {
                return `${name} is not in the super heroes list`
            }
        
    } else {
        return 'invalid input'
    }
}

var superHeroes = [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    }
  ]

console.log(superPower(superHeroes, "Molecule Man"))
console.log(superPower(superHeroes, "Iron Man"))



/*
1. superPower(superHeroes, "Molecule Man");
returns 'Radiation resistance, Turning tiny, Radiation blast'

2. superPower(superHeroes, 'Iron Man'); 
returns 'Iron Man is not in the super heroes list'
*/