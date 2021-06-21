import React, { ChangeEvent } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Timer from '../../components/Timer';
import { Container, Content, Input } from './styles';


interface TimeState {
  time: number;
  timer: number | undefined;
}
export function TestTyping(){

  const[timeStart,setTimeStart] = useState<TimeState>({ time:0,timer:undefined})

  const [inputTexto,setInputTexto] = useState('')
  const [arrayTexto,setArrayTexto] = useState<string[]>([])
  const [error,setError] = useState(false)
  

useEffect(() =>  {
  
  function startTime(){
   
    clearInterval(timeStart.timer);

    let timer: number = window.setTimeout(() => {
       
     
      let starttime = timeStart.time +1;
     
      setTimeStart({time:starttime,timer:timeStart.timer})

      
     
    },1000)
    return () => {
      clearTimeout(timer);
    };

    //clearTimeout(timer);
    // setTimeStart({time:timeStart.time,timer})

    // return timeStart
  }
  startTime();
  

  const txt_typing = 'O Rato roeu a Roupa do rei'
  const array = txt_typing.split(" ")
  
  setArrayTexto(array)

  
  
},[timeStart]);


function handleChange(event: ChangeEvent<HTMLInputElement>){


  setInputTexto(event.target.value)

  let txt = 'O Rato roeu a Roupa do rei';
 let inp = inputTexto.length +1
 console.log(inputTexto.length)
  if(inp === txt.length){
    console.log('mesmo tamanho')
  }


  
}
function handleKeyPress(event: React.KeyboardEvent<HTMLElement>){

  if(event.code === 'Space' ){
    
    let arr = inputTexto.split(" ")
   
    // arr.map((elem,index) => {
      
    //   if(arrayTexto[index -1] !== elem){
       
    //     console.log(elem)
    //   }
    //   return index
    // })

    for(let i=0; i < arr.length - 1;i++){

      if(arrayTexto[i] !== arr[i]){
       
        setError(true)
      }
    }
   

  }

 
}
  


  return (
    <Container>
      <Content>
          <Timer time={timeStart.time} />
          <span>O Rato roeu a Roupa do rei</span>

          <Input type="text" name="txtInput" onChange={handleChange} onKeyUp={handleKeyPress} error={error}/>

      </Content>
    </Container>
  )
}