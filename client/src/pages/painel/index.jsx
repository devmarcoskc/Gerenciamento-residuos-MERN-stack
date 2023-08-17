import React, { useEffect, useState } from 'react'
import * as C from "./styles.js";
import { useSelector } from 'react-redux';
import TitlePage from '../../components/TitlePage';
import { getGeneralStats } from '../../utils/apiCalls.js';
import ContainerLayout from "../../components/Container";
import StatsItem from '../../components/StatsItem';
import Loading from "../../components/Loading";
import { ResponsivePie } from '@nivo/pie';
import { switchColor } from '../../utils/switchColor.js';
import { Link } from 'react-router-dom';

const Painel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [generalStats, setGeneralStats] = useState(null);
  const [ArraysLenght, setArraysLenghts] = useState({
    notes: 0,
    trashCollections:0
  });

  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);

  const getStats = async () => {
    setIsLoading(true);
    try {
      const response = await getGeneralStats(user._id, token);
     
      if(response.generalStats[0]) {
        setGeneralStats(response.generalStats[0]);
        setArraysLenghts({
          notes: response.notes.length,
          trashCollections: response.trashCollections.length,
        })
      }
    } catch(error) {
      alert(error.message);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getStats();
  }, []);

if(generalStats !== null) {
    const ArrayToNivo = generalStats.totalResiduosPorCategoria.map((residuo, index) => {
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
        text="Bem-vindo, veja todas as suas estastísticas aqui!"
      />

      {isLoading && 
        <Loading/>
      }
        <C.Main>

          <C.ContainerGrid>
            <StatsItem title="Total Resíduos" value={generalStats.totalResiduos}/>
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
            <C.h1>Gráfico Geral:</C.h1>
            <ResponsivePie
              data={ArrayToNivo}
              colors={(bar) => switchColor(bar.data.id)}
              margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              activeOuterRadiusOffset={8}
              borderWidth={2}
              borderColor={{
                  from: 'color',
                  modifiers: [
                      [
                          'darker',
                          0.2
                      ]
                  ]
              }}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#ff4500"
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: 'color' }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{
                  from: 'color',
                  modifiers: [
                      [
                          'darker',
                          2
                      ]
                  ]
              }}
              legends={[
                  {
                      anchor: 'bottom',
                      direction: 'row',
                      justify: false,
                      translateX: 0,
                      translateY: 56,
                      itemsSpacing: 0,
                      itemWidth: 100,
                      itemHeight: 18,
                      itemTextColor: '#999',
                      itemDirection: 'left-to-right',
                      itemOpacity: 1,
                      symbolSize: 18,
                      symbolShape: 'circle',
                      effects: [
                          {
                              on: 'hover',
                              style: {
                                  itemTextColor: '#000'
                              }
                          }
                      ]
                  }
              ]}
            />
          </C.NivoGraphDiv>
          
          <C.h4>As Médias Gerais:</C.h4>
          <C.ContainerGrid>
            {generalStats.totalResiduosPorCategoria.map((residuo) => (
              <StatsItem 
                key={residuo.categoria}
                title={`Média ${residuo.categoria}`} 
                value={(residuo.quantidade/ArraysLenght.trashCollections).toFixed(1)}
                isAvarage={true}
              />
            ))}
          </C.ContainerGrid>
        </C.Main>
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