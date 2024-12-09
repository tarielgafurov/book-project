import React from 'react'
import styled from 'styled-components'

const Bektur = ({name,email}) => {
  return (
    <div>
      <NameStyle>{name}</NameStyle>
      <EmailStyle>{email}</EmailStyle>
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

