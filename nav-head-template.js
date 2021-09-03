function addHeadElements() {
  //START get element by id, create element, create text node
  let include1 = document.getElementById("include");
  //////////////////////////////////////////////////////////START OF HEAD ELEMENTS//////////////

  let meta1 = document.createElement("meta");
  let attMeta = document.createAttribute("name");
  attMeta.value = "twitter:card"
  meta1.setAttributeNode(attMeta);

  let att2Meta1 = document.createAttribute("content");
  att2Meta1.value = "summary";
  meta1.setAttributeNode(att2Meta1);

  include1.appendChild(meta1);

  ////////////////META1 TAG//////////////////////
  let meta2 = document.createElement("meta");
  let att3Meta2 = document.createAttribute("name");
  att3Meta2.value = "twitter:site";
  meta2.setAttributeNode(att3Meta2);

  let att4Meta2 = document.createAttribute("content");
  att4Meta2.value = "@errinjohnson64";
  meta2.setAttributeNode(att4Meta2);

  include1.appendChild(meta2);

  ////////////////////META2 TAG//////////////////
  let meta3 = document.createElement("meta");
  let att5Meta3 = document.createAttribute("name");
  att5Meta3.value = "viewport";
  meta3.setAttributeNode(att5Meta3);

  let att6Meta3 = document.createAttribute("content");
  att6Meta3.value = "width=device-width, initial-scale=1.0";
  meta3.setAttributeNode(att6Meta3);

  include1.appendChild(meta3);
  /////////////////////META3 TAG///////////////////

  let meta4 = document.createElement("meta");
  let att7Meta4 = document.createAttribute("charset");
  att7Meta4.value = "utf-8";
  meta4.setAttributeNode(att7Meta4);

  include1.appendChild(meta4);
  /////////////////////META4 TAG///////////////////


  //////////////////////////////////////////////////////////END OF META ELEMENTS//////////////

  let newDiv = document.createElement("title");

  let t = document.createTextNode("Errin Johnson | Software Developer");
  newDiv.appendChild(t);

  include1.appendChild(newDiv);
  ////////////////////////////////////////////////////////////////////////////
  //add link with attributes
  let newLink = document.createElement("link");
  //
  let href = document.createAttribute("href");
  href.value = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css";
  newLink.setAttributeNode(href);
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
  /////////////////////////////////////////////////////////////////////////
  ////////add link1 with attributes
  let newLink1 = document.createElement("link");
  //
  let href1 = document.createAttribute("href");
  href1.value = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css";
  newLink1.setAttributeNode(href1);
  //
  let attRel1 = document.createAttribute("rel");
  attRel1.value = "stylesheet";
  newLink1.setAttributeNode(attRel1);
  //
  include1.appendChild(newLink1);


  ////////////Link2_B/////////////////////////////////////////////////////////
  //add Link2 with attributes
  let newLink2_b = document.createElement("link");
  //
  let attRel2_b = document.createAttribute("rel");
  attRel2_b.value = "preconnect";
  newLink2_b.setAttributeNode(attRel2_b);
  //
  let href2_b = document.createAttribute("href");
  href2_b.value = "https://fonts.googleapis.com";
  newLink2_b.setAttributeNode(href2_b);


  include1.appendChild(newLink2_b);

  //add Link3 with attributes
  let newLink3 = document.createElement("link");
  //
  let attRel3 = document.createAttribute("rel");
  attRel3.value = "preconnect";
  newLink3.setAttributeNode(attRel3);
  //
  let href3 = document.createAttribute("href");
  href3.value = "https://fonts.gstatic.com";
  newLink3.setAttributeNode(href3);
  //
  let AttrCrossOrigin = document.createAttribute("crossorigin");
  newLink3.setAttributeNode(AttrCrossOrigin);
  //
  include1.appendChild(newLink3);
  ////////////////////////////////////////////////////////////////////////////
  //add Link2 with attributes
  let newLink2 = document.createElement("link");
  //
  let href2 = document.createAttribute("href");
  href2.value = "https://fonts.googleapis.com/css2?family=Montserrat&family=Pathway+Gothic+One&display=swap";
  newLink2.setAttributeNode(href2);
  //
  let attRel2 = document.createAttribute("rel");
  attRel2.value = "stylesheet";
  newLink2.setAttributeNode(attRel2);

  include1.appendChild(newLink2);

  //add Link4 with attributes
  let newLink4 = document.createElement("link");
  //
  let href4 = document.createAttribute("href");
  href4.value = "https://s3-us-west-2.amazonaws.com/alchemymomentum.com/myCss/myCss.css";
  newLink4.setAttributeNode(href4);
  //
  let attRel4 = document.createAttribute("rel");
  attRel4.value = "stylesheet";
  newLink4.setAttributeNode(attRel4);

  include1.appendChild(newLink4);

} //end oF HEAD LINKS 0-4
addHeadElements();
//////////////////////////////////////////////////////////END OF HEAD ELEMENTS//////////////

