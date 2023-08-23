import React from 'react'
import * as C from "./styles.js";
import {ImStatsBars} from "react-icons/im";

const StatsItem = ({title, value, isAvarage, isNote}) => {
  return (
    <C.Container>
        <C.H1>{title}:</C.H1>
        {isAvarage && !isNote && 
          <C.Span style={{fontSize: isAvarage ? "17px" : "22px"}}>
            {value}kg por coleta
          </C.Span>
        }
        {!isAvarage && !isNote &&
          <C.Span>{value}kg</C.Span>
        }
        {!isAvarage && isNote &&
          <C.Span>{value}</C.Span>
        }
        <ImStatsBars/>
        <C.SVGStats>
            <ImStatsBars/>
        </C.SVGStats>
    </C.Container>
  )
}

export default StatsItem;