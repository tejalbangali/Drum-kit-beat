// Detecting Button

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    this.style.color = "#BEB2C8";

    playAudioByKey(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

// Detecting Keypress

document.addEventListener("keydown", function (event) {
  playAudioByKey(event.key);
  buttonAnimation(event.key);
});

function playAudioByKey(key) {
  if (key == "w") {
    let audio = new Audio("./sounds/tom-1.mp3");
    audio.play();
  } else if (key == "a") {
    let audio = new Audio("./sounds/tom-2.mp3");
    audio.play();
  } else if (key == "s") {
    let audio = new Audio("./sounds/tom-3.mp3");
    audio.play();
  } else if (key == "d") {
    let audio = new Audio("./sounds/tom-4.mp3");
    audio.play();
  } else if (key == "j") {
    let audio = new Audio("./sounds/snare.mp3");
    audio.play();
  } else if (key == "k") {
    let audio = new Audio("./sounds/crash.mp3");
    audio.play();
  } else if (key == "l") {
    let audio = new Audio("./sounds/kick-bass.mp3");
    audio.play();
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
