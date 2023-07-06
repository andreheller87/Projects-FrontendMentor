import React, { useState } from "react";
import './Calculator.css'
import Container from '@mui/material/Container';
import { Box } from "@mui/system";

export default function Calculator() {
  const[num,setNum] = useState(0)
  const[oldnum,setOldNum] = useState(0)
  const[operator,setOperator] = useState()
  

  

function inputNum(e){
  var input = e.target.value

 const hasDot = num.toString().includes(".");
  
  if (input === "." && hasDot ) {
    return; 
  }


  if(num === 0){
    setNum(input);
  }else if(num.length<59){
    setNum(num + input);
  }
  }

function clear(){
 setNum(0);
}

function porcentage(){
  setNum(num / 100)
}

function changeSign(){
  if(num>0){
    setNum(-num)
  }else{
    setNum(num * -1)
  }
}

function operatorHandler(e){
var operatorInput = e.target.value
setOperator(operatorInput)
setOldNum(num)
setNum(0)

}

function calculate(){

  if(operator ==="/" && num !== 0){
    setNum(oldnum / num)
  }else if(operator ==="*" ){
    setNum(oldnum * num)
  }else if(operator ==="-" ){
    setNum(oldnum - num)
  }else if(operator ==="+" ){
    setNum((parseFloat(oldnum) + parseFloat(num)))
  }
}

    return (
      <div>
        <Box m={2}/>
      <Container maxWidth="xs">
      <div className="wrapper" id="wrapper">
        <Box m={2}/>
        
        <h1 className="result" id="result" style={{ fontSize: `${Math.max(3 - Math.floor(num.length / 12) * 0.3, 1.5)}rem` }}>{num}</h1>
      <button onClick={clear}>AC</button>
      <button onClick={changeSign}>+/-</button>
      <button onClick={porcentage}>%</button>
      <button className="colorOperator" onClick={operatorHandler} value={"/"}>/</button>
      <button className="color-button" onClick={inputNum} value={7}>7</button>
      <button className="color-button" onClick={inputNum} value={8}>8</button>
      <button className="color-button" onClick={inputNum} value={9}>9</button>
      <button className="colorOperator" onClick={operatorHandler} value={"*"}>*</button>
      <button className="color-button" onClick={inputNum} value={4}>4</button>
      <button className="color-button" onClick={inputNum} value={5}>5</button>
      <button className="color-button" onClick={inputNum} value={6}>6</button>
      <button className="colorOperator" onClick={operatorHandler} value={"-"}>-</button>
      <button className="color-button" onClick={inputNum} value={1}>1</button>
      <button className="color-button" onClick={inputNum} value={2}>2</button>
      <button className="color-button" onClick={inputNum} value={3}>3</button>
      <button className="colorOperator" onClick={operatorHandler} value={"+"}>+</button>
      <button className="color-button double-width" onClick={inputNum} value={0}>0</button>
      <button className="color-button" onClick={inputNum} value={"."} >.</button>
      <button onClick={calculate}>=</button>
       </div>
      </Container>
      </div>
    );
  }
  
  