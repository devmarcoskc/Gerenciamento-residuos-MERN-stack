import React from 'react'
import * as C from "./styles.js";
import {BsTrash3Fill} from "react-icons/bs";
import {ImStatsBars} from "react-icons/im";

const StatsItem = ({title, value, isAvarage, isNote}) => {
  return (
    <C.Container>
        <C.H1>{title}:</C.H1>
        {isAvarage && !isNote && 
          <C.Span style={{fontSize: isAvarage ? "17.5px" : "22px"}}>
            {value}kg por coleta
          </C.Span>
        }
        {!isAvarage && !isNote &&
          <C.Span>{value}kg</C.Span>
        }
        {!isAvarage && isNote &&
          <C.Span>{value}</C.Span>
        }
        <BsTrash3Fill/>
        <C.SVGStats>
            <ImStatsBars/>
        </C.SVGStats>
    </C.Container>
  )
}

export default StatsItem;