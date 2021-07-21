/////////////////////    Q1 BLOCK     ////////////////////////////
///'CHANGE' LISTENERS - BG
let bgBlue = document.getElementById("changeLimit");
let bgGreen = document.getElementById("changeFactor");
let btn_keyup = document.getElementById("q1_btn_input");
let bgQ1a = document.getElementById("q1a");

bgBlue.addEventListener('change', function () {
    bgBlue.style.backgroundColor = "#98678b";
    bgQ1a.style.backgroundColor = "#A8B9FF80";
});
bgGreen.addEventListener('change', function () {
    bgGreen.style.backgroundColor = "#679874";
    bgQ1a.style.backgroundColor = "#6EFF9A80";
});

let btn_js = document.getElementById("btn_script");
let code_js = document.getElementById("script");

//'CLICK' LISTENER DISPLAY
btn_js.addEventListener('click', function () {
    if (code_js.style.display == "none") {
        code_js.style.display = "contents";
        btn_js.innerHTML = "Close Script";
    } else {
        code_js.style.display = "none";
        btn_js.innerHTML = "View Script";
    }
});

function keyEnterq1() {
    btn_keyup.click();
    return;
}


///GET DATA
function getData() {

    let input = document.getElementsByName('array[]');
    let arr = [];
    for (let i = 0; i < input.length; i++) {
        arr.push(input[i].value);
    }
    q1a.innerHTML = arr + " Data has been updated!";
    //console.log( arr + " test getData complete");
    return arr;
}
///CALC SUM OF WHOLE
function SumOfWhole() {
    let data = getData();
    //console.log(data, "array values");
    let limit = data[0];
    let factor = data[1]
    let factor_sum = factor;
    let sum_of_whole = 0;

    for (let x = 0; x < limit; x++) {
        factor_sum = factor * x;
        //console.log(factor_sum, "factor sum TESTING");
    }

    sum_of_whole = factor * factor_sum;
    //console.log(sum_of_whole, "sum of whole TESTING");
    q1.innerHTML = "Sum of Whole = " + sum_of_whole +
        " by factor of " + factor + ".";
}
/////////////////////    Q2 BLOCK     ////////////////////////////
///EVENT LISTENERS
let btn_js_2 = document.getElementById("btn_script_2");
let code_js_2 = document.getElementById("script_2");

let btn_js_paren = document.getElementById("btn_test_paren");
let q2_Input = document.getElementById("input_paren");
let q2 = document.getElementById("q2");

function keyEnterq2() {
    btn_js_paren.click();
}

///'CLICK' LISTENER - DISPLAY 2

btn_js_2.addEventListener('click', function () {
    if (code_js_2.style.display == "none") {
        code_js_2.style.display = "contents";
        btn_js_2.innerHTML = "Close Script 2";
    } else {
        code_js_2.style.display = "none";
        btn_js_2.innerHTML = "View Script 2";
    }
});

///!VALID PARENTHESIS
function getData2() {
    let input = document.getElementById("input_paren").value;
    const str1 = input.match(/[()]/g);

    return str1;
}

function open_close_paren() {
    let q2 = document.getElementById("q2");
    let str1 = getData2();
    console.log(`${str1} str1 input declared`);
    console.log(typeof str1);

    for (let x = 0; x <= str1.length - 1; x++) {
        if (str1[x] == `)` && str1[x + 1] == `(`) {
            //console.log(`${false} mis-match parenthesis 1`);
            q2.innerHTML = `${false} mis-match parenthesis 1`;
            q2.style.backgroundColor = "red";
            break;
        }
        if (str1.length % 2 === 0) {
            q2.innerHTML = `${true} OK`;
            q2.style.backgroundColor = "green";
        } else {
            q2.innerHTML = `${false} mis-match parenthesis 2`;
            q2.style.backgroundColor = "red";
        }
    }
}
/////////////////////    Q3 BLOCK     ////////////////////////////
///EVENT LISTENER
let q3a = document.getElementById("qa3");
let q3b_calc = document.getElementById("q3b_calc");
let q3c_calc = document.getElementById("q3c_calc");
let script3 = document.getElementById("script3");
let btn_script_3 = document.getElementById('btn_script_3');

btn_script_3.addEventListener('click', function () {
    if (script3.style.display == "none") {
        script3.style.display = "contents";
        btn_script_3.innerHTML = "Close Script 3";
    } else {
        script3.style.display = "none";
        btn_script_3.innerHTML = "View Script 3";
    }
});

function keyEnterq3a() {
    q3b_calc.click();
    return;
}

function keyEnterq3b() {
    q3c_calc.click();
    return;
}
///NON-RECURSIVE METHOD
///GET DATA                         
function getData3() {
    let arr = [];
    let input = document.getElementsByName("array3[]");
    for (let i = 0; i < input.length; i++) {
        arr.push(input[i].value);
    }
    return arr;
}

function calc() {
    let sum = 1;
    let data = getData3();
    for (let t = 1; t < data; t++) {
        sum += t * sum;
    }
    //console.log(sum);
    let q3a = document.getElementById("q3a");
    q3a.style.backgroundColor = "#98678b";
    q3a.innerHTML = `Non Recursive Factorial Result---> ${sum}`;
}
///RECURSIVE METHOD
///GET DATA     
function getData3b() {
    let input = document.getElementById("nFractorial2");
    return input;
}
///CALCULATE !n
let sum = 1;

