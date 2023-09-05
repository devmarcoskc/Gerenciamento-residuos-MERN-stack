import React, { useEffect, useState } from 'react'
import * as C from "./styles.js";
import { useSelector } from 'react-redux';
import TitlePage from '../../components/TitlePage';
import { getGeneralStats, getStatsByAddress } from '../../utils/apiCalls.js';
import ContainerLayout from "../../components/Container";
import StatsItem from '../../components/StatsItem';
import Loading from "../../components/Loading";
import { Link } from 'react-router-dom';
import PieChart from '../../components/PieChart';
import {AiOutlineSearch} from "react-icons/ai";

const Painel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [address, setAddress] = useState("");
  const [generalStats, setGeneralStats] = useState(null);
  const [ArraysLength, setArraysLengths] = useState({
    notes: 0,
    trashCollections:0
  });

  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);

  const getStats = async () => {
    try {
      setIsLoading(true);
      const response = await getGeneralStats(user._id, token);
     
      if(response.generalStats[0]) {
        setGeneralStats(response.generalStats[0]);
        setArraysLengths({
          notes: response.notes.length,
          trashCollections: response.trashCollections.length,
        })
      }
      setIsLoading(false);
    } catch(error) {
      setIsLoading(false);
      alert(error.message);
    }
    
  }

  useEffect(() => {
    getStats();
  }, []);

  const HandleGetStatsByAddress = async () => {
    if(address === "") return alert("Preencha o campo antes!");

    try {
      const response = await getStatsByAddress(user._id, address, token);
      if(response.msg) return alert("Bairro não encontrado!");

      setGeneralStats(response);
      setArraysLengths({...ArraysLength, trashCollections: response.coletas});
    } catch(error) {
      alert(error.message);
    }
  }

if(generalStats !== null) {
    const ArrayToNivo = generalStats.totalResiduosPorCategoria.map((residuo) => {
      const ObjectToNivoCharts = {
        id: residuo.categoria,
        label: residuo.categoria,
        value: residuo.quantidade,
      };
      return ObjectToNivoCharts;
  });

  return (
    <ContainerLayout>
      <TitlePage 
        title="Estatísticas gerais" 
        orgao={user.orgao}
        text="Bem-vindo, veja todas as suas estatísticas aqui!"
      />

      {isLoading && 
        <Loading/>
      }

      {!isLoading &&
        <C.Main>
          {generalStats.bairro &&
            <C.NameAddress>
              Bairro {generalStats.bairro}
            </C.NameAddress>
          }
          <C.MainInfosArea>
            <C.GeneralStatsArea>
              <h1>Total Resíduos:</h1>
              <span>{generalStats.totalResiduos}kg</span>
            </C.GeneralStatsArea>
            <C.GeneralStatsArea>
              <h1>Total anotações:</h1>
              <span>{ArraysLength.notes}</span>
            </C.GeneralStatsArea>
            {generalStats.bairro &&
              <C.GeneralStatsArea>
                <h1>Coletas Feitas:</h1>
                <span>{generalStats.coletas}</span>
              </C.GeneralStatsArea>
            }
            
            {!generalStats.bairro ? (
              <C.FilterByAdressArea>
                <h2>Filtrar por bairro:</h2>
                <C.InputAndSearchButtonArea>
                <input 
                  type="text"
                  placeholder="Exemplo: Navegantes"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <button type="button" onClick={HandleGetStatsByAddress}>
                  <AiOutlineSearch/>
                </button>
                </C.InputAndSearchButtonArea>
              </C.FilterByAdressArea>
            ): (
              <>
                <C.GoBackButton type="button" onClick={getStats}>
                  Voltar as Estatísticas Gerais
                </C.GoBackButton>
              </>
            )}
            
          </C.MainInfosArea>

          <C.ContainerGrid>
            {generalStats.totalResiduosPorCategoria.map((residuo) => (
              <StatsItem 
                key={residuo.categoria}
                title={`Total ${residuo.categoria}`} 
                value={residuo.quantidade}
                isAvarage={false}
              />
            ))}
          </C.ContainerGrid>

          <C.NivoGraphDiv>
            <C.h1>Gráfico Geral em kg:</C.h1>
            <PieChart data={ArrayToNivo}/>
          </C.NivoGraphDiv>
          
          <C.h4>As Médias Gerais:</C.h4>
          <C.ContainerGrid>
            {generalStats.totalResiduosPorCategoria.map((residuo) => (
              <StatsItem 
                key={residuo.categoria}
                title={`Resíduo ${residuo.categoria}`} 
                value={(residuo.quantidade/ArraysLength.trashCollections).toFixed(1)}
                isAvarage={true}
              />
            ))}
          </C.ContainerGrid>
        </C.Main>
      }
    </ContainerLayout>
  )
  } else {
    return (
      <ContainerLayout>
        <TitlePage 
          title="Estatísticas gerais" 
          orgao={user.orgao}
          text="Bem-vindo, comece os seus primeiros passos!"
        />

        {isLoading ? (
          <>
           <Loading/>
          </>
        ): (
          <>
            <main>
              <C.ManualDiv>
                <h1>Dicas e Introdução:</h1>
                <p>
                  EcoAdministração é um sistema de gerenciamento de resíduos sólidos.
                  Foi feito para você ter o controle e estatísticas de suas coletas com poucos cliques.
                  Na questão de categorização dos resíduos sólidos, tentamos cobrir o máximo possível em relação à origem e ao tipo,
                  seguindo as ordens estabelecidas da CONAMA.
                  Mas, você pode adicionar seus próprios nomes em relação a categoria do resíduo.
                  Além do mais, não deixe de compartilhar informações úteis com seus colegas através do nosso sistema
                  de anotações. Feito isso, após adicionar sua primeira coleta, você pode voltar para essa página e 
                  checar suas estatísticas gerais!
                </p>
              </C.ManualDiv>

              <C.WelcomeDiv>
                <C.WelcomeItem>
                  <h1>Adicione sua primeira coleta:</h1>
                  <Link to="/coletas/inserir">Adicionar Coleta</Link>
                </C.WelcomeItem>
                <C.WelcomeItem>
                  <h1>Adicione sua primeira anotação:</h1>
                  <Link to="/notas/inserir">Adicionar Anotação</Link>
                </C.WelcomeItem>
              </C.WelcomeDiv>
            </main>
          </>
        )} 
        
      </ContainerLayout>
    )
  }
}

export default Painel