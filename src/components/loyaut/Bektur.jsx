import React from 'react'
import styled from 'styled-components'

const Bektur = ({name,email}) => {
  return (
    <div>
      <button>click</button>
      <NameStyle>{name}</NameStyle>
      <EmailStyle>{email}</EmailStyle>
      <h1>IM BOOK Component</h1>
      <input type="text" />

    </div>
  )
}

export default Bektur


const NameStyle = styled.h1`
    border: 1px solid red;
`
const EmailStyle = styled.h1`
    border: 2px solid green;
`

