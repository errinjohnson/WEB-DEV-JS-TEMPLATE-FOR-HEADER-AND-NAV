function addElements() {
    //get element by id, create element, create text node
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
    //end of link2


}
addElements();
