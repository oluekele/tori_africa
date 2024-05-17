'use client'
import React, { useState } from 'react'
import Fiction from './Fiction';

const DotSlide3 = () => {
    const [result3, setResult3] = useState(0)

    const handleClick2 = (input:any, offset:any) => {
      setResult3(result3 + input)
      const element = document.getElementById('myButton3');
      const dot12 = document.getElementById('dot02');
      const dot13 = document.getElementById('dot03');
      const dot14 = document.getElementById('dot04');
      console.log(element)
      
      dot12!.addEventListener('click', ()=>{
        setResult3(-2)
        dot12!.style.width = '16px'
        dot13!.style.width = '6px'
        dot14!.style.width = '6px'
        dot12!.style.backgroundColor = '#f65d4e'
        dot13!.style.backgroundColor = '#e6e6e6'
        dot14!.style.backgroundColor = '#e6e6e6'
        console.log(result3)
      
       })
      dot13!.addEventListener('click', ()=>{
        
        setResult3(-1)
          dot13!.style.width = '16px'
          dot12!.style.width = '6px'
          dot14!.style.width = '6px'
          dot13!.style.backgroundColor = '#f65d4e'
          dot12!.style.backgroundColor = '#e6e6e6'
          dot14!.style.backgroundColor = '#e6e6e6'
          console.log(result3)
          
        
      })
      dot14!.addEventListener('click', ()=>{
        clearTimeout('')
        setResult3(0)
          dot14!.style.width = '16px'
          dot12!.style.width = '6px'
          dot13!.style.width = '6px'
          dot14!.style.backgroundColor = '#f65d4e'
          dot12!.style.backgroundColor = '#e6e6e6'
          dot13!.style.backgroundColor = '#e6e6e6'
          console.log(result3)
      })
      
      setTimeout(() => {
        if(result3 === -2){
          setResult3(-1)
          dot13!.style.width = '16px'
          dot12!.style.width = '6px'
          dot14!.style.width = '6px'
          dot13!.style.backgroundColor = '#f65d4e'
          dot12!.style.backgroundColor = '#e6e6e6'
          dot14!.style.backgroundColor = '#e6e6e6'
          element!.style.translate = `${250}px`
          console.log(result3)
        }
        setTimeout(() => {
          if(result3 !== 0){
            setResult3(0)
            dot14!.style.width = '16px'
            dot12!.style.width = '6px'
            dot13!.style.width = '6px'
            dot14!.style.backgroundColor = '#f65d4e'
            dot12!.style.backgroundColor = '#e6e6e6'
            dot13!.style.backgroundColor = '#e6e6e6'
            element!.style.translate = `${0}px`
            console.log(result3)
          }
          
        }, 6000)
        
      }, 4000)

      setTimeout(() => {
        if(result3 === 0){
          setResult3(0)
          dot14!.style.width = '16px'
          dot12!.style.width = '6px'
          dot13!.style.width = '6px'
          dot14!.style.backgroundColor = '#f65d4e'
          dot12!.style.backgroundColor = '#e6e6e6'
          dot13!.style.backgroundColor = '#e6e6e6'
          element!.style.translate = `${0}px`
          console.log(result3)
        }
        
      }, 4000)
    
      element!.style.translate = `${result3 * offset}px`
  };
  return (
    <div>
      <Fiction handleClick={handleClick2} />
    </div>
  )
}

export default DotSlide3
