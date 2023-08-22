import React, {useState, useEffect} from 'react';
import ContainerLayout from "../../components/Container";
import TitlePage from "../../components/TitlePage";
import * as C from "./styles.js";
import TrashCollectItem from '../../components/TrashCollectItem';
import { getTrashCollections } from '../../utils/apiCalls';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loading from "../../components/Loading";
import FiltersInputs from '../../components/FiltersInputs';

const TrashCollect = () => {
  const [trashCollections, setTrashCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState({
    filterBydate: "",
    filterByAddress: "",
  });

  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);

  const getCollections = async () => {
    try {
      setIsLoading(true);
      const response = await getTrashCollections(user._id, token);
      setTrashCollections(response);
      setIsLoading(false);
    } catch(error) {
      setIsLoading(true);
      alert(error.message);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getCollections();
  }, []);  

  const lowerSearchByAddres = search.filterByAddress.toLowerCase();

  const TrashCollectionList = trashCollections.filter((trashCollect) => {
    return trashCollect.data.includes(search.filterBydate);
  });
  const filteredTrashCollection = TrashCollectionList.filter((trash) => {
    return trash.nomeDoBairro.toLowerCase().includes(lowerSearchByAddres);
  });

  return (
    <ContainerLayout>
      <TitlePage 
        title="Todas as coletas de resíduos"
        text="Aqui você pode ter todas as informações de suas coletas"
      />

      {isLoading && 
        <Loading/>
      }

      {trashCollections.length > 0 && !isLoading && 
        <>
        <FiltersInputs
          search={search}
          setSearch={setSearch}
          isAddress={true}
        />
          <C.GridArea>
            {search.filterBydate.length > 0 || search.filterByAddress.length > 0 ? (
              <>
                {filteredTrashCollection.map((trashCollect) => (
                  <TrashCollectItem  
                    key={trashCollect._id}
                    trashCollect={trashCollect}
                  />
                ))}
              </>
            ):(
              <>
                {trashCollections.map((trashCollect) => (
                  <TrashCollectItem  
                    key={trashCollect._id}
                    trashCollect={trashCollect}
                  />
                ))}
              </>
            )}
          </C.GridArea>
        </>
      } 

      {trashCollections.length === 0 && !isLoading && 
        <>
          <C.WarningNotesDiv>
            <h2>Você não possui nenhuma coleta</h2>
            <C.AnchorDiv>
              Faça seu primeiro upload de <Link to="/coletas/inserir">coleta aqui</Link>
            </C.AnchorDiv>
          </C.WarningNotesDiv>
        </>
      }
      
    </ContainerLayout>
  )
}

export default TrashCollect;