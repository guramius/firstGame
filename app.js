let character = document.getElementById("character");
let block = document.getElementById("block");
let mainContainer = document.getElementById("game");
let counter = 0;
mainContainer.addEventListener("click", jump);
function jump() {
  character.classList.add("animate");
  setTimeout(function () {
    character.classList.remove("animate");
  }, 400);
}

function clauds() {
  let imgArr = [
    "claud7.png",
    "claud12.png",
    "claud9.png",
    "claud10.png",
    "claud11.png",
  ];
  for (i = 0; i < 5; i++) {
    let img = document.createElement("img");
    img.setAttribute("src", "./img/" + imgArr[i]);
    img.setAttribute("class", "allClaud");
    
    game.append(img);

    let top = Math.floor(Math.random() * (-100));
    let left = Math.floor(Math.random() * 10);

    img.style.top = top + "px";
    img.style.left = left + "px";
  }
}
clauds();

let checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<30 && blockLeft>-30 && characterTop>=120){
        block.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("demo").innerHTML = Math.floor(counter/100);
    }
}, 10);

function wetherMode() {
    setInterval(function () {
    game.classList.add("gray");
  }, 10000);
  setInterval(function () {
    game.classList.remove("gray");
  }, 10300);
  setInterval(function () {
    game.classList.add("darkeMode");
  }, 10300);
  setInterval(function () {
    game.classList.add("gray");
  }, 10350);
  setInterval(function () {
    game.classList.remove("gray");
  }, 10400);
  setInterval(function () {
    game.classList.add("darkeMode");
  }, 20000);
  setInterval(function () {
    game.classList.add("white");
  }, 40000);
}
wetherMode()