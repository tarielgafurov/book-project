import React, { useState } from 'react'
import styled from 'styled-components'

const Form = (props) => {
    console.log(props);

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
console.log(name);
console.log(email);

    const nameHandler = (e)=>{
          setName(e.target.value);
        }
        const emailHandler = (e)=>{
        setEmail(e.target.value);
    }
        const AddHandler = ()=>{
       const obj ={
        email,
        name:name
       }
       console.log(obj);
       
    }
    

    
  return (
    <FormStyle>
      <input onChange={nameHandler} type="text" />
      <input onChange={emailHandler} type="email" />
      {/* <input type="date" /> */}
      <div>
        <button onClick={AddHandler}>ADD</button>
        <button onClick={props.onClowse}>Clowse</button>
      </div>
    </FormStyle>
  )
}
export default Form

const FormStyle = styled.div`
margin: auto;
margin-top: 50px;
background-color: beige;
    width: 300px;
    border: 1px solid;
    display: flex;
    flex-direction: column;
    height: 150px;
    input{
        width: 200px;
        height: 20px;
        margin: auto;
    }
`


