var photo = document.getElementById("dice");
var current1=document.getElementById("current1");
var current2=document.getElementById("current2");
var total1=document.getElementById("total1");
var total2=document.getElementById("total2");
var p1=document.getElementById("p1");
var p2=document.getElementById("p2");
var winner=document.getElementById("winner");
let scorea=0;
let scoreb=0;
let y=0;
let x=0;
function clicked1(){
  console.log("clicked");
  a = Math.floor(Math.random() * 6) + 1;
  if (a == 1) {
    photo.style.backgroundImage = "url('one.jpg')";
    scorea=scorea-scorea;
    hidden1();
  }
  if (a == 2) {
    photo.style.backgroundImage = "url('two.jpg')";
    scorea=a+scorea;
  }
  if (a == 3) {
    photo.style.backgroundImage = "url('three.jpg')";
    scorea=a+scorea;
  }
  if (a == 4) {
    photo.style.backgroundImage = "url('four.png')";
    scorea=a+scorea;
  }
  if (a == 5) {
    photo.style.backgroundImage = "url('five.jpg')";
    scorea=a+scorea
  }
  if (a == 6) {
    photo.style.backgroundImage = "url('six.jpg')";
    scorea=a+scorea;
  }

  current1.innerHTML=scorea;
  if(scorea>=50){
    winner.innerHTML="Player1 Wins"
    document.querySelector("html").style.backgroundColor= "Blue"
  }
}
function clicked2(){
  console.log("clicked");
  a = Math.floor(Math.random() * 6) + 1;
  if (a == 1) {
    photo.style.backgroundImage = "url('one.jpg')";
    scoreb=scoreb-scoreb;
    hidden2();
  }
  if (a == 2) {
    photo.style.backgroundImage = "url('two.jpg')";
    scoreb=a+scoreb;
  }
  if (a == 3) {
    photo.style.backgroundImage = "url('three.jpg')";
    scoreb=a+scoreb;
  }
  if (a == 4) {
    photo.style.backgroundImage = "url('four.png')";
    scoreb=a+scoreb;
  }
  if (a == 5) {
    photo.style.backgroundImage = "url('five.jpg')";
    scoreb=a+scoreb
  }
  if (a == 6) {
    photo.style.backgroundImage = "url('six.jpg')";
    scoreb=a+scoreb;
  }

  current2.innerHTML=scoreb;
  if(scoreb>=50){
    winner.innerHTML="Player2 Wins"
    document.querySelector("html").style.backgroundColor= "Blue"
  }
}

function hidden1(){
x=x+scorea;
p1.style.opacity="0.2";
p2.style.opacity="1";
total1.innerHTML=x;
scorea=0;
current1.innerHTML=0;
if(x>=50){
  winner.innerHTML="Player1 Wins"
  document.querySelector("html").style.backgroundColor= "Blue"
}
}
function hidden2(){
  y=y+scoreb;
  p2.style.opacity="0.2";
  p1.style.opacity="1";
  total2.innerHTML=y;
  scoreb=0;
  current2.innerHTML=0;
  if(y>=50){
    winner.innerHTML="Player2 wins"
    document.querySelector("html").style.backgroundColor= "blue"
  }
}
var hold1=document.getElementById("hbtn1");
var hold2=document.getElementById("hbtn2");
var roll1=document.getElementById("rbtn1");
var roll2=document.getElementById("rbtn2");
roll1.addEventListener("click",clicked1);
roll2.addEventListener("click",clicked2);
hold1.addEventListener("click",hidden1);
hold2.addEventListener("click",hidden2);
