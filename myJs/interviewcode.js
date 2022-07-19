//Notes: https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/
//https://www.freecodecamp.org/news/the-ultimate-guide-to-javascript-array-methods-map/

//1. compare arr2 to arr1 - includes() and for() ;
//2. for loop thru arrays with curInv.includes(newInv[item]);
//3. if newInv item exist in curInv, curInv[],
//// updated curInv item qty
//4. else create newItem, qty
//// 'curInv.push(newInv[qty][item])'
function updateInventory(arr1, arr2) {
    console.log(arr1 + "  ARR1");
    console.log(arr2 + "  ARR2");
    let arr3 = [];
    let temp = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i][1].includes(arr2[j][1])) {
                arr1[i][0] += arr2[j][0];
                arr3.push(arr1[i]);
                temp.push(arr1[i]);
                console.log(`Added update qty ${arr1[i][0]} Item: ${arr1[i][1]} to ARR1`);
            }
            if (!arr3[i].includes(arr2[j]) || !arr1[i].includes(arr2[j])) {
                arr3.push(arr2[i]);
            }
        }
    }
    console.log(arr3 + "  ARR3");
}
// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];
var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
]
updateInventory(curInv, newInv);