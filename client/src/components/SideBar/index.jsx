import React from 'react'
import * as C from "./styles.js";
import Logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
import {TbPresentationAnalytics} from "react-icons/tb";
import {FaTrashRestoreAlt} from "react-icons/fa";
import {BsClipboard2PlusFill, BsTrash3Fill, BsClipboard2PulseFill} from "react-icons/bs";
import {BiSolidUser} from "react-icons/bi";

const Sidebar = () => {
  return (
    <C.NavBar>
        <C.Img src={Logo} alt="imagem do logo"/>

        <C.Container>
                <Link to="/geral">
                    Visão Geral
                    <TbPresentationAnalytics/>
                </Link>

                <Link to="/coletas/inserir">
                    Inserir coleta
                    <FaTrashRestoreAlt/>
                </Link>

                <Link to="/anotaçoes/inserir">
                    Inserir anotação
                    <BsClipboard2PlusFill/>
                </Link> 

                <Link to="/coletas">
                    Histórico de coletas
                    <BsTrash3Fill/>
                </Link>
            
                <Link to="/anotaçoes">
                    Ver anotações
                    <BsClipboard2PulseFill/>
                </Link>
        
                <Link to="/perfil">
                    Perfil
                    <BiSolidUser/>
                </Link>
        
                <Link to="/">Sair</Link>    
        </C.Container>
    </C.NavBar>
  )
}

export default Sidebar