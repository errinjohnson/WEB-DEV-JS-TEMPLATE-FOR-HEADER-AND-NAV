function readMore() 
    {  //get elements assign to variable
        var dotText = document.getElementById("dot");
        var readMoreText = document.getElementById("readMore");
        var btnText = document.getElementById("btn"); 
      
      if(readMoreText.style.display == "none")
      {
        dotText.style.display = "none";
        readMoreText.style.display = "inline";
        btnText.innerHTML = "read less";
      }
      else 
      {
        dotText.style.display = "inline";
        readMoreText.style.display = "none";
        btnText.innerHTML = "read more";
      }
    }
 function addNode() {
     var a = document.createElement('a');
     a.target = '_blank';
     a.href = 'https://www.eventcombo.com/membership/joinmembership?orgId=36638';
     a.innerText = 'Become a RockiT Member!';
     var x = document.getElementsByClassName("adiv ng-binding")[3];
     //var x = document.getElementById("text");
     x.appendChild(a);
     }addNode();
   
    

//adiv ng-binding