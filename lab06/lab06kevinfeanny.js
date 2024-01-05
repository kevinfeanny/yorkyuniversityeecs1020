function problem01(){
var prime= true;
var d = 2;
var num;
    num = prompt("please enter a number");
    num = parseInt(num);
    while(prime == true && d <= (num/2)){
        if(num%d == 0){
            prime= false;
        }
        d++;
    }
    if(prime == true){
        alert(num + " is prime");
    }
    else{
        alert(num + " is not prime");
    }
}
function problem02(){
    var sum1 = 0;
    var sum2 = 0;
    var i;
    var num;
    for(i=1;i<=4;i++){
        num = prompt("please enter a number");
        num = parseInt(num);
        sum1= sum1 + num;

    }
    for(i=1;i<=4;i++){
        num = prompt("please enter a number");
        num = parseInt(num);
        sum2 = sum2 + num;
    }
    if(sum1 == sum2){
        alert("yes");
    }else{
        alert("no");
    }

}
function problem03(){
    var p = 0;
    var n =0;
    var num;
    do{
        num = parseInt(prompt("please enter a number"));
        if(num < 0 ){
            p++;
        }else if(num > 0){
            n++;
        }


    }while(num != 0 && p <= (2*n));
}
function problem04(){
    var cnt1 = 0;
    var cnt2 = 0;
    var i;
    var num;
    for(i=1;i<=4;i++){
        num = parseInt(prompt("please enter a number"));
        if(num < 0){
            cnt1++;
        }
    }
    for(i=1;i<=4;i++){
        num = parseInt(prompt("please enter a number"));
        if(num > 0){
            cnt2++;
        }
       
    }
    if(cnt1 == cnt2){
        alert("yes");
    }else {
        alert("no");
    }
}
function problem05(){
    var num;
    var i;
    var message = " ";
    num = parseInt(prompt("please enter a number"));
    for(i=2;i <= num; i++){
        if(prime(i)== true){
            message += i + " ";
        }
    }
    console.log(message);
    document.getElementById("myP").innerHTML = message;
}
function prime(i){
        var flag = true;
        var d = 2;
        while(flag == true && d <= (i/2)){
            if(i%d == 0){
                flag= false;
            }
            d++;
        }
        return flag;
}
function problem06(){
    var num;
    var i;
    var message = " ";
    num = parseInt(prompt("please enter a number"));
    for(i=2;i <= num; i++){
        if(prime(i)== true){
            if(has7(i)== true){
            message += i + " ";
        }
        }
    }
    console.log(message);
    document.getElementById("myP").innerHTML = message;
}
function has7(i){
    var flag = false;
    var x = 0;
    var num = i;
    while(num != 0){
        x = num%10;
        if(x == 7){
            flag = true;
        }
        num = num/10;


    }
    return flag;
}