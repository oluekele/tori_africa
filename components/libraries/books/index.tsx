'use client'
import React, { useState } from 'react'
import Books from './Books';

const  DotSlide2 = () => {
    const [result4, setResult4] = useState(0)

    const handleClick1 = (input:any, offset:any) => {
      setResult4(result4 + input)
      const element = document.getElementById('myButton2');
      const dot12 = document.getElementById('dot2');
      const dot13 = document.getElementById('dot3');
      const dot14 = document.getElementById('dot4');
      console.log(element)
      
      dot12!.addEventListener('click', ()=>{
        setResult4(-2)
          dot12!.style.width = '16px'
          dot13!.style.width = '6px'
          dot14!.style.width = '6px'
          dot12!.style.backgroundColor = '#f65d4e'
          dot13!.style.backgroundColor = '#e6e6e6'
          dot14!.style.backgroundColor = '#e6e6e6'
          console.log(result4)
        
        
       })
      dot13!.addEventListener('click', ()=>{
        
        setResult4(-1)
          dot13!.style.width = '16px'
          dot12!.style.width = '6px'
          dot14!.style.width = '6px'
          dot13!.style.backgroundColor = '#f65d4e'
          dot12!.style.backgroundColor = '#e6e6e6'
          dot14!.style.backgroundColor = '#e6e6e6'
          console.log(result4)
          
        
      })
      dot14!.addEventListener('click', ()=>{
        setResult4(0)
          dot14!.style.width = '16px'
          dot12!.style.width = '6px'
          dot13!.style.width = '6px'
          dot14!.style.backgroundColor = '#f65d4e'
          dot12!.style.backgroundColor = '#e6e6e6'
          dot13!.style.backgroundColor = '#e6e6e6'
          console.log(result4)
      })
      
      setTimeout(() => {
        if(result4 === -2){
          setResult4(-1)
          dot13!.style.width = '16px'
          dot12!.style.width = '6px'
          dot14!.style.width = '6px'
          dot13!.style.backgroundColor = '#f65d4e'
          dot12!.style.backgroundColor = '#e6e6e6'
          dot14!.style.backgroundColor = '#e6e6e6'
          element!.style.translate = `${250}px`
          console.log(result4)
        }
        setTimeout(() => {
          if(result4 !== 0){
            setResult4(0)
            dot14!.style.width = '16px'
            dot12!.style.width = '6px'
            dot13!.style.width = '6px'
            dot14!.style.backgroundColor = '#f65d4e'
            dot12!.style.backgroundColor = '#e6e6e6'
            dot13!.style.backgroundColor = '#e6e6e6'
            element!.style.translate = `${0}px`
            console.log(result4)
          }
          
        }, 6000)
        
      }, 4000)

      setTimeout(() => {
        if(result4 === -1){
          setResult4(0)
          dot14!.style.width = '16px'
          dot12!.style.width = '6px'
          dot13!.style.width = '6px'
          dot14!.style.backgroundColor = '#f65d4e'
          dot12!.style.backgroundColor = '#e6e6e6'
          dot13!.style.backgroundColor = '#e6e6e6'
          element!.style.translate = `${0}px`
          console.log(result4)
        }
        
      }, 6000)
      element!.style.translate = `${result4 * offset}px`
  };
  return (
    <div>
      <Books handleClick={handleClick1} />
    </div>
  )
}

export default DotSlide2
