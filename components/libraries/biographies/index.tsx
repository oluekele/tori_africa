'use client'
import React, { useState } from 'react'
import Biographies from './Biographies'


const DotSlide = () => {
  const [result, setResult] = useState(0)
  
  
  const handleClick = (input:any, offset:any) => {
    setResult(result + input)
    const element = document.getElementById('myButton');
    const dot12 = document.getElementById('dot12');
    const dot13 = document.getElementById('dot13');
    const dot14 = document.getElementById('dot14');
    
    console.log(element)
    
    dot12!.addEventListener('click', ()=>{
      setResult(-2)
        dot12!.style.width = '16px'
        dot13!.style.width = '6px'
        dot14!.style.width = '6px'
        dot12!.style.backgroundColor = '#f65d4e'
        dot13!.style.backgroundColor = '#e6e6e6'
        dot14!.style.backgroundColor = '#e6e6e6'
        console.log(result)
        
      
     })
    dot13!.addEventListener('click', ()=>{
      
      setResult(-1)
        dot13!.style.width = '16px'
        dot12!.style.width = '6px'
        dot14!.style.width = '6px'
        dot13!.style.backgroundColor = '#f65d4e'
        dot12!.style.backgroundColor = '#e6e6e6'
        dot14!.style.backgroundColor = '#e6e6e6'
        console.log(result)
      
    })
    dot14!.addEventListener('click', ()=>{
      clearTimeout('')
      setResult(0)
        dot14!.style.width = '16px'
        dot12!.style.width = '6px'
        dot13!.style.width = '6px'
        dot14!.style.backgroundColor = '#f65d4e'
        dot12!.style.backgroundColor = '#e6e6e6'
        dot13!.style.backgroundColor = '#e6e6e6'
        console.log(result)
    })
    setInterval(() => {
      if(result === -2){
        setResult(-1)
        dot13!.style.width = '16px'
        dot12!.style.width = '6px'
        dot14!.style.width = '6px'
        dot13!.style.backgroundColor = '#f65d4e'
        dot12!.style.backgroundColor = '#e6e6e6'
        dot14!.style.backgroundColor = '#e6e6e6'
        element!.style.translate = `${250}px`
        console.log(result)
      }
      setTimeout(() => {
        if(result !== 0 ){
          setResult(0)
          dot14!.style.width = '16px'
          dot12!.style.width = '6px'
          dot13!.style.width = '6px'
          dot14!.style.backgroundColor = '#f65d4e'
          dot12!.style.backgroundColor = '#e6e6e6'
          dot13!.style.backgroundColor = '#e6e6e6'
          element!.style.translate = `${0}px`
          console.log(result)
        }
        
      }, 2000)
      setTimeout(() => {
        if(result !== -2 ){
          setResult(-2)
          dot12!.style.width = '16px'
          dot14!.style.width = '6px'
          dot13!.style.width = '6px'
          dot12!.style.backgroundColor = '#f65d4e'
          dot14!.style.backgroundColor = '#e6e6e6'
          dot13!.style.backgroundColor = '#e6e6e6'
          element!.style.translate = `${500}px`
          console.log(result)
        }
        
      }, 4000)
    }, 6000)
    setTimeout(() => {
      if(result === -1){
        setResult(0)
        dot14!.style.width = '16px'
        dot12!.style.width = '6px'
        dot13!.style.width = '6px'
        dot14!.style.backgroundColor = '#f65d4e'
        dot12!.style.backgroundColor = '#e6e6e6'
        dot13!.style.backgroundColor = '#e6e6e6'
        element!.style.translate = `${0}px`
        console.log(result)
      }
      
    }, 6000)
  
    element!.style.translate = `${result * offset}px`
};
  return (
    <div >
      <div>
        <Biographies handleClick={handleClick} />
        
      </div>
      
    </div>
    
  )
}

export default DotSlide