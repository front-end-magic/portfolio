






var appCover = document.getElementById('app-cover');
var appCover1 = document.getElementById('app-cover1');
var  pause = document.getElementById('pause');
var  resume = document.getElementById('resume');
var  restart = document.getElementById('restart');
var  pausepage = document.getElementById('pausepage');
var  pausefree = document.getElementById('pausefree');
var  bonus1 = document.getElementById('bonus1');
var  bonus2 = document.getElementById('bonus-inner');





// pausefree.addEventListener("click", function(){
// 	document.addEventListener(admob.Event.onInterstitialReceive, onInterstitialReceive, false);//show in ad receive event fun need add receive listener
//  admob.cacheInterstitial();// load admob Interstitial
//  function onInterstitialReceive(message) {//show in ad receive event fun
//      admob.showInterstitial();
//  }

// });

claim.addEventListener("click", function(){

       
window.location = "hard.html";

 var lifeCount = parseInt(storage.getItem("lifes"));
                   life1 = lifeCount + 2;
                         life2.textContent = life1;
                var  lifes = storage.setItem("lifes", JSON.stringify(life1));
               
              
})
appCover.addEventListener("click",function(){
appCover.style.display = "none";
appCover1.style.display = "block";
});

appCover1.addEventListener("click",function(){
appCover1.style.display = "none";
});

resume.addEventListener("click",function(){
window.location = "hard.html";
});