import React from 'react'
import * as C from "./styles.js";
import {BsTrash3Fill} from "react-icons/bs";
import {ImStatsBars} from "react-icons/im";

const StatsItem = ({title, value, isAvarage}) => {
  return (
    <C.Container>
        <C.H1>{title}:</C.H1>
        {isAvarage ? (
          <C.Span isAvarage={isAvarage}>{value}kg por coleta</C.Span>
        ): (
          <C.Span>{value}kg</C.Span>
        )}
        
        <BsTrash3Fill/>
        <C.SVGStats>
            <ImStatsBars/>
        </C.SVGStats>
    </C.Container>
  )
}

export default StatsItem;