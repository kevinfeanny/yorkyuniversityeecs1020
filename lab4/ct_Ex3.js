// in Ex2 to Ex5, change the name of the following function properly
function equation() {

    /* in Ex1, change the following two lines such that the 
      numbers are parsed to integers before being assigned to 
      their variables.*/
    /* in Ex 2, rename the variables appropriately. */  
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var alpha = document.getElementById("alpha").value;
    /* in Ex2, write a similar code to the above line
       to capture the value for another value*/
  
   
    /* in Ex1, you need to replace the following line 
        with an appropriate formula */
    /* in Ex2 to Ex4, you need to replace the following line 
        with some other formulas */
 //var perimeter = a + b;
 
        var d = b*b-4*a*alpha;
        var root1 = (-b + Math.sqrt(d))/(2*a);
        var root2 = (-b- Math.sqrt(d))/(2*a);
        
        
     

    /* in Ex5, you should delete from Line 9 to this line */
  
    /*   //in Ex 5, uncomment this block
    switch (true){
      case (a > 89): 
          answer = "A+";
          break;
      case (a > 79): 
          answer = "A";
          break;
          // in Ex5, you need to add more cases for other letter grades
      default:
          answer = "F";
    }
    */
    
    /* in Ex2 to Ex5, you need to rename "perimeter" to make it appropriate
       for those problems, you may also need to rename perimeter to a better 
       variable that you might have in your formulas above */ 
    
       document.getElementById("output").innerHTML = "oneroot: " + root1.toFixed(2)+"<br>" + "another: " + root2.toFixed(2);
  }
  