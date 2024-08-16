






               
function x (questionhard) {

 //pause game function--------------------------------------------------
           // ---------------------------------------------------------------
           // -------------------------------------------------------------------
                            pause.addEventListener("click", function(){
                              
                                    var container = document.getElementById('container');
                             pausepage.style.display = "block";
                              gameover.style.display = "none";
                              bonuspage.style.display = "none";

                              // more1.style.display = "none";
                                intervalClear();
             
                      
                        });
                                function extraLife(){
                                      var lifeCount = parseInt(storage.getItem("lifes"));
                   life1 = lifeCount + 1;
                     life2.textContent = life1;
                      var  lifes = storage.setItem("lifes", JSON.stringify(life1));
               
    
                                }
                                    function setLife(){
                           if (storage.getItem("lifes")) {
                     var lifeCount = parseInt(storage.getItem("lifes"));
                   life1 = lifeCount - 1;
                       navigator.vibrate(500);
                     life2.textContent = life1;
                var  lifes = storage.setItem("lifes", JSON.stringify(life1));
                 if (lifeCount <= 1) {
                      gameOver();
               intervalClear();
                     }
               } 
                   
                      else{ 
                   lifes = storage.setItem("lifes",  "5");
                    }
                      pop.src = "../audio/oof.mp3";
                      pop.play();
                 
             }
             function intervalClear(){
                            clearInterval(b);
                             clearInterval(m);
                             clearInterval(n);
                             clearInterval(o);

               setInterval(function () {
                             
                var j = document.getElementsByClassName("j");
                            //      a.style.display = "none";
                        //      container.style.display = "none";
                        //      play1.style.display = "block";
                           var i;
                        for (i = 0; i < j.length; i++) {
                          j[i].style.backgroundColor = "red";
                          j[i].style.display = "none";
                          // j[i].parentNode.removeChild(j[i]);
                          // if (i = i.length - 1) {
                          //   i = 0;
                          // }
                       }
                         
                      }, 0.2);
             }

function  bonuslife1(argument) {
  bonuslife++
  console.log("bonuslife ="+bonuslife)
  if (bonuslife === 600) {
    bonuslife = 0;
     bonuspage.style.display = "block";
      
                                                  intervalClear();
            };
                        }
                    //         function bonus(){
                    //      var coins = parseInt(storage.getItem("coins")); 
                    //      cob = coins % 10;
                    //    if (cob == 0) {
                    //      clearInterval(b);
                    //          clearInterval(m);
                    //          clearInterval(n);
                    //             var j = document.getElementsByClassName("j");
                    //        alert(coins);
                    //        for (i = 0; i < j.length; i++) {
                          // j[i].style.backgroundColor = "red";
                    //       j[i].style.display = "none";
                    //     };
                    //        bonuspage.style.display = "block";
             
                    //    }
                    // };

	 var q = questions[c];
	 	 // bubble.play();
  		 // bubble.volume = 0.2;
              shark1.play();
    // var r6 = Math.floor(Math.random()*4);
    //        overlay.style.backgroundImage = "url(images/" + r6 + ".png)";
           // var lifeCount = parseInt(storage.getItem("lifes"));
            
           // life2.textContent=   lifeCount;
            // var coins = parseInt(storage.getItem("coins"));
               
            //          coins2.textContent = coins;


               var score = parseInt(storage.getItem("score"));
                 
                     scoretext.textContent = score;

                var lifes = parseInt(storage.getItem("lifes"));
                 
                     life2.textContent = lifes;
                    if (lifes <= 0) {
                       var  lifes = storage.setItem("lifes", "5");
                      var  score = storage.setItem("score", "0");
                             scoretext.textContent = 0;

                          life2.textContent = 5;
                  
                    }
              //bubbles
              // ----------------------------------------------------------------
              // --------------------------------------------------------------------
              // ------------------------------------------------------------------


     
      var b = setInterval(function(){
              var c = Math.floor(Math.random()* 4);
             var d = Math.floor(Math.random()* 4);
             var e = Math.floor(Math.random()* 8);
              var r2 = Math.floor(Math.random()* 255) ;
             var r3 = Math.floor(Math.random()* 255);
             var r4 = Math.floor(Math.random()* 255) ;        
              var randomScore = Math.floor(Math.random()* 7) + 2;
           
                // c++;
                // if (c >= 8) { c = 0;}
                 // var q = questions[c];
  
  var s = 1;
        var winW = window.innerWidth;
        var winH = window.innerHeight;
             wh = winH/100*50;
             ww = winW-80;
              var k = document.createElement("div");
              var r = Math.floor(Math.random()* ww);
             var r1 = Math.floor(Math.random()*wh);
              var score = 0;
             var score1 = document.getElementById("score1");
              var k = document.createElement("div");

             k.id = "k";
              k.className = "j";
             k.style.left = r + "px";
              // a.style.top = r1 + "px";
             
              container.appendChild(k);
             // var b2 = setInterval(function() {

              // s++;
              // k.style.bottom = s + 'px';
              // a.style.height = s +'px';
              // a. style.borderRadius = s + 'px';
              k.style.backgroundImage = "url(../images/bob/bob"+c+".png)";
              k.style.backgroundCOlor = "url(../images/bob/bob"+c+".png)";
                k.style.backgroundColor =  "rgba(" + r2 + ", " + r3 + ", " + r4 + ", 1"+")";
            k.style.color =  "rgba(" + r4 + ", " + r3 + ", " + r4 + ", 1"+")";
          
              // a.style.backgroundImage = "url(" + q.image + ")";
               // if(s>= winH){
                  k.addEventListener("animationend", function(){
                         container.removeChild(k);
              
                     

               });
             // },5);
                k.onclick = function (){
                         k.style.width =  '80px';
                         k.style.height = '80px';
                          k.style.border = "none";
                         // k.style.top = 0;
                          // meow.src = q.sound;
                          k.style.backgroundColor = "transparent";
                          k.style.backgroundImage = "url(../images/bob/"+d+".png)";
              k.style.zhard = 4;
              // clearInterval(b2);
               bonus = randomScore * 10;
                k.textContent = bonus;
                  setScore(bonus);
                  bonuslife1();
                   setInterval(function(argument) {
               s = s+10;
                k.style.bottom = s + 'px';
             

             },0.9);
                     meow.src = "../audio/"+e+".mp3";
                   meow.play();
                   shark1.volume = 0.4;

                   setTimeout(function(){
                    container.removeChild(k);
                 shark1.volume = 1;

                   }, 1200)
            
                }

      },500);
     



     // // red monsters 
     // ----------------------------------------------------------------
     // ------------------------------------------------------------
     // --------------------------------------------------------------
     // ------------------------------------------------------------


      var m = setInterval(function(){
              var e = Math.floor(Math.random()* 3);
             var d = Math.floor(Math.random()* 2);
             
                // c++;
                // if (c >= 8) { c = 0;}
                 // var q = questions[c];
  
  var s = 1;
        var winW = window.innerWidth;
        var winH = window.innerHeight;
             wh = winH/100*50;
             ww = winW-80;
              var l = document.createElement("div");
              var r = Math.floor(Math.random()* ww);
             var r1 = Math.floor(Math.random()*wh);
              var score = 0;
             var score1 = document.getElementById("score1");
              var l = document.createElement("div");

             l.id = "l";
              l.className = "j";
             l.style.left = r + "px";
              // a.style.top = r1 + "px";
             
              container.appendChild(l);
             // var b2 = setInterval(function() {

             //  s = s+1;
             //  l.style.bottom = s + 'px';
              // a.style.height = s +'px';
              // a. style.borderRadius = s + 'px';
              l.style.backgroundImage = "url(../images/mon"+d+".png)";
              // a.style.backgroundImage = "url(" + q.image + ")";
               l.addEventListener("animationend", function(){
                         container.removeChild(l);
              
                     

               });
             // },3);
                l.onclick = function (){
                     setLife();
                       container.removeChild(l);
                
            
                }

      },5000);



 // //dancers
 // // ---------------------------------------------------------
 // // ------------------------------------------------------
 // // --------------------------------------------




      var n = setInterval(function(){
              var e = Math.floor(Math.random()* 5);
             var d = Math.floor(Math.random()* 9);
             var f = Math.floor(Math.random()* 8);
             var randomScore = Math.floor(Math.random()* 5) +2;
                 var r4 = Math.floor(Math.random()* 13) ;        
         var favColor = ["red","yellow","blue","navy","purple","marroon","orange","cyan","gold","tomato","deeppink","white","green"]
                // c++;"
                // if (c >= 8) { c = 0;}
                 // var q = questions[c];
  
        var winW = window.innerWidth;
        var winH = window.innerHeight;
             wh = winH/100*50;
             ww = winW-80;
              var l = document.createElement("div");
              var r = Math.floor(Math.random()* ww);
             var r1 = Math.floor(Math.random()*wh);
              var score = 0;
             var score1 = document.getElementById("score1");
              var l = document.createElement("div");
             l.id = "l";
              l.className = "j";
             l.style.left = r + "px";
              // a.style.top = r1 + "px";
             
              container.appendChild(l);
             // var b2 = setInterval(function() {
                // s++;
              // l.style.bottom = s + 'px';
              // // a.style.height = s +'px';
              // a. style.borderRadius = s + 'px';
                     l.style.backgroundImage = "url(../images/dancers/"+e+".png)";
                 l.style.backgroundColor =  favColor[r4];
                  l.style.color = favColor[f];
              l.addEventListener("animationend", function(){
                  // console.log(s);
                 // a.style.backgroundImage = "url(" + q.image + ")";

               // if(s>= winH){
                            // clearInterval(b2);
                          container.removeChild(l);
                          setLife();
             

               });
              // },4);
                l.onclick = function (){
                 var  wi1 = 120;
                 var  li1 = 120;
                 if (li1 <= 10) {
              clearInterval(sl1);
                 container.removeChild(l);
                       
             }
                         l.style.width =  li1+'px';
                         l.style.height = wi1+'px';
                          // k.style.left = 0;
                         // k.style.top = 0;
                          // meow.src = q.sound;
                         l.style.border = "none";
                          l.style.backgroundImage = "url(../images/bob/"+d+".png)";
                           l.style.backgroundColor = "transparent";
                            // l.style.zhard = 4;
              // clearInterval(b2);
                // navigator.vibrate(70);

            
                  pop.src = "../audio/"+f+".mp3";
                      pop.play();
                   shark1.volume = 0.4;
                    bonus = randomScore * 10;
                    l.textContent = bonus;
               var sl1 = setInterval(function(argument) {
               li1 = li1 - 7;
               wi1 = li1 - 7;
                l.style.height = li1 + 'px';
                 l.style.height = li1 + 'px';


             },0.5);
                     // overlay.style.display = "block";
                   setScore(bonus);
                   bonuslife1();
                   // getCoins();
                                  setTimeout(function(){
                    // overlay.style.display = "none";
                         container.removeChild(l);
               
                   }, 500)
           
                }

      },1000);
     


 //extraLife
 // ---------------------------------------------------------
 // ------------------------------------------------------
 // --------------------------------------------


     var o = setInterval(function(){
              var e = Math.floor(Math.random()* 5);
             var d = Math.floor(Math.random()* 9);
             var f = Math.floor(Math.random()* 8);
                 var r4 = Math.floor(Math.random()* 13) ;        
         var favColor = ["red","yellow","blue","navy","purple","marroon","orange","cyan","gold","tomato","deeppink","white","green"]
                // c++;"
                // if (c >= 8) { c = 0;}
                 // var q = questions[c];
  
        var winW = window.innerWidth;
        var winH = window.innerHeight;
             wh = winH/100*50;
             ww = winW-80;
              var l = document.createElement("div");
              var r = Math.floor(Math.random()* ww);
             var r1 = Math.floor(Math.random()*wh);
              var score = 0;
             var score1 = document.getElementById("score1");
              var l = document.createElement("div");
             l.id = "l";
              l.className = "j";
             l.style.left = r + "px";
              // a.style.top = r1 + "px";
             
              container.appendChild(l);
             // var b2 = setInterval(function() {
                // s++;
              // l.style.bottom = s + 'px';
              // // a.style.height = s +'px';
              // a. style.borderRadius = s + 'px';
                     l.style.backgroundImage = "url(../images/dancers/"+e+".png)";
                 l.style.backgroundColor =  favColor[r4];
               
              l.addEventListener("animationend", function(){
                  // console.log(s);
                 // a.style.backgroundImage = "url(" + q.image + ")";

               // if(s>= winH){
                            // clearInterval(b2);
                          container.removeChild(l);
                          setLife();
             

               });
              // },4);
                l.onclick = function (){
                 var  wi1 = 120;
                 var  li1 = 120;
                 if (li1 <= 10) {
              clearInterval(sl1);
                 container.removeChild(l);
                       
             }
                         l.style.width =  li1+'px';
                         l.style.height = wi1+'px';
                          // k.style.left = 0;
                         // k.style.top = 0;
                          // meow.src = q.sound;
                         l.style.border = "none";
                          l.style.backgroundImage = "url(../images/bob/"+d+".png)";
                           l.style.backgroundColor = "transparent";
                            // l.style.zhard = 4;
              // clearInterval(b2);
                // navigator.vibrate(70);

            
                  pop.src = "../audio/"+f+".mp3";
                      pop.play();
                   shark1.volume = 0.4;
                    bonus = 5;
               var sl1 = setInterval(function(argument) {
               li1 = li1 - 7;
               wi1 = li1 - 7;
                l.style.height = li1 + 'px';
                 l.style.height = li1 + 'px';


             },0.5);
                     // overlay.style.display = "block";
                   extraLife();
                   l.textContent="extra life";
                   // getCoins();
                                  setTimeout(function(){
                    // overlay.style.display = "none";
                         container.removeChild(l);
               
                   }, 500)
           
                }

      },30000);
     

                     var lifeCount = parseInt(storage.getItem("lifes"));
                   if (lifeCount <= 0) {
                     lifes = storage.setItem("lifes",  "5");
                   life2.textContent = lifes;
                    
                   };
                 
     

   container.style.display = "";
      start.style.display = "none";
 

// Add the deviceready event
document.addEventListener("deviceready", function(){
     

    // attach events
      document.addEventListener("pause", onPause, false);
   
}, false);

 
function onPause() {                
   window.location = "menu.html";

};
// });
 // error callback
      
     // replay.addEventListener("click", function(argument) {
     //    window.location = "hard.html";

     // })
       	
     	   
  //  window.addEventListener("blur",function(){
  // 	   window.location = "hard.html";
  // })


   	};

document.addEventListener("deviceready", function(){
     

    // attach events
      document.addEventListener("pause", onPause, false);
   
}, false);

 
function onPause() {                
   window.location = "hard.html";

};
