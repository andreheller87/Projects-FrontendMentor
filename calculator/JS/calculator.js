


function insert(num){
 var numberResult = document.getElementById('result').innerHTML;


 console.log(numberResult.length)

 if (num === "." && numberResult.includes(".")) {
    return; 
}

 document.getElementById('result').innerHTML = numberResult + num
   
 
}

function cleanAll(){
      document.getElementById('result').innerHTML = " ";
   }

   function clean(){
      var resultClean =document.getElementById('result').innerHTML;
      document.getElementById('result').innerHTML = resultClean.substring(0,resultClean.length-1);
   }


   function changeSign(){
    var numberResultChange = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = -numberResultChange
 }
 var oldnumb ;
 var operatorinput;
 function operator(e) {
    oldnumb = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = " ";
     operatorinput = e;
    
  }
  
  function calc() {

    var num = document.getElementById('result').innerHTML;
    var result=0;
  
    if(operatorinput === "/"){
        result = oldnumb / parseFloat(num); 
    }else if(operatorinput === "*"){
         result = oldnumb * parseFloat(num); 
    }else if(operatorinput === "-"){
         result = oldnumb - parseFloat(num); 
    }else if(operatorinput === "+"){
        result = (parseFloat(oldnumb ) + parseFloat(num))  ; 
    }
    
  document.getElementById('result').innerHTML = result;
  }


  function percent(){
    var num = document.getElementById('result').innerHTML;
    var result = num / 100;
    document.getElementById('result').innerHTML = result;
  }
