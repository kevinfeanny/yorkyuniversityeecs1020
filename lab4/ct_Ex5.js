// in Ex2 to Ex5, change the name of the following function properly
function mapping() {

    /* in Ex1, change the following two lines such that the 
      numbers are parsed to integers before being assigned to 
      their variables.*/
    /* in Ex 2, rename the variables appropriately. */  
    var a = document.getElementById("a").value;
        /* in Ex2, write a similar code to the above line
       to capture the value for another value*/
  
   
    /* in Ex1, you need to replace the following line 
        with an appropriate formula */
    /* in Ex2 to Ex4, you need to replace the following line 
        with some other formulas */
 //var perimeter = a + b;
 
        
        
        
        
     

    /* in Ex5, you should delete from Line 9 to this line */
  var answer;
    
    switch (true){
      case (parseInt(a) > 89): 
          answer = "A+";
          break;
      case (parseInt(a) > 79): 
          answer = "A";
          break;
          case (parseInt(a) > 74 && parseInt(a)<=79): 
          answer = "B+";
          break;
          case (parseInt(a) > 69 && parseInt(a) <=74): 
          answer = "B";
          break;
          case (parseInt(a) > 64 && parseInt(a) <=69): 
          answer = "C+";
          break;
          case (parseInt(a) > 59 && parseInt(a) <=64): 
          answer = "C";
          break;
          case (parseInt(a) > 54 && parseInt(a) <=59): 
          answer = "D+";
          break;
          case (parseInt(a) > 49 && parseInt(a) <=54): 
          answer = "D";
          break;
          case (parseInt(a) > 39 && parseInt(a) <=49): 
          answer = "E";
          break;
          // in Ex5, you need to add more cases for other letter grades
      default:
          answer = "F";
    }

    
    /* in Ex2 to Ex5, you need to rename "perimeter" to make it appropriate
       for those problems, you may also need to rename perimeter to a better 
       variable that you might have in your formulas above */ 
    
        document.getElementById("output").innerHTML = answer;
        }
  