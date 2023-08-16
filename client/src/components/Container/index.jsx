import React from 'react'
import * as C from "./styles.js";
import Sidebar from '../SideBar/index.jsx';

const ContainerLayout = ({children}) => {
  return (
    <C.Container>
        <Sidebar/>
        
        <C.Section>
            {children}
        </C.Section>
    </C.Container>
  )
}

export default ContainerLayout