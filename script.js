function displayvalue(val){
    document.getElementById("display").value=document.getElementById("display").value+val;
 }
 function clearDisplay()
 {
     document.getElementById("display").value="";
 }
 function del(){
    document.getElementById("display").value=document.getElementById("display").value.slice(0,-1);
 }
 
 function calculate(){
     var userInput=document.getElementById("display").value;
     var result=eval(userInput);
    
     document.getElementById("display").value=result;
     
 }
 function sin(){
    document.getElementById("display").value=Math.sin(document.getElementById("display").value);
 }
 function cos(){
    document.getElementById("display").value=Math.cos(document.getElementById("display").value);
 }
 function tan(){
    document.getElementById("display").value=Math.tan(document.getElementById("display").value);
 }
 function square(){
    document.getElementById("display").value=Math.pow(document.getElementById("display").value,2);
 }
 function qubbed(){
    document.getElementById("display").value=Math.pow(document.getElementById("display").value,3);
 }
 function sqr(){
    document.getElementById("display").value=Math.pow(document.getElementById("display").value,1/2);
 }
 function qubb(){
    document.getElementById("display").value=Math.pow(document.getElementById("display").value,1/3);
 }
 function log(){
    document.getElementById("display").value=Math.log(document.getElementById("display").value,1/3);
 }