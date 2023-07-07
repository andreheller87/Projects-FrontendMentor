import React, {useState} from 'react';
import './Calculator.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

export default function Calculator() {
    const[num,setNum ] = useState(0)

function inputNum(e){
var input = e.target.value

if(num === 0 ){
    setNum(input)
}else{
    setNum(num +input)
}

}

function clear(){
    setNum(0)
}

function porcentage(){
    setNum(num / 100)
}
function changeSign(){
    if(num>0){
        setNum(-num)
    }else{
        setNum(Math.abs(num))   
    }
}

function calculator(){

}



    return (
        <div>
            <Box m={5}/>
            <Container maxWidth="xs">
                <div className='wrapper' >
                        <h1 className='result'>{num}</h1>
                    <button onClick={clear}>AC</button>
                    <button onClick={changeSign}>+/-</button>
                    <button onClick={ porcentage} >%</button>
                    <button className='color-button-Operator'>/</button>
                    <button className='color-button-num' onClick={inputNum} value={7}>7 </button>
                    <button className='color-button-num' onClick={inputNum} value={8}>8</button>
                    <button className='color-button-num' onClick={inputNum} value={9}>9</button>
                    <button className='color-button-Operator'>*</button>
                    <button className='color-button-num' onClick={inputNum} value={4}>4</button>
                    <button className='color-button-num' onClick={inputNum} value={5}>5</button>
                    <button className='color-button-num' onClick={inputNum} value={6}>6</button>
                    <button className='color-button-Operator'>-</button>
                    <button className='color-button-num' onClick={inputNum} value={1}>1</button>
                    <button className='color-button-num' onClick={inputNum} value={2}>2</button>
                    <button className='color-button-num' onClick={inputNum} value={3}>3</button>
                    <button className='color-button-Operator'>+</button>
                    <button className='color-button-num button-Zerro' onClick={inputNum} value={0}>0</button>
                    <button className='color-button-num' onClick={inputNum} value={"."}>.</button>
                    <button className='color-button-Operator' onClick={calculator}>=</button>
                </div>
            </Container>
        </div>
    )


}