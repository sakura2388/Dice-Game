var randomImage1=Math.floor(Math.random()*6)+1;
var randomImage2=Math.floor(Math.random()*6)+1;

var image1="images/dice"+randomImage1+".png";
var image2="images/dice"+randomImage2+".png";

document.querySelectorAll("img")[0].setAttribute("src",image1);
document.querySelectorAll("img")[1].setAttribute("src",image2);

if(randomImage1>randomImage2)
  document.querySelector("h1").innerHTML="Player 1 wins!";
else if(randomImage2>randomImage1)
  document.querySelector("h1").innerHTML="Player 2 wins!";
else if(randomImage1==randomImage2)
  document.querySelector("h1").innerHTML="Draw";

