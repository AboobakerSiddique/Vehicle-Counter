
let countNum = document.getElementById("count-num");
let entry=document.getElementById("entries")
console.log(countNum);
let count=0;
function add() {
    count=count+1;
    countNum.textContent=count;
}
function save(){
    let countStr=count+" - ";
    entry.textContent += countStr;
    countNum.textContent = 0;
    count = 0;
}