
var dots;
var moreText; 
var btnText; 
dots.style.display === "none";
function myReadMore() 
{    
  dots = document.getElementById("dots");
  moreText = document.getElementById("more");
  btnText = document.getElementById("myBtn"); 
  
  if (dots.style.display === "none")
  {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  }
  else
  {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}