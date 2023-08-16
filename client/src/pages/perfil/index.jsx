import React from 'react'
import * as C from "./styles.js";
import ContainerLayout from '../../components/Container';
import TitlePage from '../../components/TitlePage';
import { useSelector } from 'react-redux';
import {BiSolidUser} from "react-icons/bi";
import {BsGeoAltFill} from "react-icons/bs";

const Perfil = () => {
  const user = useSelector((state) => state.user);

  return (
    <ContainerLayout>
        <TitlePage 
          title="Veja seu Perfil"
          text="Todos os dados de perfil que você salvou:"
        />
        <C.InfoAndName>
          <BiSolidUser/>
          <h4>Orgão Responsável:</h4>
          <span>{user.orgao}</span>
        </C.InfoAndName>
        <C.InfoAndName>
          <BsGeoAltFill/>
          <h4>Cidade de Atuação:</h4>
          <span>{user.cidade}</span>
        </C.InfoAndName>
        <C.InfoAndName>
          <BsGeoAltFill/>
          <h4>Estado de Atuação:</h4>
          <span>{user.estado}</span>
        </C.InfoAndName>

        <C.H2>Muito obrigado por escolher a nossa plataforma! Em breve novas funcionalidades</C.H2>
    </ContainerLayout>
  )
}

export default Perfil