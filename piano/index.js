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

document.addEventListener("keypress",keyboard);

function keyboard(event){
   makeSound(event.key);
   buttonAnimation(event.key);
}

function makeSound(key){

  switch (key) {
    case "a":
        var key01 = new Audio ("sounds/key01.mp3");
        key01.play();
      break;

    case "b":
         var key02 = new Audio ("sounds/key02.mp3");
         key02.play();
      break;

    case "c":
        var key03 = new Audio ("sounds/key03.mp3");
        key03.play();
      break;

    case "d":
         var key04 = new Audio ("sounds/key04.mp3");
         key04.play();
      break;

    case "e":
          var key05 = new Audio ("sounds/key05.mp3");
          key05.play();
        break;

    case "f":
           var key06 = new Audio ("sounds/key06.mp3");
           key06.play();
        break;

    case "g":
          var key07 = new Audio ("sounds/key07.mp3");
          key07.play();
        break;

    case "h":
           var key08 = new Audio ("sounds/key08.mp3");
           key08.play();
        break;

    case "i":
            var key09 = new Audio ("sounds/key09.mp3");
            key09.play();
          break;

    case "j":
             var key10 = new Audio ("sounds/key10.mp3");
             key10.play();
          break;

    case "k":
          var key11 = new Audio ("sounds/key11.mp3");
          key11.play();
        break;

    case "l":
           var key12 = new Audio ("sounds/key12.mp3");
           key12.play();
        break;

    case "m":
          var key13 = new Audio ("sounds/key13.mp3");
          key13.play();
        break;

    case "n":
         var key14 = new Audio ("sounds/key14.mp3");
         key14.play();
       break;

    case "o":
          var key15 = new Audio ("sounds/key15.mp3");
          key15.play();
       break;

    case "p":
           var key16 = new Audio ("sounds/key16.mp3");
           key16.play();
        break;

    case "q":
            var key17 = new Audio ("sounds/key17.mp3");
            key17.play();
          break;

    case "r":
         var key18 = new Audio ("sounds/key18.mp3");
         key18.play();
        break;

    case "s":
        var key19 = new Audio ("sounds/key19.mp3");
        key19.play();
      break;

    case "t":
         var key20 = new Audio ("sounds/key20.mp3");
         key20.play();
      break;

    case "u":
        var key21 = new Audio ("sounds/key21.mp3");
        key21.play();
      break;

    case "v":
        var key22 = new Audio ("sounds/key22.mp3");
        key22.play();
      break;

    case "w":
          var key23 = new Audio ("sounds/key23.mp3");
          key23.play();
      break;

    case "x":
          var key24 = new Audio ("sounds/key24.mp3");
          key24.play();
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
