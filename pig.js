var photo = document.getElementById("dice");
var btn=document.getElementById("rbtn1");
var current1=document.getElementById("current1");
var current2=document.getElementById("current2");
let scorea=0;
let scoreb=0;
function onclicked(){
  console.log("clicked");
  a = Math.floor(Math.random() * 6) + 1;
  if (a == 1) {
    photo.style.backgroundImage = "url('one.jpg')";
    scorea=scorea-scorea;
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
}
function clicked(){
  console.log("clicked");
  a = Math.floor(Math.random() * 6) + 1;
  if (a == 1) {
    photo.style.backgroundImage = "url('one.jpg')";
    scoreb=scoreb-scoreb;
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
}
var hold1=document.getElementById("hbtn1");
var hold2=document.getElementById("hbtn2");
var roll1=document.getElementById("rbtn1");
var roll2=document.getElementById("rbtn2");
roll1.addEventListener("click",onclicked);
roll2.addEventListener("click",clicked);
