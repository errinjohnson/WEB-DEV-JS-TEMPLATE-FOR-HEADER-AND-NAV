var modify;
modify = document.lastModified;
var modifyStyle;
modifyStyle = document.getElementById("last_modified");
modifyStyle.innerHTML = modify;

// function openDoc() {
//   //window.open(URL, name, specs, replace)
//   window.open("./aws-cli.pdf", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=905,height=400");
// }

// function openDoc2() {
//   //window.open(URL, name, specs, replace)
//   window.open("#");
// }


//Progress Bar
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
} move();

//Read More function
function readMore() { //get elements assign to variable
    var dotText = document.getElementById("dot");
    var readMoreText = document.getElementById("readMore");
    var btnText = document.getElementById("btn");

    if (readMoreText.style.display === "none") {
        dotText.style.display = "none";
        readMoreText.style.display = "inline";
        btnText.innerHTML = "read less";
    } else {
        dotText.style.display = "inline";
        readMoreText.style.display = "none";
        btnText.innerHTML = "read more";
    }
}


// document.body.onload = addElement;
// // document.getElementById("viewEvent").addEventListener("load",addElement2);


// function addElement() {
//     // CREATE NEW DIV add NEW CONTENT and SET ATTRIBUTE
//     let newDiv = document.createElement("div");
//     newDiv.setAttribute("id", "myID");
//     let newContent = document.createElement("a");
//     newContent.setAttribute("href", "https://rockitwomen.com");
//     newContent.setAttribute("target", "__blank");
//     newContent.setAttribute("class", "mx-auto");
//     newDiv.appendChild(newContent);

//     let newContent2 = document.createElement("img");
//     newContent2.src = "https://s3-us-west-2.amazonaws.com/alchemymomentum.com/img/RockIT_Logo.jpg";

//     newContent.appendChild(newContent2);

//     newDiv.appendChild(newContent);

//     // add the newly created element and its content into the DOM
//     let currentDiv = document.getElementById("viewEvent");
//     document.body.insertBefore(newDiv, currentDiv);
// }
// //add Sponsor Valoline to different location on Aprils's 2021 Event
// //new div added for logo

// let newDiv2 = document.createElement('div');
// newDiv2.setAttribute('id','myID2');
// let newContent3 = document.createElement('a');
// newContent3.setAttribute('href', 'https://www.valvoline.com/');
// newContent3.setAttribute('target', '__blank');
// newContent3.setAttribute('class', 'd-flex');

// newDiv2.appendChild(newContent3);

// let newContent4 = document.createElement('img');
// newContent4.src = "https://s3-us-west-2.amazonaws.com/alchemymomentum.com/img/valvoline.png";
// newContent3.appendChild(newContent4);
// newDiv2.appendChild(newContent3);


// let currentDiv2 = document.getElementById("myID");
// document.body.insertBefore(newDiv2, currentDiv2);
 
// function changeInnerHTML()
// {
//     //change node with text "Speakers to 'Guest Speaker(s)'"
//     x = document.getElementsByClassName("red-heading");
//     y = x[0];
// 	y.innerHTML = "Guest Speaker(s)";
//     console.log(y);
// }
// changeInnerHTML();


