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
document.body.onload = addElement;
// document.getElementById("viewEvent").addEventListener("load",addElement2);


function addElement() {
    // CREATE NEW DIV add NEW CONTENT and SET ATTRIBUTE
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", "myID");
    let newContent = document.createElement("a");
    newContent.setAttribute("href", "https://rockitwomen.com");
    newContent.setAttribute("target", "__blank");
    newContent.setAttribute("class", "mx-auto");
    newDiv.appendChild(newContent);

    let newContent2 = document.createElement("img");
    newContent2.src = "https://s3-us-west-2.amazonaws.com/alchemymomentum.com/img/RockIT_Logo.jpg";

    newContent.appendChild(newContent2);

    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    let currentDiv = document.getElementById("viewEvent");
    document.body.insertBefore(newDiv, currentDiv);
}

function changeInnerHTML()
{
    //change node with text "Speakers to 'Guest Speaker(s)'"
    x = document.getElementsByClassName("red-heading");
    y = x[0];
	y.innerHTML = "Guest Speaker(s)";
   // console.log(y);
}
changeInnerHTML();