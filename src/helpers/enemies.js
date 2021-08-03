//enemyArray
export default [
    {
        name: "Oviraptor",
        image: "oviraptor.png",
        loot: "OVIRAPTORLEGLEGARMARMTAILHEADCREST",
        hp: 200,
        maxHp: 200,
        armor: 2,
        dodge: 10,
        speed: 5,
        resistance: 5,
        attacks: [{name: "slash", dmg: 20}, {name: "bite", dmg: 30}],
    },
    {
        name: "Ankylosaurus",
        image: "Anky.png",
        loot: "ANKYLOSAURUSHEADLEGLEGLEGLEG",
        hp: 300,
        maxHp: 250,
        armor: 20,
        dodge: 0,
        speed: 4,
        resistance: 10,
        attacks: [{name: "Bash", dmg: 20}, {name: "Bludgeon", dmg: 30}],
    }];