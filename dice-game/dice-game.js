function rollDice() {
    let goldCoins = 0;
    for (i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        alert('you roll a' + roll + '.')
          
        if (roll === 1){
            alert('Game is over, no more rolls');
            break;
        } 
        if (roll < 5) {
            continue;
        }
         goldCoins += roll;
        alert ('Congrats you won' + roll + 'gold coins\n\nYou have' + goldCoins + " gold coins so far!");
       
        
    }
        alert('You have won total of' + goldCoins + 'gold coins!')

}