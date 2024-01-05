// JavaScript code for Task 1
// Learning Objective 1: use of sub-algorithm (aka function) with zero parameters
// Learning Objective 2: use of Math.random()

function myFunction() {
  var p = document.getElementById("mydata");

  //call a sub-algorithm to return a random number in [0,2)
  var num = generateNum();

  /*TODO 1: write an if statement here that--based on the value 
   of num--changes the paragraph content to HEADS or TAILS */

}

// a sub-algorithm to return a random number
// pre-conditions: none
// post-conditions: returns a random number in [0,2)
function generateNum() {
  var num;
  num = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
  /*TODO 2: implement the body of the function here to return a random number between 0 and 2*/
  if(num == 2){
    console.log("tails");
    document.getElementById("mydata").innerHTML = "TAILS";
 // alert("tails");
}else if (num == 1){
  document.getElementById("mydata").innerHTML = "HEADS";
  //alert("heads");
}}