//////////////////////////////////////////////////////////START OF BOOTSTRAP NAVIGATION//////////////
function addNavElements2() {

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
  include2.appendChild(newNav1); //2n level of nesting

  let newNav3 = document.createElement("a");
  let attClass3 = document.createAttribute("class");
  attClass3.value = "navbar-brand";
  newNav3.setAttributeNode(attClass3);

  let href3 = document.createAttribute("href");
  href3.value = "#";
  newNav3.setAttributeNode(href3);

  let t2 = document.createTextNode("Connect The Dots...");
  newNav3.appendChild(t2);

  newNav2.appendChild(newNav3); //3rd level of nesting

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
  //////////////////////////////////////////////////////////END OF BOOSTRAP INITIAL SETUP//////////////
  //////////////////////////////////////////////////////////START OF BOOTSTRAP LINKS MENU BAR//////////////
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
  href4.value = "index.html";
  newLi_a.setAttributeNode(href4);

  let t3 = document.createTextNode("HOME"); //////////////HOME MENU LINK//////////////
  newLi_a.appendChild(t3);

  newNavli.appendChild(newLi_a);
  ////////////////////////////////////////////////////////
  let newNavli2_a = document.createElement("li");
  let attClass10_c = document.createAttribute("class");
  attClass10_c.value = "nav-item";
  newNavli2_a.setAttributeNode(attClass10_c);

  newUL.appendChild(newNavli2_a);

  let newLi_c1 = document.createElement("a");
  let attClass11_c = document.createAttribute("class");
  attClass11_c.value = "nav-link";
  newLi_c1.setAttributeNode(attClass11_c);

  let href5_c = document.createAttribute("href");
  href5_c.value = "codeTest.html";
  newLi_c1.setAttributeNode(href5_c);

  let t5_c = document.createTextNode("Featured JS Project"); //////////////FEATURED PROJECT/////////////////////
  newLi_c1.appendChild(t5_c);

  let attTarget_c = document.createAttribute("target");
  attTarget_c.value = "__blank";
  newLi_c1.setAttributeNode(attTarget_c);

  newNavli2_a.appendChild(newLi_c1);
  ///////////////////////////////////////////////////////
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
  href5.value = "https://errinjohnson.github.io/";
  newLi_b.setAttributeNode(href5);

  let t5 = document.createTextNode("IoT Workshop"); //////////////IoT MENU LINK/////////////////////
  newLi_b.appendChild(t5);

  let attTarget = document.createAttribute("target");
  attTarget.value = "__blank";
  newLi_b.setAttributeNode(attTarget);

  newNavli2.appendChild(newLi_b);

  /////START1 BOOTSTRAP DROPDOWN MENU//////////////////////////////////////////////////////////////////

  let newLi44 = document.createElement("li");
  let attClass144 = document.createAttribute("class");
  attClass144.value = "nav-item dropdown";

  newLi44.setAttributeNode(attClass144);
  newUL.appendChild(newLi44);

  let newLi_dd = document.createElement("a");

  let attClass155 = document.createAttribute("class");
  attClass155.value = "nav-link dropdown-toggle";
  newLi_dd.setAttributeNode(attClass155);

  let href77 = document.createAttribute("href");
  href77.value = "#";
  newLi_dd.setAttributeNode(href77);

  let newIDD = document.createAttribute("id");
  newIDD.value = "navbarDropdownMenuLink";
  newLi_dd.setAttributeNode(newIDD);

  let newRolee = document.createAttribute("role");
  newRolee.value = "button";
  newLi_dd.setAttributeNode(newRolee);

  let newDataa = document.createAttribute("data-bs-toggle");
  newDataa.value = "dropdown";
  newLi_dd.setAttributeNode(newDataa);

  let newAriaa = document.createAttribute("aria-expanded");
  newAriaa.value = "false";
  newLi_dd.setAttributeNode(newAriaa);

  let t77 = document.createTextNode("NET"); //////////////NET//////////////////////////////////
  newLi_dd.appendChild(t77);

  newLi44.appendChild(newLi_dd);
  //////////////////////////////////////////////////////////////////////////////////////////

  let newUL22 = document.createElement("ul");
  let attClass166 = document.createAttribute("class");
  attClass166.value = "dropdown-menu";
  newUL22.setAttributeNode(attClass166);

  let ariaLabell = document.createAttribute("aria-labelledby");
  ariaLabell.value = "navbarDropdownMenuLink";
  newUL22.setAttributeNode(ariaLabell);

  newLi44.appendChild(newUL22);

  ////////////////////////////////////////////////////////////////////////////////////////

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
  href6.value = "net-db.html";
  newLi_c.setAttributeNode(href6);

  let t6 = document.createTextNode("Nursing Eval Tool | Database"); ///NURSING EVAL TOOL MENU LINK///////////
  newLi_c.appendChild(t6);

  let attTarget2 = document.createAttribute("target");
  // attTarget2.value = "__blank";
  newLi_c.setAttributeNode(attTarget2);

  newNavli3.appendChild(newLi_c);
  newUL22.appendChild(newNavli3);
  //////////////////////////////////////////////////////////////END1 of BOOSTRAP Drowdown MENU //////////////

  ///START2 BOOTSTRAP DROPDOWN MENU/////////////////////////////////////////////////////////////////////

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
  href7.value = "#";
  newLi_d.setAttributeNode(href7);

  let newID = document.createAttribute("id");
  newID.value = "navbarDropdownMenuLink";
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

  let t7 = document.createTextNode("Other IT Projects"); //////////////OTHER PROJECTS MENU LINK//////////////
  newLi_d.appendChild(t7);

  newLi4.appendChild(newLi_d);
  /////////////////////////////////////////////////////////////////////////////////////////////////////////

  let newUL2 = document.createElement("ul");
  let attClass16 = document.createAttribute("class");
  attClass16.value = "dropdown-menu";
  newUL2.setAttributeNode(attClass16);

  let ariaLabel = document.createAttribute("aria-labelledby");
  ariaLabel.value = "navbarDropdownMenuLink";
  newUL2.setAttributeNode(ariaLabel);

  newLi4.appendChild(newUL2);

  ////////////////////////////////////////////////////////////////////////////////////////////////////////

  let newLi5 = document.createElement("li");
  newUL2.appendChild(newLi5);

  let newAnch = document.createElement("a");
  let attClass17 = document.createAttribute("class");
  attClass17.value = "dropdown-item";
  newAnch.setAttributeNode(attClass17);

  let href8 = document.createAttribute("href");
  href8.value = "https://www.eventcombo.com/o/rockit-women-36638";
  newAnch.setAttributeNode(href8);

  let t8 = document.createTextNode("Customized Event Combo Web Pages"); /////////////////////Event Combo Link
  newAnch.appendChild(t8);

  let attTarget3 = document.createAttribute("target");
  attTarget3.value = "__blank";
  newAnch.setAttributeNode(attTarget3);

  newLi5.appendChild(newAnch);
  ////////////////////////////////////////////////////////////

  let newLi6 = document.createElement("li");
  newUL2.appendChild(newLi6);

  let newAnch2 = document.createElement("a");
  let attClass18 = document.createAttribute("class");
  attClass18.value = "dropdown-item";
  newAnch2.setAttributeNode(attClass18);

  let href9 = document.createAttribute("href");
  href9.value = "https://jsfiddle.net/errinjohnson/rtv1xLzc/13/";
  newAnch2.setAttributeNode(href9);

  let t9 = document.createTextNode("Virtual Navbar Template with JS"); //////////////////////Virtual Navvbar
  newAnch2.appendChild(t9);

  let attTarget4 = document.createAttribute("target");
  attTarget4.value = "__blank";
  newAnch2.setAttributeNode(attTarget4);

  newLi6.appendChild(newAnch2);
  //////////////////////////////////////////////////////////////////////////////////////////////////////////

  let newLi7 = document.createElement("li");
  newUL2.appendChild(newLi7);

  let newAnch3 = document.createElement("a");
  let attClass19 = document.createAttribute("class");
  attClass19.value = "dropdown-item";
  newAnch3.setAttributeNode(attClass19);

  let href10 = document.createAttribute("href");
  href10.value = "#";
  newAnch3.setAttributeNode(href10);

  let t10 = document.createTextNode("Next Project [Virtual Template with Vue.js]"); /////Next Project [Virtual Template with Vue.js]
  newAnch3.appendChild(t10);

  newLi7.appendChild(newAnch3);

}
addNavElements2();
// // // END of addNavElements2/////////////////////////////////////////////////////////////End of Navigation//////////


