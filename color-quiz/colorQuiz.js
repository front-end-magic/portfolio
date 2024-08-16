var currentQuestion = 0;
var opt1 = document.querySelector(".opts1");
var opt2 = document.querySelector(".opts2");
var opt3 = document.querySelector(".opts3");
var head1 = document.querySelector(".head1");
var head2 = document.querySelector(".head2");
var head3 = document.querySelector(".head3");
var darkColor1 = document.querySelectorAll(".dark-color1");
var darkColor2 = document.querySelectorAll(".dark-color2");
var darkColor3 = document.querySelectorAll(".dark-color3");
var lightStage = document.querySelector(".light-color");
var darkStages = document.querySelectorAll(".dark-color");
var word = document.querySelector(".word");
var next = document.querySelector(".next");
var hint = document.querySelector('.hint');
var clap = document.querySelector(".clap");
var opts = document.querySelectorAll(".opts");
var faces = document.querySelectorAll(".face");
var head = document.querySelectorAll(".head");
var innerCurtain = document.querySelector(".inner-curtain");
var curtainRing = document.querySelectorAll(".left-curtain5");
var foot = document.querySelectorAll(".foot");
var upperLeg = document.querySelectorAll(".upper-leg");
var lowerLeg = document.querySelectorAll(".lower-leg");
var rightUpper = document.querySelectorAll(".right-upper");
var rightlower = document.querySelectorAll(".right-lower");
var rightfoot = document.querySelectorAll(".right-foot");
var theatre = document.querySelector(".theatre");
var overlay = document.querySelector(".overlay");
var haa = document.querySelector(".haa");
var body = document.getElementById('body');
 var r1 = Math.floor(Math.random()* questions.length);
// var r1 = 0;
	
function loadquestion (currentQuestion) {
	//  var r1 = Math.floor(Math.random()* questions.length);
      
	// var q = questions[r1];
	var q = questions[currentQuestion];
    head1.style.backgroundColor =  q.option1a ;
	head2.style.backgroundColor =  q.option2a ;   
	head3.style.backgroundColor =  q.option3a ;  

	for (var index = 0; index < darkColor1.length; index++) {
		var cloth1 = darkColor1[index];
		cloth1.style.backgroundColor =  q.option1b ;

	}
	for (var index = 0; index < darkColor2.length; index++) {
		var cloth2 = darkColor2[index];
		cloth2.style.backgroundColor =  q.option2b ;

	}
	for (var index = 0; index < darkColor3.length; index++) {
		var cloth3 = darkColor3[index];
		cloth3.style.backgroundColor =  q.option3b ;

	}

	ans = q.answer;
	speak1 = q.name;
  next.style.display = "none";
  overlay.style.display = "none";
	   
		// // var voice = new p5.Speech();
		// // voice.speak(speak1);
	
		// 	TTS.speak({
        //     text: speak1,
        //     locale: 'en-US',


        //     rate: 0.75
        // } );		 	
   
      
			 	
   

opt1.addEventListener("click", function(){
	var selectedOption = document.querySelector('#opt1');
	if(ans == 1){
		lightStage.style.backgroundColor = q.option1a;
		for (var index = 0; index < darkStages.length; index++) {
			var darkStage = darkStages[index];
			darkStage.style.backgroundColor = q.option1b;
		}
	
	correct();

	} else {
    wrong();
	
}
})
opt2.addEventListener("click", function(){
	var selectedOption = document.querySelector('#opt2');
	if(ans == 2){
		lightStage.style.backgroundColor = q.option2a;
		for (var index = 0; index < darkStages.length; index++) {
			var darkStage = darkStages[index];
			darkStage.style.backgroundColor = q.option2b;
		}
	
	correct();
	} else {
    wrong();
	
}
})
opt3.addEventListener("click", function(){
	var selectedOption = document.querySelector('#opt3');
	if(ans == 3){
    	lightStage.style.backgroundColor = q.option3a;
		for (var index = 0; index < darkStages.length; index++) {
			var darkStage = darkStages[index];
			darkStage.style.backgroundColor = q.option3b;
		}
	 
correct();
	} else {
	wrong();
	
}
})

};
function loadNextQuestion(){
	 // window.location = "quiz.html"
	//  r1 = Math.floor(Math.random()*questions.length);

	//   var currentQuestion = r1;
	 currentQuestion ++;
	 if (currentQuestion >= questions.length) {
	 	currentQuestion = 0
	 }
clap.pause();
    clap.currentTime = 0;
   forwardOne();
 	loadquestion(currentQuestion);
//forwardOne();
} 

