let galleryContainer = document.querySelector(".gallery-container");
let description = document.querySelector(".description1");
let linkToCode = document.querySelector(".description");
let image1 = document.querySelector(".image");
let seeCode = document.querySelector("#see-code");
let next1 = document.querySelector(".next");
let back1 = document.querySelector(".back");
let play1 = document.querySelector(".play");
let currentNumber = 0;
let flip = document.querySelector(".flip-cover");
let flipImage = document.querySelector(".flip-image");
let isPlaying = true;
let playGallery;
function displayCard() {
  let card = flashItems[currentNumber];
  image1.style.backgroundImage = "url(" + card.image + ")";

  // description.textContent = card.aboutImage;
  linkToCode.setAttribute("href", card.link);
  seeCode.textContent = card.seeMore;
}
next1.addEventListener("click", function () {
  loadNextCard();
  flipPage();
  clearInterval(playGallery);
  isPlaying = true;
  // setTimeout(function () {
  //   flip.style.display = "none";
  //   displayCard(currentNumber);
  // }, 300);
});

back1.addEventListener("click", function () {
  loadPreviousCard();
  // setTimeout(function () {
  //   flip.style.display = "none";
  //   displayCard(currentNumber);
  // }, 300);
});

let animate;

function flipPage() {
  description.textContent = "";

  flip.style.display = "block";
  flip.style.animation = animate + "  2s ease";

  setTimeout(function () {
    let cardDesc = flashItems[currentNumber];
    description.textContent = cardDesc.aboutImage;
  }, 1200);

  setTimeout(function () {
    flip.style.display = "none";
  }, 1500);
}

function loadNextCard() {
  let card = flashItems[currentNumber];

  animate = "flip1";
  flipImage.style.backgroundImage = "url(" + card.image + ")";
  setTimeout(function () {
    flipImage.style.backgroundImage = "none";
    description.textContent = card.aboutImage;
  }, 1000);
  if (currentNumber >= flashItems.length - 1) {
    currentNumber = 0;
    setTimeout(function name(params) {
      displayCard(currentNumber);
    }, 10);
  } else {
    currentNumber += 1;
    setTimeout(function name(params) {
      displayCard(currentNumber);
    }, 10);
  }
}

function loadPreviousCard() {
  animate = "flip-back";
  let card = flashItems[currentNumber];
  flipImage.style.backgroundImage = "none";

  if (currentNumber === 0) {
    currentNumber = flashItems.length - 1;

    setTimeout(function () {
      flipImage.style.backgroundImage = "url(" + card.image + ")";
    }, 1000);
    setTimeout(function () {
      displayCard(currentNumber);
    }, 1800);
    flipPage();
  } else {
    currentNumber--;

    setTimeout(function () {
      let card = flashItems[currentNumber];
      flipImage.style.backgroundImage = "url(" + card.image + ")";
    }, 1000);
    setTimeout(function () {
      displayCard(currentNumber);
    }, 1800);
    clearInterval(playGallery);
    isPlaying = true;
  }

  flipPage();
}

displayCard();

//slide touch function
galleryContainer.addEventListener("touchstart", function (evt) {
  startingX = evt.touches[0].clientX;
});
galleryContainer.addEventListener("touchmove", function (evt) {
  let touch = evt.touches[0];
  let change = startingX - touch.clientX;
});
galleryContainer.addEventListener("touchend", function (evt) {
  let change = startingX - evt.changedTouches[0].clientX;
  let threshold = screen.width / 8;
  //	 if (change < threshold){

  if (change > 0 && change > threshold) {
    loadNextCard();
    flipPage();
    clearInterval(playGallery);
    isPlaying = true;
  } else if (change < threshold && change < 0) {
    loadPreviousCard();
  } else {
    displayCard(currentNumber);
  }
});

play1.addEventListener("click", () => {
  if (isPlaying) {
    loadNextCard();
    flipPage();
    playGallery = setInterval(() => {
      loadNextCard();
      flipPage();
    }, 2500);
  } else {
    clearInterval(playGallery);
  }
  console.log(isPlaying);

  isPlaying = !isPlaying;
});