///Start of script elements///////////////////////////////////////////////////////////////////////////////////////////
function addScriptElements3() {

  let divScript = document.getElementById("script-bootstrap");

  let scriptBS = document.createElement("script");

  let attScriptBS = document.createAttribute("src");
  attScriptBS.value = "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js";
  scriptBS.setAttributeNode(attScriptBS);

  let attInteg2 = document.createAttribute("integrity");
  attInteg2.value = "sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p";
  scriptBS.setAttributeNode(attInteg2);

  let crossOrg2 = document.createAttribute("crossorigin");
  crossOrg2.value = "anonymous";
  scriptBS.setAttributeNode(crossOrg2);

  divScript.appendChild(scriptBS);
  /////////////////////////////////////////////////////////

  let scriptBS2 = document.createElement("script");

  let attScriptBS2 = document.createAttribute("src");
  attScriptBS2.value = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js";
  scriptBS2.setAttributeNode(attScriptBS2);

  let attInteg3 = document.createAttribute("integrity");
  attInteg3.value = "sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT";
  scriptBS2.setAttributeNode(attInteg3);

  let crossOrg3 = document.createAttribute("crossorigin");
  crossOrg3.value = "anonymous";
  scriptBS2.setAttributeNode(crossOrg3);

  divScript.appendChild(scriptBS2);

}
addScriptElements3();
////end of addScriptElements3/////////////////////////////////////////////////////////end of script create elements

