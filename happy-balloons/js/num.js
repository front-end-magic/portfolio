



    
     //var currentQuestion = Math.floor(Math.random()* 7);
     var bubble = document.getElementById("bubble");
        var play1 = document.getElementById("play1");
        var pop = document.getElementById("pop");
          var container = document.getElementById('container');
              var container1 = document.getElementById('container1');
     var start = document.getElementById('start');
      var more = document.getElementById('more');
     var overlay = document.getElementById('overlay');
    	var b = document.getElementById("b");
  		var j = document.getElementById("j");
     var c = -1;
function x (questionthree) {
   // var q = words[c];

             play1.play();
             play1.volume = 0.4;
  var i = setInterval(function(){
     var s = 10;
  // var c = Math.floor(Math.random()* numbers.length);
         
            
     var winW = window.innerWidth;
        var winH = window.innerHeight;
        var atop = winH / 5;
        var aleft = winww / 5;
          var a = document.createElement("div");
            var winww = winW - 80;
          var r = Math.floor(Math.random()* winww);
          // var r = aleft*2;
             var r1 = Math.floor(Math.random()*winH);
               var j6 = Math.floor(Math.random()*8);
                         
              a.style.backgroundImage = "url(../images/"+ j6 + ".png)";
      
             a.id = "j";
             
              a.style.left = r + "px";
              a.style.bottom = s + "px";
                b.appendChild(a);
           
           var i2 = setInterval(function() {

              s = s+3;
              a.style.bottom = s + 'px';
               if(s>= winH){
                            clearInterval(i2);
                            a.style.display = "none";
                            b.removeChild(a);
               }
                a.onclick = function (){
                    var r2 =  Math.floor(Math.random()*255);
             var r3 = Math.floor(Math.random()*255);
             var r4 = Math.floor(Math.random()*255);
             var r =  "rgba(" + r2 + ", " + r3 + ", " + r4 + ", 1)";
                    c++;
                if (c >= numbers.length) { c = 0;}
               
                 var q = numbers[c];
                clearInterval(i2);
                var f = 300;
                pop.src = "../audio/squash.mp3";
                pop.play();
                var i3 = setInterval(function(){
                  f = f-3;
                 a.style.width = f + "px";
                a.style.height = f + "px";
              
                 if (f <= 50){
                  clearInterval(i3);
                   f =  200;
                    pop.src = "../audio/gun.mp3";
                pop.play();
                   a.style.backgroundImage = "url(" + q.image+ ")";
                   a.textContent = q.name;
                a.style.width = f + "px";
                a.style.height = f + "px";
                a.style.color = r;
                a.style.top = "50px";
                a.style.right =  "50px";
                a.style.height = atop * 2 + "px";
                a.style.width = aleft*2+"px";
                a.style.zIndex = 50;
                  a.style.left = atop + "px";
                   container1.style.display = "block";
               
                     TTS.speak({
            text: q.name,
            locale: 'en-GB',

            rate: 0.00999
        } );     
          
                setTimeout(function(){
                  pop.pause();
                  pop.currentTime = 0;
                      var q = numbers[c];
                
  },500);
                 } 
                  },1)
                  setTimeout(function(){
                     a.style.display = "none";
                    // b.removeChild(a);
                 container1.style.display = "none";
                          }, 2500)             

               }
             },30);   
     },1500)


//Add the deviceready event
document.addEventListener("deviceready", function(){
     

    // attach events
      document.addEventListener("pause", onPause, false);
   

 
function onPause() {  
  window.location = "../index.html";

};
 document.addEventListener("resume", onResume, false);
    
// function onResume() {  
//   window.location = "../index.html";

// };
}, false);

       }
       x();
      