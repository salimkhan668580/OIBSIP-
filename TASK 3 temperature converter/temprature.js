
var tempform=document.getElementById("selectTemp").value;

// tempform.addEventListener("input",function(){
//     document.getElementById("erSelect").innerHTML="";
// })

// var form=tempform.value;
    
function convert(){

 var input=document.getElementById("Degree").value;

 switch(tempform){
   case '1':
 
      let c=((input-32) * 5/9);

     document.getElementById("result").innerHTML=c.toFixed(2)+" C";
     break;

    
     case '2':
     document.getElementById("result").innerHTML=((input * 9/5) + 32).toFixed(2) +" F";
     break;

     default:
       document.getElementById("erSelect").innerHTML="please the option";

 }

}


