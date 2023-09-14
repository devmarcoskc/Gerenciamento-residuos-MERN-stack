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
import { FormatDate, FormatDateToShow } from '../../utils/formatDate.js';
import { FormatWord } from '../../utils/formatWord.js';
import {AiOutlineSearch} from "react-icons/ai";

const Painel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({
    filterByAddress: "",
    filterByMonth: "",
    filterByYear: ""
  })
  const [generalStats, setGeneralStats] = useState(null);
  const [numbersOfCollections, setNumbersOfCollections] = useState(0);

  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);

  const getStats = async () => {
    try {
      setIsLoading(true);
      setFilters({filterByAddress: "", filterByMonth: "", filterByYear: ""});

      const response = await getGeneralStats(user._id, token);
     
      if(response.generalStats[0]) {
        setGeneralStats(response.generalStats[0]);
        setNumbersOfCollections(response.trashCollections.length);
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

  const HandleGetStatsByFilters = async () => {
    if(filters.filterByAddress === "" && filters.filterByMonth === "" && filters.filterByYear === "") {
      return alert("Preencha os campos antes de filtrar!");
    }

    const Date = FormatDate(filters.filterByMonth, filters.filterByYear);
    
    try {
      const response = await getStatsByAddress(user._id, filters.filterByAddress.toLocaleLowerCase(), Date, token);
      if(response.msg) return alert(response.msg);

      setGeneralStats(response);
      setNumbersOfCollections(response.coletas);
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
          {generalStats.filtros &&
            <C.NameAddress>
              {generalStats.filtros.bairro !== "" && generalStats.filtros.data === "" &&
                `Bairro ${FormatWord(generalStats.filtros.bairro)}` 
              }
              {generalStats.filtros.bairro !== ""  && generalStats.filtros.data !== "" && 
                `Bairro ${FormatWord(generalStats.filtros.bairro)}, mês ${FormatDateToShow(generalStats.filtros.data).month} do ano ${FormatDateToShow(generalStats.filtros.data).year}`
              }
              {generalStats.filtros.bairro === "" && generalStats.filtros.data !== "" &&
                `Resultados do mês ${FormatDateToShow(generalStats.filtros.data).month} do ano ${FormatDateToShow(generalStats.filtros.data).year}`
              }
            </C.NameAddress>
          }

          <C.MainInfosArea>
            <C.GeneralStatsArea>
              <h1>Total Resíduos:</h1>
              <span>{generalStats.totalResiduos}kg</span>
            </C.GeneralStatsArea>
            <C.GeneralStatsArea>
              <h1>Coletas Feitas:</h1>
              <span>{generalStats.coletas ? `${generalStats.coletas}` : `${numbersOfCollections}`}</span>
            </C.GeneralStatsArea>

            {!generalStats.filtros ? (
              <C.FiltersArea>
                <C.FilterByAdressArea>
                  <C.Label htmlFor='address'>Bairro:</C.Label>
                  <C.InputAndSearchButtonArea>
                    <input 
                      name='address'
                      type="text"
                      placeholder="Digite o bairro"
                      value={filters.filterByAddress}
                      onChange={(e) => setFilters({...filters, filterByAddress: e.target.value})}
                    />
                  </C.InputAndSearchButtonArea>
                </C.FilterByAdressArea>

                <C.FilterByDateArea>
                  <C.Label htmlFor='month'>Mês:</C.Label>
                  <C.Select 
                    name='month'
                    value={filters.filterByMonth} 
                    onChange={(e) => setFilters({...filters, filterByMonth: (e.target.value)})}
                  >
                    <option value="">Selecione</option>
                    <option value="janeiro">Janeiro</option>
                    <option value="fevereiro">Fevereiro</option>
                    <option value="março">Março</option>
                    <option value="abril">Abril</option>
                    <option value="maio">Maio</option>
                    <option value="junho">Junho</option>
                    <option value="julho">Julho</option>
                    <option value="agosto">Agosto</option>
                    <option value="setembro">Setembro</option>
                    <option value="outubro">Outubro</option>
                    <option value="novembro">Novembro</option>
                    <option value="dezembro">Dezembro</option>
                  </C.Select>
                </C.FilterByDateArea>

                <C.FilterByDateArea>
                  <C.Label htmlFor='year'>Ano:</C.Label>
                  <input 
                    name='year'
                    type="text"
                    placeholder="Digite"
                    value={filters.filterByYear}
                    onChange={(e) => setFilters({...filters, filterByYear: e.target.value})}
                  />
                </C.FilterByDateArea>

                <C.FilterButton type="button" onClick={HandleGetStatsByFilters}>
                  Filtrar
                  <AiOutlineSearch/>
                </C.FilterButton>
              </C.FiltersArea>
            ): (
              <C.GoBackButton type="button" onClick={getStats}>
                Voltar as Estatísticas Gerais
              </C.GoBackButton>
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
                value={(residuo.quantidade/numbersOfCollections).toFixed(1)}
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