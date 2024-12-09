import React from 'react'
import styled from 'styled-components'

const Header = (props) => {
    console.log(props);
    const showClick =()=>{
        props.onShowForm()
    }

  return (
    <HeaderStyle>
      <button onClick={showClick}>дабавит</button>
    </HeaderStyle>
  )
}

export default Header

const HeaderStyle = styled.div`
    background-color: beige;
    width: 100vw;
    height: 60px;
`

