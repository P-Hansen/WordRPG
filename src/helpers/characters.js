//array of player characters
export default [
    {image: "Lanto47.png",
    name: "Wordsmith",
    hp: 100,
    maxHp: 100,
    armor: 2,
    dodge: 10,
    speed: 5,
    resistance: 5,
    attacks: [
        {name:"HIT", description: "description here", dmg: 50},
        {name:"CUT", description: "description here", dmg: 50},
        {name:"STAB", description: "description here", dmg: 100},
        {name:"SLASH", description: "description here", dmg: 150}
    ]
    },
    {image: "Lanto138.png",
    name: "Pyromaniac",
    hp: 100,
    maxHp: 100,
    armor: 2,
    dodge: 10,
    speed: 5,
    resistance: 5,
    attacks: [
        {name:"BURN", description: "description here", dmg: 75},
        {name:"BLAST", description: "description here", dmg: 100},
        {name:"FLAME", description: "description here", dmg: 100}
    ]
    },
    {image: "Lanto113.png",
    name: "Medic",
    hp: 100,
    maxHp: 100,
    armor: 2,
    dodge: 10,
    speed: 5,
    resistance: 5,
    attacks: [
        {name:"CURE", description: "description here", dmg: -75},
        {name:"HEAL", description: "description here", dmg: -75},
        {name:"RESTORE", description: "description here", dmg: -200}
    ]
    }
]