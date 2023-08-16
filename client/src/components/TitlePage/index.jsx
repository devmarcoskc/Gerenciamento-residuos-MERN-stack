import React from 'react'
import * as C from "./styles.js";

const TitlePage = ({title, orgao, text}) => {
  return (
    <C.TitleAndTextDiv>
        <C.H1>{title}</C.H1>
        {orgao && 
          <C.H2>{orgao}</C.H2>
        }
        {text &&
          <C.P>{text}</C.P>
        }
    </C.TitleAndTextDiv>
  )
}

export default TitlePage