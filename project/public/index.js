var congrat = document.getElementById("myHeader");
var im = document.getElementById("f");
var i = 0;
var im2 = document.getElementById("g");
var im3 = document.getElementById("h");
var im4 = document.getElementById("k");
var congratcolors = [ "magenta" , "blue", "silver"];

window.addEventListener("load" , () => {
    
var setff = setTimeout(function(){ rand(congratcolors[0]) }, 2000);
var ggg = setTimeout(function(){ rand(congratcolors[1]), cont() }, 6000);
var rrr = setTimeout(function(){rand(congratcolors[2]), cont() }, 8000);
var jjj = setTimeout(function(){ rand(congratcolors[0]) }, 2000);
var ag = setTimeout(function(){ rand(congratcolors[1]), cont() }, 6000);
var frr = setTimeout(function(){rand(congratcolors[2]), cont() }, 8000);

});
function randomColour() {
    return Math.floor(Math.random() * 255);
}
function rand(con) {
    
        im.style.display = "none";
        im2.style.display = "none";
        im3.style.display = "none";
        im4.style.display = "none";
        congrat.style.color = con;
        
        
}
function cont(){
    im2.style.display = "block";
    im.style.display = "block";
    im3.style.display = "block";
    im4.style.display = "block";
}