function lastModified() {

  let getDiv = document.getElementById("last_modified");

  let updateTime = document.lastModified;
  getDiv.innerHTML = updateTime;

  let paraLastMod = document.createElement("p");
  let modID = document.createAttribute("id");
  modID.value = "paraText";
  paraLastMod.setAttributeNode(modID);

  let t2 = document.createTextNode(" [website last updated]");
  paraLastMod.appendChild(t2);

  getDiv.appendChild(paraLastMod);

}
lastModified();
////////////////////////////////////////////////////////////////////////////////////////end of last lastModified
//////////start of copyRight////////////////////////////////////////////////////////////////////////////////////
function copyRight() {
  let copyR = document.getElementById("copyRight");
  let elPara = document.createElement("p");
  let attCenter = document.createAttribute("class");
  attCenter.value = "text-center";
  elPara.setAttributeNode(attCenter);
  let t111 = document.createTextNode("Website Copyright 2015-2021 Errin E Johnson, All Rights Reserved.");
  elPara.appendChild(t111);
  copyR.appendChild(elPara);

}
copyRight();

//AlchemyMomentumDir Button
let el1 = document.getElementById("offcanvasStart");
let ela = document.getElementById("labelInput");
let elb = document.getElementById("msg1");

function labelInput() {
  ela.innerHTML = `<input id="pwd1" name="pwd_a" autofocus>
  <button class="btn btn-primary" onclick="protoTypeDir();">submit</button`;
}

function getDataDirectory() {
  let password = document.getElementById("pwd1").value;
  console.log(`${password}`)
  return password;
}

function protoTypeDir() {
  //toggle display
  let ui_answer = "genius55";
  let userName = "Desiree";
  let answer1 = getDataDirectory();
  console.log(answer1);

  if (ui_answer == answer1) {
    el1.className = "offcanvas offcanvas-start d-block";
    ela.style.display = "none";
    elb.innerHTML = `<p> Hi ${userName}, you are logged in. </p>`
  } else {
    ela.innerHTML = "Please enter a valid password!";
    console.log("false");
  }
}
////////////////////////////////////////////AlchemyMomentumDir Button end/////////// 
//AlchemyMomentumResources Button
let el2 = document.getElementById("offcanvasStart2");
let el2a = document.getElementById("labelInput2");
let el2c = document.getElementById("msg2");

function labelInput2() {
  el2a.innerHTML = `<input  type="text" id="pwd2" name="pwd_b" autofocus>
  <button class="btn btn-primary" onclick="protoTypeDir2();">submit</button`;
}

function getDataDirectory2() {
  let password2 = document.getElementById("pwd2").value;
  console.log(`${password2}`)
  return password2;
}

function protoTypeDir2() {
  //toggle display
  let ui_answer = "genius55";
  let userName = "Desiree";

  let answer1 = getDataDirectory2();
  console.log(answer1);

  if (ui_answer == answer1) {
    el2.className = "offcanvas offcanvas-start d-block";
    el2a.style.display = "none";
    el2c.innerHTML = `<p> Hi ${userName}, you are logged in. </p>`
    }
    else {
      el2a.innerHTML = "Please enter a valid password!";
      console.log("false");
    }
  }
  ////////////////////////////////////////////AlchemyMomentumDir Button end/////////// 