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

const Notes = () => {
  const [isLoading, setIsLoading] = useState(false);

  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const notes = useSelector((state) => state.notes);

  const dispatch = useDispatch();

  const getUserNotes = async () => {
    try {
        setIsLoading(true);
        const response = await getNotes(user._id, token);
        dispatch(setNotes({notes:response}));
        setIsLoading(false);
    } catch (error) {
        alert(error.message);
    }
  }

  useEffect(() => {
    getUserNotes();
  }, []);

  return (
    <ContainerLayout>
        <TitlePage 
            title="Todas as suas anotações" 
            text="Você pode criar, editar e excluir suas anotações."
        />
        
        {isLoading &&
          <Loading/>
        }

        {notes ? (
          <C.NotesDiv>
            {notes.map((note) => (
                <NoteItem
                    key={note._id}
                    note={note}
                />
            ))}
          </C.NotesDiv>
        ): (
          <C.WarningNotesDiv>
            <h2>Você ainda não possui anotações!</h2>
            <C.AnchorDiv>
              Faça sua primeira <Link to="/notas/inserir">anotação aqui</Link>
            </C.AnchorDiv>
          </C.WarningNotesDiv>
        )}
    </ContainerLayout>
  )
}

export default Notes