function forwardOne() {
    
	// if(opt1.style.visibility == "hidden")
	// 	opt1.style.visibility = "visible";

	// if(opt2.style.visibility == "hidden")
	// 	opt2.style.visibility = "visible";

// if(opt3.style.visibility == "hidden")
// 		opt3.style.visibility = "visible";
	

		
	theatre.style.display= "none";
	for (var index = 0; index < faces.length; index++) {
		var face = faces[index];
		face.style.display = "none";
	}
	for (var index = 0; index < head.length; index++) {
		var head11 = head[index];
		head11.classList.remove("head-dance");
	}
	
	for (var index = 0; index < upperLeg.length; index++) {
		var upper1 = upperLeg[index];
		upper1.classList.remove("upper-dance");
		upper1.style.visibility = "hidden";
	
	}
	
	for (var index = 0; index < lowerLeg.length; index++) {
		var lower1 = lowerLeg[index];
		lower1.classList.remove("lower-dance");
		lower1.style.visibility = "hidden";
	
	}
	
	for (var index = 0; index < foot.length; index++) {
		var foot1 = foot[index];
		foot1.classList.remove("foot-dance");
		foot1.style.visibility = "hidden";
	
	}
	
	for (var index = 0; index < rightUpper.length; index++) {
		var rightUpper1 = rightUpper[index];
		rightUpper1.classList.remove("right-delay");
		rightUpper1.style.visibility = "hidden";
	
	}
		
	for (var index = 0; index < rightlower.length; index++) {
		var rightlower1 = rightlower[index];
		rightlower1.classList.remove("right-delay");
		rightlower1.style.visibility = "hidden";
	
	}	
	
	for (var index = 0; index < rightfoot.length; index++) {
		var rightfoot1 = rightfoot[index];
		rightfoot1.classList.remove("right-delay");
		rightfoot1.style.visibility = "hidden";
	
	}
		};
  
  // to fire when the correct option is clicked.


function correct(){
	var q = questions[currentQuestion];
 
for (var index = 0; index < faces.length; index++) {
	var face = faces[index];
	face.style.display = "block";
	
}




for (var index = 0; index < opts.length; index++) {
	var opt = opts[index];
	opt.textContent = "";

}


	 clap.play();
	 next.style.display = "block";
	 theatre.style.display = "block";
	 overlay.style.display = "block";
	 innerCurtain.textContent=q.varter;

for (var index = 0; index < head.length; index++) {
	var head11 = head[index];
	head11.classList.add("head-dance");
	
}

for (var index = 0; index < upperLeg.length; index++) {
	var upper1 = upperLeg[index];
	upper1.classList.add("upper-dance");
	upper1.style.visibility = "visible";
	
}

for (var index = 0; index < lowerLeg.length; index++) {
	var lower1 = lowerLeg[index];
	lower1.classList.add("lower-dance");
	lower1.style.visibility = "visible";

}

for (var index = 0; index < foot.length; index++) {
	var foot1 = foot[index];
	foot1.classList.add("foot-dance");
	foot1.style.visibility = "visible";

}

for (var index = 0; index < rightUpper.length; index++) {
	var rightUpper1 = rightUpper[index];
	rightUpper1.classList.add("right-delay");
	rightUpper1.style.visibility = "visible";

}
	
for (var index = 0; index < rightlower.length; index++) {
	var rightlower1 = rightlower[index];
	rightlower1.classList.add("right-delay");
	rightlower1.style.visibility = "visible";

}	

for (var index = 0; index < rightfoot.length; index++) {
	var rightfoot1 = rightfoot[index];
	rightfoot1.classList.add("right-delay");
	rightfoot1.style.visibility = "visible";

}
	
	
	 var q = [ "correct", "good job", "fantastic", "excellent", "great job"]
		   var w = Math.floor(Math.random()*q.length);
		 
		 
 		
    // setTimeout(function(){
	// TTS.speak({
    //         text: q[w],
    //         locale: 'en-US',


    //         rate: 0.009
    //     } );
    // },500);
   
};
// to fire when the wrong option is clicked.
function wrong(){
	haa.play();
	// setTimeout(function(){
	// TTS.speak({
    //         text: "try again",
    //         locale: 'en-US',


    //         rate: 0.009
    //     } );
    // },500);
}
 loadquestion(currentQuestion);



// function backOne(){
// 		 var currentQuestion = Math.floor(Math.random()*questions.length);;
// clap.pause();
// clap.currentTime = 0;
// container.style.visibility = 'visible';
//     		container.style.display = "";
//      	loadquestion(currentQuestion);
// forwardOne();
// // if(currentQuestion ==0){
// // 	currentQuestion = questions.length;

// // 	}
// }
// container.addEventListener('touchstart', function(evt){
//     startingX = evt.touches[0].clientX;
//      });
//  container.addEventListener('touchmove', function(evt){
//    var touch = evt.touches[0];
//       var change = startingX - touch.clientX;
//        });
//  container.addEventListener('touchend', function(evt){
//  var change = startingX - evt.changedTouches[0].clientX;
//       var threshold = screen.width / 6;
//      //	 if (change < threshold){
    	
//           if (change > 0 && change > threshold){
//         loadNextQuestion();   
//       }
    
//       // else if (change < threshold && change < 0){
//       //   backOne();
//       // }
//       else {
//         loadquestion(currentQuestion);
//       }
      
  //  });
// function setUp (){
// 	var q = questions[questionIndex];
	
// 		var voice = new p5.Speech();
// 		voice.speak(q.info);
// 	}
	

	