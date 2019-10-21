
  function play(bet) {
      var money = bet;
      var maxMoney = money;
      var rolls = 0;
      var rollMax = 0;
      
      
      while (money > 0) {
          
          var diceRoll = rollDice();
          
          if (diceRoll == 7) {
              money = money + 4;
            } else {
                money = money - 1;
            }
            
            rolls++;
            
            if (money > maxMoney) {
                maxMoney = money;
                rollMax = rolls;
            }
            
           
        }
        
        document.getElementById('resultBet').innerText = bet;
        document.getElementById('resultBeforeBroke').innerText = rolls;
        document.getElementById('resultMaxMoney').innerText = maxMoney;
        document.getElementById('resultRollAtMax').innerText = rollMax;
        document.getElementById("results").style.display="block";
        document.getElementById("play").innerText="Play Again";
    }
    
    function rollDice() {
        return (rollSixsided() + rollSixsided());
    }
    
    function rollSixsided() {
        var num = Math.floor(Math.random() * 6) + 1;
        return num;
    }
    function verify() {
        clearErrors();
      
        var bet = document.getElementById("bet").value;
      
        if (bet == "" || isNaN(bet)) {
            alert("Starting bet must be filled in with a number.");
            document.getElementById("bet").className="error";
            document.getElementById("bet").focus();
            return;
        }
        
       
        bet = parseFloat(parseFloat(document.getElementById("bet").value).toFixed(2));
      
      
        if (bet<=0) {
          alert("You have to bet some money if you want to play!");
          document.getElementById("bet").className="error";
          document.getElementById("bet").focus();
          return;
        }
      
        play(bet);
      
      
      }
    
  function clearErrors() {
    document.getElementById("bet").className="";
  }
  
  function reset() {
    document.getElementById("results").style.display="none";
    document.getElementById("bet").value = "0.00";
    document.getElementById("play").innerText = "Play";
  }