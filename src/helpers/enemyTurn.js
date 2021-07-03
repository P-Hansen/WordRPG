function enemyTurn(enemyArray, playerArray) {
    enemyArray.map((enemy)=>{
        let target = playerArray[Math.floor(Math.random()*playerArray.length)];
        target.hp -= enemy.attacks[Math.floor(Math.random()*enemy.attacks.length)].dmg;
    });
};

export default enemyTurn;