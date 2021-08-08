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

///GET DATA
function getData() {
    let input = document.getElementsByName('array[]');
    let arr = [];
    for (let i = 0; i < input.length; i++) {
        arr.push(parseInt(input[i].value));
        console.log(i);
    }
    q1a.innerHTML = arr + " Data has been updated!";
    console.log( arr + " test getData complete");
    return arr;
}
///Solve for n "number of terms"
function solveForN() {
    let arr = [];
    let data = getData();
    console.log(data, "user input array values");
    let a = data[0]; // whole number;
    let b = data[1]; //1st num or multiple of 
    let n = a/b; 
    console.log(`${n} solve for n`);
   
    arr.push(a,b);
    arr.push(n);
    console.log(`${arr} initial array`);
    return (arr);
} 
//Sum of Whole Number calc
function sumOfWhole() {
    let data = solveForN();
    let q1 = document.getElementById("q1");
     let a = data[0]; //whole number
     let b = data[1];//1st number of multiple of
     let n = data[2];
     console.log(`${n/2} = n / 2`);
     let add = a + b;
     console.log(`${add} = a + b`);
     let s = (n/2) * (add);
     console.log(`${s} = (n / 2) * (a + b)`);
    
    q1.innerHTML = `Sum of Whole = ${s} by Multiple of ${b}`;
}
/////////////////////    Q2 BLOCK     ////////////////////////////
///EVENT LISTENERS
let btn_js_2 = document.getElementById("btn_script_2");
let code_js_2 = document.getElementById("script_2");

let btn_js_paren = document.getElementById("btn_test_paren");
let q2_Input = document.getElementById("input_paren");
let q2 = document.getElementById("q2");

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
///EVENT LISTENERS 'CLICK' script images
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


///PART 1 | REVERSE WHOLE BY WHOLE WORD
let input_q4 = document.getElementById("inputReverseStr");
let btn_q4 = document.getElementById("btn_q4");
let q4a = document.getElementById("q4a");
q4a.style.backgroundColor = "red";
//q4a.style.backgroundColor = "#A8B9FF80";
function getData4() {

}
function reverseStr() {

}
///PART 2 | REVERSE WHOLE STRING
let input_q4_b = document.getElementsByName("inputReverseStr2");
let btn_q4b = document.getElementById("btn_q4b");
let q4b = document.getElementById("q4b");
q4b.style.backgroundColor = "red";
//q4b.style.backgroundColor = "#A8B9FF80";

function getData4_b() {

    }
    
function reverseStr2() {

}

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
    let heading = `<div class="row mt-3">
    <p class="col px-3">NAME</p>
    <p class="col px-3">BUSINESS#</p>
    <p class="col px-3">CELL#</p>
    <p class="col px-3">HOME#</p>
    </div>`;
    let q5c = document.getElementById("q5c");
    let q5b = document.getElementById("q5b");
    for (let x = 0; x < obj.contact.length; x++) {
        let record = `<div class="row">
        <div class="col">${obj.contact[x].name}</div>
        <div class="col">${obj.contact[x].business}</div>
        <div class="col">${obj.contact[x].cell}</div>
        <div class="col">${obj.contact[x].home}</div>
        </div>`;
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
let heading3 = `<div class="row mt-3">
<div class="col">TRAINER</div>
<div class="col">CLIENT</div>
<div class="col">Equipment</div>
</div>`;
let heading2 = `<div class="row mt-3">
<div class="col">Exercise Class</div>
<div class="col">Day</div>
<div class="col">Time</div>
</div>`;
let q6a = document.getElementById("q6a");
q6a.innerHTML = heading3;
q6a.style.backgroundColor = "#98678b";

let q6b = document.getElementById("q6b");
q6b.style.backgroundColor = "#679874";

let q6c = document.getElementById("q6c");
q6c.innerHTML = heading2;
q6c.style.backgroundColor = "#98678b";
let q6d = document.getElementById("q6d");
q6d.style.backgroundColor = "#679874";

//////////////////EVENT LISTENERS
let btn_script_6 = document.getElementById("btn_script_6");
let script_6 = document.getElementById("script_6");
btn_script_6.addEventListener('click', function () {
    if (script_6.style.display == "none") {
        script_6.style.display = "contents";
        btn_script_6.innerHTML = "Close Script 6";
    } else {
        script_6.style.display = "none";
        btn_script_6.innerHTML = "View Script 6";
    }
});

/////////////////////// OBJECT AND CLASSES
class Trainer {
    constructor(lName, fName) {
        this.lName = lName;
        this.fName = fName;
    }
}

class Wellness {
    constructor(classRoom, classDay, ClassTime) {
        this.classRoom = classRoom;
        this.classDay = classDay;
        this.classTime = ClassTime;
    }
}

class Equipment {
    constructor(mach, weigh) {
        this.machine = mach;
        this.weights = weigh;
    }
}

class Customer {
    constructor(lName, fName) {
        this.lName = lName;
        this.fName = fName;
    }
}

let myCustomer1 = new Customer('Mckenzie', 'Errin');
let myTrainer1 = new Trainer('Evers', 'Tom');
let myEquipment1 = new Equipment('treadmill', 'weight machines');
let myWellness1 = new Wellness('mind and body yoga', 'Monday', '12:45 PM');

q6b.innerHTML = `<div class="row mt-3">
<div class="col">${myTrainer1.fName}  ${myTrainer1.lName}</div>
<div class="col">${myCustomer1.fName}  ${myCustomer1.lName}</div>
<div class="col">${myEquipment1.machine} , ${myEquipment1.weights}</div>
</div>`;

q6d.innerHTML = `<div class="row mt-3">
<div class="col">${myWellness1.classRoom}</div>
<div class="col">${myWellness1.classDay}</div>
<div class="col">${myWellness1.classTime}</div>
</div>`

// ///////////////////////////////////////////
console.log("END OF FILE");