import React from 'react'
import * as C from "./styles.js";
import Logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
import {TbPresentationAnalytics} from "react-icons/tb";
import {FaTrashRestoreAlt} from "react-icons/fa";
import {BsClipboard2PlusFill, BsTrash3Fill, BsClipboard2PulseFill} from "react-icons/bs";
import {BiSolidUser} from "react-icons/bi";
import useMediaQuery from '../../hooks/useMediaQuery.js';
import {AiOutlineClose} from "react-icons/ai";

const Sidebar = () => {
  const path = location.pathname;
  const isDesktopScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <C.NavBar>
        {!isDesktopScreen &&
            <AiOutlineClose/>
        }
        <C.Img src={Logo} alt="imagem do logo"/>

        <C.Container>
                <Link 
                    to="/geral"
                    style={{color: path === "/geral" ? "#4B6F44" : "none"}}
                >
                    Visão Geral
                    <TbPresentationAnalytics/>
                </Link>

                <Link 
                    to="/coletas/inserir"
                    style={{color: path === "/coletas/inserir" ? "#4B6F44" : "none"}}
                >
                    Inserir coleta
                    <FaTrashRestoreAlt/>
                </Link>

                <Link 
                    to="/notas/inserir"
                    style={{color: path === "/notas/inserir" ? "#4B6F44" : "none"}}
                >
                    Inserir anotação
                    <BsClipboard2PlusFill/>
                </Link> 

                <Link 
                    to="/coletas"
                    style={{color: path === "/coletas" ? "#4B6F44" : "none"}}
                >
                    Histórico de coletas
                    <BsTrash3Fill/>
                </Link>
            
                <Link 
                    to="/notas"
                    style={{color: path === "/notas" ? "#4B6F44" : "none"}}
                >
                    Ver anotações
                    <BsClipboard2PulseFill/>
                </Link>
        
                <Link 
                    to="/perfil"
                    style={{color: path === "/perfil" ? "#4B6F44" : "none"}}
                >
                    Perfil
                    <BiSolidUser/>
                </Link>
        
                <Link to="/">Sair</Link>    
        </C.Container>
    </C.NavBar>
  )
}

export default Sidebar