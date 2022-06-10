var photo = document.getElementById("dice");
var btn=document.getElementById("rbtn1");
var current=document.getElementById("total1");
let score=0;
function onclicked(){
  console.log("clicked");
  a = Math.floor(Math.random() * 6) + 1;
  if (a == 1) {
    photo.style.backgroundImage = "url('one.jpg')";
    score=score-score;
  }
  if (a == 2) {
    photo.style.backgroundImage = "url('two.jpg')";
    score=a+score;
  }
  if (a == 3) {
    photo.style.backgroundImage = "url('three.jpg')";
    score=a+score;
  }
  if (a == 4) {
    photo.style.backgroundImage = "url('four.png')";
    score=a+score;
  }
  if (a == 5) {
    photo.style.backgroundImage = "url('five.jpg')";
    score=a+score
  }
  if (a == 6) {
    photo.style.backgroundImage = "url('six.jpg')";
    score=a+score;
  }
current.innerHTML=score;
}
