

function sponsorElement1(){
//add Sponsor Valoline to different location on Aprils's 2021 Event
//new div added for logo bottom of page
    let newDiv2 = document.createElement('div');
    newDiv2.setAttribute('id','myID2');
    let newContent3 = document.createElement('a');
    newContent3.setAttribute('href', 'https://www.valvoline.com/');
    newContent3.setAttribute('target', '__blank');
    newContent3.setAttribute('class', 'd-flex');
    
    newDiv2.appendChild(newContent3);
    
    let newContent4 = document.createElement('img');
    newContent4.src = "https://s3-us-west-2.amazonaws.com/alchemymomentum.com/img/valvoline.png";
    newContent3.appendChild(newContent4);
    newDiv2.appendChild(newContent3);
    
    
    let currentDiv2 = document.getElementById("myID");
    document.body.insertBefore(newDiv2, currentDiv2);

}sponsorElement1();

function sponsorElement2(){
//add Sponsor Valoline to different location on Aprils's 2021 Event
//new div added for logo body of page, above speaker info. 
    let newDiv3 = document.createElement('div');
    newDiv3.setAttribute('id', 'myID3');

    let newDiv4 = document.createElement('h3');
    newDiv4.style.paddingLeft = 130;
    newDiv4.setAttribute('id', 'hPadding');
    newDiv4.innerHTML = "Sponsored BY:";
    newDiv3.appendChild(newDiv4);

    let newContent5 = document.createElement('a');
    newContent5.setAttribute('href','https://www.valvoline.com/');
    newContent5.setAttribute('target', '__blank');
    newContent5.setAttribute('class', 'd-flex');

    newDiv3.appendChild(newContent5);

    let newContent6 = document.createElement('img');
    newContent6.src = "https://s3-us-west-2.amazonaws.com/alchemymomentum.com/img/valvoline.png";
    newContent5.appendChild(newContent6);

    let currentDiv3 = document.querySelector('article');
    currentDiv3.appendChild(newDiv3);

}sponsorElement2();
