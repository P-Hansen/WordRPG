//iterates through enemy array and preform a random attack on a random target
function enemyTurn(enemyArray, playerArray) {
    enemyArray.map((enemy)=>{
        //pick a random player as the target
        let target = playerArray[Math.floor(Math.random()*playerArray.length)];
        //pick a random attack to preform on the target
        target.hp -= enemy.attacks[Math.floor(Math.random()*enemy.attacks.length)].dmg;
    });
};

export default enemyTurn;