var numOfButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i<numOfButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",clicking);
}

function clicking(){

  // this.style.color = "grey";
  var buttonInHTML = this.innerHTML;

  makeSound(buttonInHTML);

  buttonAnimation(buttonInHTML);
}

document.addEventListener("keydown",keyboard);

function keyboard(event){
   makeSound(event.key.toLowerCase());
   buttonAnimation(event.key.toLowerCase());
}

function makeSound(key){

  switch (key) {
    case "a":
        var tom1 = new Audio ("sounds/tom-1.mp3");
        tom1.play();
      break;

    case "b":
         var tom2 = new Audio ("sounds/tom-2.mp3");
         tom2.play();
      break;

    case "c":
          var tom3 = new Audio ("sounds/tom-3.mp3");
          tom3.play();
       break;

    case "d":
           var tom4 = new Audio ("sounds/tom-4.mp3");
           tom4.play();
        break;

    case "e":
          var snare = new Audio ("sounds/snare.mp3");
          snare.play();
         break;

    case "f":
           var crash = new Audio ("sounds/crash.mp3");
           crash.play();
         break;

     case "g":
           var kick = new Audio ("sounds/kick-bass.mp3");
           kick.play();
       break;

    default: console.log(buttonInHTML);
  }
}


function buttonAnimation(currentKey){

  var active =  document.querySelector("." + currentKey);

  active.classList.add("pressed");

  setTimeout(function() {
    active.classList.remove("pressed");
  }, 100);

}
