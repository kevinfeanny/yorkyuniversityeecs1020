// in Ex9 to Ex15, change the name of the following function properly
function problem_09() {
  
  /* this statement defines an object reference to the 
     html element having an ID "output".
	 Every time you want to output something, use outputObj */
  var outputObj = document.getElementById("output");

  // this statement receives some data and parses it to integer
  var a = parseInt(prompt("Please enter a number: ", ""));
 
 
  /* this statement add some message to our output Object
     you would need to change the message to be appropriate in Ex10 to E15*/
  outputObj.innerHTML = "number: " + a + "<br><br>its digits: ";

  // translate the rest of your flowcharts to js here:
  







  
  
  
  
  //the following statements inform the user that the program ended
  //and disable the button
  outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}

//repeat for the other problems, e.g.,
//function problem_10() {
//
//{

// ...
function problem_11() {
   var outputObj = document.getElementById("output");

   // this statement receives some data and parses it to integer
   var a = parseInt(prompt("Please enter a number: ", ""));
  
  
   /* this statement add some message to our output Object
      you would need to change the message to be appropriate in Ex10 to E15*/
   outputObj.innerHTML = "number: " + a + "<br><br>its digits: ";
 
   // translate the rest of your flowcharts to js here:
   
 
 
 
 
 
 
 
   
   
   
   
   //the following statements inform the user that the program ended
   //and disable the button
   outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
   document.getElementsByTagName("button")[0].setAttribute("disabled","true");

}