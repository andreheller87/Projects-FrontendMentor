

function insert(num){
 var numb = document.getElementById('result').innerHTML;
 
 if (num === "." && numb.includes(".")) {
    return; 
}
 if(numb.length < 18){
    document.getElementById('result').innerHTML = numb + num
 }
 
}

function clean(){
      document.getElementById('result').innerHTML = " ";
   }


   function changeSign(){
    var numb = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = -numb 
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
