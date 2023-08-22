import React, { useEffect, useState } from 'react'
import * as C from "./styles.js";
import ContainerLayout from '../../components/Container/';
import TitlePage from "../../components/TitlePage/";
import { useSelector } from 'react-redux';
import { getNotes } from '../../utils/apiCalls.js';
import NoteItem from '../../components/NoteItem';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading/';
import { setNotes } from '../../redux/index.js';
import { useDispatch } from 'react-redux';
import FiltersInputs from '../../components/FiltersInputs';

const Notes = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState({
    filterBydate: "",
    filterByName: "",
  });

  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const notes = useSelector((state) => state.notes);

  const dispatch = useDispatch();

  const getUserNotes = async () => {
    try {
        setIsLoading(true);
        const response = await getNotes(user._id, token);

        const ChangedResponse = response.map((note) => {
          note.createdAt = note.createdAt.replace(/-/gi, "/");
          return note;
        });

        dispatch(setNotes({notes:ChangedResponse}));
        setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      alert(error.message);  
    }
  }

  useEffect(() => {
    getUserNotes();
  }, []);

  const SearchByName= search.filterByName.toLowerCase();

  const NotesList = notes.filter((notes) => {
    return notes.createdAt.includes(search.filterBydate);
  });
  const FilteredNotes = NotesList.filter((note) => {
    return note.nome.toLowerCase().includes(SearchByName);
  });

  return (
    <ContainerLayout>
        <TitlePage 
            title="Todas as suas anotações" 
            text="Você pode criar, editar e excluir suas anotações."
        />
        
        {isLoading &&
          <Loading/>
        }

        {notes.length > 0 && !isLoading &&
          <>
          <FiltersInputs
            search={search}
            setSearch={setSearch}
            isAddress={false}
            label="Filtrar por nome:"
          />
          <C.NotesDiv>
            {search.filterBydate.length > 0 || search.filterByName.length > 0 ? (
              <>
                {FilteredNotes.map((note) => (
                  <NoteItem
                    key={note._id}
                    note={note}
                  />
                ))}
              </>
            ): (
              <>
                {notes.map((note) => (
                    <NoteItem
                        key={note._id}
                        note={note}
                    />
                ))}
              </>
            )}
          </C.NotesDiv>
          </>
        }

        {notes.length === 0 &&  !isLoading &&
          <C.WarningNotesDiv>
            <h2>Você ainda não possui anotações!</h2>
            <C.AnchorDiv>
              Faça sua primeira <Link to="/notas/inserir">anotação aqui</Link>
            </C.AnchorDiv>
          </C.WarningNotesDiv>
        }
    </ContainerLayout>
  )
}

export default Notes