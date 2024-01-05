// in Ex9 to Ex15, change the name of the following function properly
function problem_09() {
  
    /* this statement defines an object reference to the 
       html element having an ID "output".
       Every time you want to output something, use outputObj */
    var outputObj = document.getElementById("output");
  
    // this statement receives some data and parses it to integer
    var a = parseInt(prompt("Please enter a number: ", ""));
    var b = a;
   var i = 0;
   var arr = [];
   while(a != 0){
        arr[i] = parseInt(a%10);
        //console.log(arr[i]);
        i++;
        a = parseInt(a/10);
        //console.log(a);
   }
   var j = 0;
   
   
   var message= [];
   while(j < i - 1 ){
        
        message += arr[j] + " ,";
        console.log(arr[j]);
        j++;
}
message += arr[j];
        
    /* this statement add some message to our output Object
       you would need to change the message to be appropriate in Ex10 to E15*/
       outputObj.innerHTML = "number: " + b + "<br><br>its digits: "+ message ;
  
    // translate the rest of your flowcharts to js here:
    
  
    
  
  
  
  
  
    
    
    
    
    //the following statements inform the user that the program ended
    //and disable the button
    outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
    document.getElementsByTagName("button")[0].setAttribute("disabled","true");

}  
  //repeat for the other problems, e.g.,
  function problem_10() {
    var outputObj = document.getElementById("output");
  
    // this statement receives some data and parses it to integer
    var a = parseInt(prompt("Please enter a number: ", ""));
    var b = a;
   var i = 0;
   var arr = [];
   var count = 0;
   while(a != 0){
        arr[i] = parseInt(a%10);
        if(arr[i] == 7){
            count++;
        }
        //console.log(arr[i]);
        i++;
        a = parseInt(a/10);
        //console.log(a);
   }
   var j = 0;
   
   
   
        
    /* this statement add some message to our output Object
       you would need to change the message to be appropriate in Ex10 to E15*/
       outputObj.innerHTML = "number: " + b + "<br><br>of sevens: "+ count ;
  
    // translate the rest of your flowcharts to js here:
    
  
    
  
  
  
  
  
    
    
    
    
    //the following statements inform the user that the program ended
    //and disable the button
    outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
    document.getElementsByTagName("button")[0].setAttribute("disabled","true");

  





  }
function problem_11(){

    var outputObj = document.getElementById("output");
  
    // this statement receives some data and parses it to integer
    var a = parseInt(prompt("Please enter a number: ", ""));
    var b = a;
   var i = 0;
   var arr = [];
   var sum = 0;
   while(a != 0){
        arr[i] = parseInt(a%10);
        sum = sum + arr[i];
        //console.log(arr[i]);
        i++;
        a = parseInt(a/10);
        //console.log(a);
   }
   var j = 0;
   
   
   
        
    /* this statement add some message to our output Object
       you would need to change the message to be appropriate in Ex10 to E15*/
       outputObj.innerHTML = "number: " + b + "<br><br>sum of all digits is: "+ sum ;
  
    // translate the rest of your flowcharts to js here:
    
  
    
  
  
  
  
  
    
    
    
    
    //the following statements inform the user that the program ended
    //and disable the button
    outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
    document.getElementsByTagName("button")[0].setAttribute("disabled","true");

}
function problem_12(){

    var outputObj = document.getElementById("output");
  
    // this statement receives some data and parses it to integer
    var a = parseInt(prompt("Please enter a number: ", ""));
    var b = a;
   var i = 0;
   var arr = [];
   var rev = 0;
   var message;
   while(a != 0){
        arr[i] = parseInt(a%10);
        rev = (rev*10) + arr[i];
        //console.log(arr[i]);
        i++;
        a = parseInt(a/10);
        //console.log(a);
   }
   if(rev == b){
        message = "true"
   }else {
    message = "false"
   }
   
   
   
        
    /* this statement add some message to our output Object
       you would need to change the message to be appropriate in Ex10 to E15*/
       outputObj.innerHTML = "number: " + b + "<br><br>is the same in reverse: "+ message ;
  
    // translate the rest of your flowcharts to js here:
    
  
    
  
  
  
  
  
    
    
    
    
    //the following statements inform the user that the program ended
    //and disable the button
    outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
    document.getElementsByTagName("button")[0].setAttribute("disabled","true");


}
function problem_13(){

    var outputObj = document.getElementById("output");
  
    // this statement receives some data and parses it to integer
    var a = parseInt(document.getElementById("k").value); 
    var b = a;
   var i = 0;
   var shell = [];
   var message;
   var arr = [];
   var j=1;
   while(i <= a){
        arr[i] = (Math.pow(3,i)-1)/2;
        
        //console.log(arr[i]);
        i++;
        
        //console.log(a);
   }
   while( j< (i-1)){
    shell += arr[j] + ",";
    j++;
   }
shell += arr[j] + ",";
   
   
   
        
    /* this statement add some message to our output Object
       you would need to change the message to be appropriate in Ex10 to E15*/
       outputObj.innerHTML = "number: " + b + "<br><br>the shell sequence is: "+ shell;
  
    // translate the rest of your flowcharts to js here:
    
  
    
  
  
  
  
  
    
    
    
    
    //the following statements inform the user that the program ended
    //and disable the button
    outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
    document.getElementsByTagName("button")[0].setAttribute("disabled","true");

}
function fibonacci(){

    var outputObj = document.getElementById("output");
  
    // this statement receives some data and parses it to integer
    var a = parseInt(prompt("Please enter a number: ", ""));
    var b = a;
    var i = 0;
   var last= 1;
   var secondlast = 0;
   var newvalue= 0;
   var r = 0;
   var message = [];
   if(a == 2){
    message = "0,1"
   
   }else if(a > 2){
        message = " 0 , 1,  "
        while(i < (a-2)){
            newvalue = last + secondlast;
            message += newvalue + ",";
            secondlast = last;
            last = newvalue;
            
            i++;
            
    
        }
   }

   
   
   
        
    /* this statement add some message to our output Object
       you would need to change the message to be appropriate in Ex10 to E15*/
       outputObj.innerHTML = "number: " + b + "<br><br>the fibonacci sequence is: "+ message ;
  
    // translate the rest of your flowcharts to js here:
    
  
    
  
  
  
  
  
    
    
    
    
    //the following statements inform the user that the program ended
    //and disable the button
    outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
    document.getElementsByTagName("button")[0].setAttribute("disabled","true");





}
function problem_15(){
    var outputObj = document.getElementById("output");
    outputObj.style.fontSize = "11px";
    outputObj.style.textAlign = "center";
    // this statement receives some data and parses it to integer
    var a = parseInt(prompt("Please enter a number: ", ""));
    var b = a;
    var i;
    var message = [];
    for(i=0;i<= b; i++){
        for(var j = 0;j<a; j++){
            message+= "o o ";
        }
        message += "<br></br>";
        a--;
    }

   
   
   
        
    /* this statement add some message to our output Object
       you would need to change the message to be appropriate in Ex10 to E15*/
       outputObj.innerHTML = "number: " + b + "<br><br>the triangle is: <br><br>"+ message ;
  
    // translate the rest of your flowcharts to js here:
    
  
    
  
  
  
  
  
    
    
    
    
    //the following statements inform the user that the program ended
    //and disable the button
    outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
    document.getElementsByTagName("button")[0].setAttribute("disabled","true");






}