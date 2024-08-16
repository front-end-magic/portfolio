
         function colors() {
   var r2 = Math.floor(Math.random()* 55) + 200;
             var r3 = Math.floor(Math.random()* 155)+ 100;
             var r4 = Math.floor(Math.random()* 155) + 100;        
            j.style.backgroundColor =  "rgba(" + r2 + ", " + r3 + ", " + r4 + ", 1"+")";
              
           };

       //set score function--------------------------------------------------
           // ---------------------------------------------------------------
           // -------------------------------------------------------------------
            
             function setScore(bonus){
               if (storage.getItem("score")) {
                     var score = parseInt(storage.getItem("score"));
                   score1 = score + bonus;
              
                     scoretext.textContent = score1;
                var  score = storage.setItem("score", JSON.stringify(score1));
               
               }

                else{ 
                   score = storage.setItem("score",  "1");
                   score1 = 0;
                    }
                   
             }
         
         //set life function--------------------------------------
         //--------------------------------------------------------------
         //----------------------------------------------------------------
              
         
                    
              //gameover function--------------------------------------------------
           // ---------------------------------------------------------------
           // -------------------------------------------------------------------
            function getScore(){
                      if (storage.getItem("highScore")) {
                     var highScore = parseInt(storage.getItem("highScore"));
                 }else{
                     highScore = storage.setItem("highScore",  "1");
                
                 }
                           var score = parseInt(storage.getItem("score"));
                           var last = storage.setItem("last",  score);
                              lastScore = localStorage.getItem("last");
                     if (score > localStorage.getItem("highScore")) { 
                    localStorage.setItem("highScore", score);
                    }
                var high = localStorage.getItem("highScore");
                     current.textContent = lastScore;
                     best.textContent = high;

               
            }
                      function gameOver(argument) {
                        getScore();
                             gameover.style.display = "block";
                               meow.src = "../audio/win1.mp3";
                      meow.play();
      
                    replay.addEventListener("click",function(){
                score =  storage.setItem("score",  "0");
                 lifes = storage.setItem("lifes",  "5");
    
                window.location = "hard.html";
              });
            
                   navigator.vibrate(500);
                  
                    // gameover.style.opacity = "1";
                   //        meow.src = "audio/fire.mp3";
                   // meow.play();
                         }  
                           

              function help(){
               window.location = "help.html";
 };
            function restart(){
 score =  storage.setItem("score",  "0"); 
   lifes = storage.setItem("lifes",  "5");              
window.location = "hard.html";

};

function exit (){
  window.location = "exit.html";
};

            //   function getCoins(){
            //      if (storage.getItem("coins")) {
            //          var coins = parseInt(storage.getItem("coins"));
            //        coins1 = coins + 1;
              
            //          coins2.textContent = coins1;
            //     var  coins = storage.setItem("coins", JSON.stringify(coins1));
               
            //    }

            //     else{ 
            //        coins = storage.setItem("coins",  "1");
            //        coins1 = coins;
            //         }

              
            // }

