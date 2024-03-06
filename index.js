for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {

    // this.style.color="white";
var button=this.innerHTML;
makeSound(button);
animation(button);
  });
}

document.addEventListener("keydown", function(event){
makeSound(event.key);
animation(event.key);

});

function makeSound(Input){
  var input=Input.toLowerCase();
  switch (input) {
    //如何讓按下CapsLock時不被偵測到??   --因為 var input=Input.toLowerCase(); 已經把大寫都變小寫了  所以case "CapsLock" 也要變小寫case "capslock" 才有用
    case "capslock":
      break;
    case "w":
      var sound1 = new Audio("sounds/tom-1.mp3");
      sound1.play();
      break;
    case "a":
      var sound2 = new Audio("sounds/tom-2.mp3");
      sound2.play();
      break;
    case "s":
      var sound3 = new Audio("sounds/tom-3.mp3");
      sound3.play();
      break;
    case "d":
      var sound4 = new Audio("sounds/tom-4.mp3");
      sound4.play();
      break;
    case "j":
      var sound5 = new Audio("sounds/kick-bass.mp3");
      sound5.play();
      break;
    case "k":
      var sound6 = new Audio("sounds/snare.mp3");
      sound6.play();
      break;
    case "l":
      var sound7 = new Audio("sounds/crash.mp3");
      sound7.play();
      break;
    default:Animation();
    var sound0 = new Audio("sounds/wrong.mp3");
    sound0.play();
  }
}

function animation(ButtonOrKey){
  var buttonOrKey = ButtonOrKey.toLowerCase();
  var activeButton = document.querySelector("." + buttonOrKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    document.querySelector(".pressed").classList.remove("pressed")
  },100)

}





//ripple effect
// const classes = ["w", "a", "s", "d", "j", "k", "l"];

// async function myAsyncFunction() {
  
//   function delay(n) {
//     return new Promise(function(resolve) {
//       setTimeout(resolve, n * 1000);
//     });
//   } 
  
  
//   $("button").on("click", async function() {
  
//   let buttonClicked = $(this).attr("id");

  

//   for (var i = 0; i < classes.length; i++) {
//     if (buttonClicked === classes[i]) {

//       for (var p = i; p < classes.length + 10; p++) {
//         let forwardButton = classes[p]; //p用來處理右邊的鍵
//         let n = (i * 2) - p; //n用來處理左邊的鍵
//         let backwardButton = classes[n];
//         $("." + backwardButton).addClass("ripple");//左邊的鍵會亮
//         $("." + forwardButton).addClass("ripple");//右邊的鍵會亮
//         await delay(0.05)
//         $("." + forwardButton).removeClass("ripple");
//         $("." + backwardButton).removeClass("ripple");
//         if (n < 0 && p > 7) { //classes.length + 10會讓迴圈多花時間   設個break強制終止迴圈
//           break;
//         }

//       }
//     }
//   }

    
//   // $("button").addClass("green"); 用以檢查迴圈花多久跑完
// });

// }

// document.addEventListener("keydown", function(event){
//   makeSound(event.key);
//   animation(event.key);
  
//   });
// myAsyncFunction();



// document.addEventListener("keydown",function(event){
// alert(event.key);
// })


const classes = ["w", "a", "s", "d", "j", "k", "l"];

function delay(n) {
  return new Promise(function(resolve) {
    setTimeout(resolve, n * 1000);
  });
}

async function triggerRippleEffect(buttonClicked) {
  for (var i = 0; i < classes.length; i++) {
    if (buttonClicked === classes[i]) {
      for (var p = i; p < classes.length + 10; p++) {
        let forwardButton = classes[p]; // Wrap around forward
        let n = (i * 2) - p  // Wrap around backward safely
        let backwardButton = classes[n];
        $("." + backwardButton).addClass("ripple");
        $("." + forwardButton).addClass("ripple");
        await delay(0.05);
        $("." + forwardButton).removeClass("ripple");
        $("." + backwardButton).removeClass("ripple");
        if (n < 0 && p > classes.length - 1) { // Adjusted condition for clarity
          break;
        }
      }
    }
  }
}

async function myAsyncFunction() {
  $("button").on("click", async function() {
    let buttonClicked = $(this).attr("id");
    await triggerRippleEffect(buttonClicked);
  });
  
  // Trigger ripple effect on key press
  $(document).on("keydown", async function(event) {
    let keyPressed = event.key.toLowerCase(); // Convert to lowercase to match your classes array
    if (classes.includes(keyPressed)) {
      await triggerRippleEffect(keyPressed);
    }
  });
}

myAsyncFunction();