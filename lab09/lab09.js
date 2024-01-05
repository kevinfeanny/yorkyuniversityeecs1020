var i = 0;
var u = 0;
var e = 0;
var w = 0;
var indx = 0;
var key = 3;
var f = [8, 9, 9, 12, 13, 13, 13, 15, 20, 100, 100, 101, 123, 129, 300, 1000, 5001, 20000, 20000, 34511];
function problem01(){
        
        var s = prompt("Please enter a string");
        var result = reverse(s);
        alert(result);


}
function problem02(){
    var s = prompt("Please enter a Number");
    parseInt(s);
    var result = howmany7(s);
    alert(result);



}
function problem03(){
    var s = prompt("Please enter a Number");
    parseInt(s);
    var n = prompt("please enter a second number");
    parseInt(n);
    var result = multiply(s,n);
    alert(result);
}
function problem04(){
    var s = prompt("please enter a number");
    parseInt(s);
    var result = find(f,0,f.length, s);
    alert(result);


}
function reverse(s){
    if(s.length < 2){
        return s;
    }else{
        i++;
        console.log(s + s.charAt(0) + i);
        console.log("  ");
      
        return reverse(s.substring(1)) + s.charAt(0);
        console.log(s.substring(1) + s.charAt(0));
    }
}
function howmany7(s){
    if(s == 0){
        return s;
       }else {
        u++;
        console.log("trace" + u);
        console.log(s);
        var d =  0;
        d = s%10;
        var k = 0;
        parseInt(k = s/10);
        console.log(d);
        
        var count = 0;
        if(d == 7){
            
            count++;
            console.log(count);
        }
        return howmany7(parseInt(k)) + count;
       }
}
function multiply(s,n){
    if(s== 0 || n == 0){
        return 0;
    }else if(s == 1 && n != 1){
        return n;
    
    }else if(s != 1 && n == 1 ){
        return s;
    }else if(s==1 && n == 1){
        return 1;
    }else{
        e++;
        console.log(s);
        console.log(e);
        console.log(n);
        return parseInt(s) + parseInt(multiply(s,n-1));    }
}
function find(a,k,j, s){
    var flag = false;
    var mid = 0;
    console.log(w);
    console.log(s);
    console.log(mid);
    console.log(k);
    console.log(j);
    
  mid = (k + j) / 2;

mid = parseInt(mid);
console.log(mid);
if(j<k){
    return false;
}
else if (parseInt(s) == parseInt(a[mid])){
    console.log("Imhereeeee");
    flag = true;
    return true;
}
else if (parseInt(s) < parseInt(a[mid])){
    w++;
    console.log(w);
  
  
    return find(a, k, (mid-1),s);}
else if(parseInt(s) > parseInt(a[mid]))
{
    w++;
  

return find(a, (mid + 1), j,s);
}
}
  