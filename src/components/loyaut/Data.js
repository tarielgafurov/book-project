import React, { useState } from 'react'
import Header from './Header'
import Form from '../Form'

const Data = () => {

    const [form,setForm]=useState(false)
    console.log(form);

    const showForm = ()=>{
        setForm(true)
    }
    
    const clowseForm = ()=>{
        setForm(false)
    }
    

  return (
    <div>
      <Header onShowForm={showForm}/>
     {form===true?<Form onClowse={clowseForm}/>:""}
    </div>
  )
}

export default Data