function recursion(n, sum) {
    let q3a = document.getElementById("q3a");
    q3a.style.backgroundColor = '#98678b';

    if (n === 0) {
        console.log(`${sum} sum`);
        q3a.innerHTML = `Recursive Factorial Result---> ${sum}<br>`;
        q3a.innerHTML += `<em>IF result = NaN (too much recursion)</em>`;
        return sum;
    } else {
        console.log("recursion");
        sum += sum * (n - 1);
        n = n - 1;

        return recursion(n, sum);
    }
}
/////////////////////    Q4 BLOCK     ////////////////////////////
///EVENT LISTENERS 'CLICK'
let btn_script_4 = document.getElementById("btn_script_4");
let script_4 = document.getElementById("script_4");
btn_script_4.addEventListener('click', function () {
    if (script_4.style.display == "none") {
        script_4.style.display = "contents";
        btn_script_4.innerHTML = "Close Script 4";
    } else {
        script_4.style.display = "none";
        btn_script_4.innerHTML = "View Script 4";
    }
});

let q4_input = document.getElementById("reverseStr");
let btn_q4 = document.getElementById("btn_q4");

function keyEnterq4() {
    btn_q4.click();
}
///PART 1 | REVERSE WHOLE STRING
function getData4() {
    let str = "";
    let input = document.getElementsByName("array4[]");
    for (let z = input.length - 1; z >= 0; z--) {
        str += input[z].value;
    }
    return str;
}

function reverseStr() {
    let data = getData4();
    let result = "";
    for (let y = data.length - 1; y >= 0; y--) {
        result += (data[y]);
    }
    console.log(result);
    let q4a = document.getElementById("q4a");
    q4a.style.backgroundColor = "#A8B9FF80";
    q4a.innerHTML = `Result: ${result}`;
}
///PART 2 | REVERSE BY WHOLE WORLD
function getDataWholeWord() {
    let data = document.getElementById("reverseStr2");
    const str1 = data.match(/\S/g);
    return str1;
}
let q4b = document.getElementById("q4b");
q4b.style.backgroundColor = "red";
q4b.innerHTML = "In Progress";
/////////////////////    Q5 BLOCK     ////////////////////////////
///EVENT LISTENERS 'CLICK'
let btn_script_5 = document.getElementById("btn_script_5");
let script_5 = document.getElementById("script_5");
btn_script_5.addEventListener('click', function () {
    if (script_5.style.display == "none") {
        script_5.style.display = "contents";
        btn_script_5.innerHTML = "Close Script 5";
    } else {
        script_5.style.display = "none";
        btn_script_5.innerHTML = "View Script 5";
    }
});
///JSON | DATABASE | CONTACTS
let data = {
    "contact": [{
            "name": "John",
            "business": "123-1111",
            "cell": "235-3723",
            "home": " "
        },
        {
            "name": "Paul",
            "business": "123-1111",
            "cell": "522-2222",
            "home": " "
        },
        {
            "name": "George",
            "business": "123-1111",
            "cell": "772-3598",
            "home": "322-2342"
        },
        {
            "name": "Ringo",
            "business": "123-1111",
            "cell": "",
            "home": " "
        },
        {
            "name": "Pete",
            "business": "768-2183",
            "cell": "",
            "home": " "
        }
    ]
}

function db(obj) {
    let arr = [];
    let heading = `<div class="row px-3 mx-3 mt-3"><div class="col">NAME</div><div class="col"> ` +
        `BUSINESS#</div><div class="col">CELL#</div><div class="col">HOME#</div></div>`;
    let q5b = document.getElementById("q5b");
    for (let x = 0; x < obj.contact.length; x++) {
        let record = `<div class="row px-3 mx-3"><div class="col">${obj.contact[x].name}</div>` +
            `<div class="col">${obj.contact[x].business}</div><div class="col">${obj.contact[x].cell}</div> ` +
            `<div class="col">${obj.contact[x].home}</div></div>`;
        arr.push(record);
    }
    q5c.innerHTML = heading;
    q5b.innerHTML = arr.join(" ");
}
db(data);

q5c.style.backgroundColor = "#98678b";
q5b.style.backgroundColor = "#679874";
// /////////////////////    Q6 BLOCK     ////////////////////////////
//////////////////TEMPLATE HEADING
let heading = `<div class="row px-3 mx-3 mt-3"><div class="col">TRAINER</div><div class="col">CLIENTS</div></div>`;
let q6a = document.getElementById("q6a");
q6a.innerHTML = heading;
let q6b = document.getElementById("q6b");



/////////////////////// OBJECT AND CLASSES
class Trainer {
    constructor(lName, fName) {
        this.lName = lName;
        this.fName = fName;
    }

}

class Equipment {
    constructor() {
        this.machine = machine;
        this.weights = weights;
    }
}

class Customer {
    constructor(lName, fName) {
        this.lName = lName;
        this.fName = fName;
    }
}

let myCustomer = new Customer('Mckenzie', 'Errin');
let myTrainer1 = new Trainer('Evers', 'Tom');


q6b.innerHTML = `<div class="row px-3 mx-3 mt-3"><div class="col">${myTrainer1.fName}   ${myTrainer1.lName}</div><div class="col">${myCustomer.fName}   ${myCustomer.lName}</div></div>`;

// ///////////////////////////////////////////
console.log("END OF FILE");