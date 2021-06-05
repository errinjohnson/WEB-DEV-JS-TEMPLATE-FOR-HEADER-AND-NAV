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

   let newNav5 = document.createElement("ul");
   let attClass7 = document.createAttribute("class");
   attClass7.value = "navbar-nav";
   newNav5.setAttributeNode(attClass7);

   newNav4.appendChild(newNav5);

   let newNavli = document.createElement("li");
   let attClass8 = document.createAttribute("class");
   attClass8.value = "nav-item";
   newNavli.setAttributeNode(attClass8);

   newNav5.appendChild(newNavli);









 }
addNavElements2();
// // // END of addNavElements2
