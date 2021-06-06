function addHeadElements() {
    //START get element by id, create element, create text node
    let include1 = document.getElementById("include");
    let newDiv = document.createElement("title");

    let t = document.createTextNode("Errin Johnson | Software Developer");
    newDiv.appendChild(t);

    include1.appendChild(newDiv);

    //add link with attributes
    let newLink = document.createElement("link");
      //
    let href1 = document.createAttribute("href");
    href1.value = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css";
    newLink.setAttributeNode(href1);
      //
    let attRel = document.createAttribute("rel");
    attRel.value = "stylesheet";
    newLink.setAttributeNode(attRel);
      //
    let attInteg = document.createAttribute("integrity");
    attInteg.value = "sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x";
    newLink.setAttributeNode(attInteg);
      //
    let crossOrg = document.createAttribute("crossorigin");
    crossOrg.value = "anonymous";
    newLink.setAttributeNode(crossOrg);

    include1.appendChild(newLink);
    //end of link

    //add Link2 with attributes
    let newLink2 = document.createElement("link");
      //
    let href2 = document.createAttribute("href");
    href2.value = "https://s3-us-west-2.amazonaws.com/alchemymomentum.com/myCss/myCss.css";
    newLink2.setAttributeNode(href2);
      //
    let attRel2 = document.createAttribute("rel");
    attRel2.value = "stylesheet";
    newLink2.setAttributeNode(attRel2);

    include1.appendChild(newLink2);
  }  //end of link2
  addHeadElements();
