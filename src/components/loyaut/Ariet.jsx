
import React from 'react'
import Bektur from './Bektur'
import styled from 'styled-components'


const arr = [
    {
        name:"Aibek",
        email:"aibek@gamil.com"
    },
    {
        name:"Asan",
        email:"asan@gamil.com"
    },
]



const Ariet = () => {
  return (
    <ToDoStyle>
      {
        arr.map((el)=>{
            return <Bektur {...el}/>
        })
      }
    </ToDoStyle>
  )
}


export default Ariet


const ToDoStyle  = styled.div`
    border: 1px solid;
    /* background-color: beige; */
`