// // END of addHeadElements
// //
function addNavElements2(){

   let include2 = document.getElementById("navBar1");
   //
   let newNav1 = document.createElement("nav");
   let attClass = document.createAttribute("class");
   attClass.value = "navbar navbar-expand-lg navbar-light bg-light";
   newNav1.setAttributeNode(attClass);

   include2.appendChild(newNav1); //1st level of nesting
   //
   let newNav2 = document.createElement("div");
   let attClass2 = document.createAttribute("class");
   attClass2.value = "container-fluid";
   newNav2.setAttributeNode(attClass2);
   //
   newNav1.appendChild(newNav2);
   include2.appendChild(newNav1);//2n level of nesting

   let newNav3 = document.createElement("a");
   let attClass3 = document.createAttribute("class");
   attClass3.value = "navbar-brand";
   newNav3.setAttributeNode(attClass3);

   let href3 = document.createAttribute("href");
   href3.value = "#";
   newNav3.setAttributeNode(href3);

   let t2 = document.createTextNode("Navbar");
   newNav3.appendChild(t2);

   newNav2.appendChild(newNav3);//3rd level of nesting

   let btn1 = document.createElement("button");
   let attClass4 = document.createAttribute("class");
   attClass4.value = "navbar-toggler";
   btn1.setAttributeNode(attClass4);

   newNav2.appendChild(btn1);

   let type1 = document.createAttribute("type");
   type1.value = "button";
   btn1.setAttributeNode(type1);

   let data1 = document.createAttribute("data-bs-toggle");
   data1.value = "collapse";
   btn1.setAttributeNode(data1);

   newNav2.appendChild(btn1);

   let data2 = document.createAttribute("data-bs-target");
   data2.value = "#navbarNavDropdown";
   btn1.setAttributeNode(data2);

   let aris1 = document.createAttribute("aria-controls");
   aris1.value = "navbarNavDropdown";
   btn1.setAttributeNode(aris1);

   newNav2.appendChild(btn1);

   let aris2 = document.createAttribute("aria-expanded");
   aris2.value = "false";
   btn1.setAttributeNode(aris2);

   let aris3 = document.createAttribute("aria-label");
   aris3.value = "Toggle navigation";
   btn1.setAttributeNode(aris3);

   newNav2.appendChild(btn1);

   let span1 = document.createElement("span");
   let attClass5 = document.createAttribute("class");
   attClass5.value = "navbar-toggler-icon";
   span1.setAttributeNode(attClass5);

   btn1.appendChild(span1);

   let newNav4 = document.createElement("div");

   let attClass6 = document.createAttribute("class");
   attClass6.value = "collapse navbar-collapse"
   newNav4.setAttributeNode(attClass6);

   let attID = document.createAttribute("id");
   attID.value = "navbarNavDropdown";
   newNav4.setAttributeNode(attID);

   newNav2.appendChild(newNav4);
   //end of 3 level of nesting
////////////////////////////////////////////////////////
   let newUL = document.createElement("ul");
   let attClass7 = document.createAttribute("class");
   attClass7.value = "navbar-nav";
   newUL.setAttributeNode(attClass7);

   newNav4.appendChild(newUL);
/////////////////////////////////////////////////////////
   let newNavli = document.createElement("li");
   let attClass8 = document.createAttribute("class");
   attClass8.value = "nav-item";
   newNavli.setAttributeNode(attClass8);

   newUL.appendChild(newNavli);
//////////////////////////////////////////////////////
   let newLi_a = document.createElement("a");
   let attClass9 = document.createAttribute("class");
   attClass9.value = "nav-link active";
   newLi_a.setAttributeNode(attClass9);

   let attAria3 = document.createAttribute("aria-current");
   attAria3.value = "page";
   newLi_a.setAttributeNode(attAria3);

   let href4 = document.createAttribute("href");
   href4.value = "#";
   newLi_a.setAttributeNode(href4);

   let t3 = document.createTextNode("HOME"); //1
   newLi_a.appendChild(t3);

   newNavli.appendChild(newLi_a);
////////////////////////////////////////////////////////
   let newNavli2 = document.createElement("li");
   let attClass10 = document.createAttribute("class");
   attClass10.value = "nav-item";
   newNavli2.setAttributeNode(attClass10);

   newUL.appendChild(newNavli2);

   let newLi_b = document.createElement("a");
   let attClass11 = document.createAttribute("class");
   attClass11.value = "nav-link";
   newLi_b.setAttributeNode(attClass11);

   let href5 = document.createAttribute("href");
   href5.value = "#";
   newLi_b.setAttributeNode(href5);

   let t5 = document.createTextNode("Title");//2
   newLi_b.appendChild(t5);

   newNavli2.appendChild(newLi_b);
//////////////////////////////////////////////////////////////////

let newNavli3 = document.createElement("li");
let attClass12 = document.createAttribute("class");
attClass12.value = "nav-item";
newNavli3.setAttributeNode(attClass12);

newUL.appendChild(newNavli3);

let newLi_c = document.createElement("a");
let attClass13 = document.createAttribute("class");
attClass13.value = "nav-link";
newLi_c.setAttributeNode(attClass13);

let href6 = document.createAttribute("href");
href6.value = "#";
newLi_c.setAttributeNode(href6);

let t6 = document.createTextNode("Title 2");//3
newLi_c.appendChild(t6);

newNavli3.appendChild(newLi_c);
///////////////////////////////////////////// dropdown started

let newLi4 = document.createElement("li");
let attClass14 = document.createAttribute("class");
attClass14.value = "nav-item dropdown";

newLi4.setAttributeNode(attClass14);
newUL.appendChild(newLi4);

let newLi_d = document.createElement("a");

let attClass15 = document.createAttribute("class");
attClass15.value = "nav-link dropdown-toggle";
newLi_d.setAttributeNode(attClass15);

let href7 = document.createAttribute("href");
href7.value= "#";
newLi_d.setAttributeNode(href7);

let newID = document.createAttribute("id");
newID.value ="navbarDropdownMenuLink";
newLi_d.setAttributeNode(newID);

let newRole = document.createAttribute("role");
newRole.value = "button";
newLi_d.setAttributeNode(newRole);

let newData = document.createAttribute("data-bs-toggle");
newData.value = "dropdown";
newLi_d.setAttributeNode(newData);

let newAria = document.createAttribute("aria-expanded");
newAria.value = "false";
newLi_d.setAttributeNode(newAria);

let t7 = document.createTextNode("Drop Down Link");
newLi_d.appendChild(t7);

newLi4.appendChild(newLi_d);

let newUL2 = document.createElement("ul");
let attClass16 = document.createAttribute("class");
attClass16.value = "dropdown-menu";
newUL2.setAttributeNode(attClass16);

newUL.appendChild(newUL2);


////////////////////////////////////////////////////////////








 }
addNavElements2();
// // // END of addNavElements2
