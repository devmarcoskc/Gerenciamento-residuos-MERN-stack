import React, { useEffect, useState } from 'react'
import * as C from "./styles.js";
import ContainerLayout from '../../components/Container/';
import TitlePage from "../../components/TitlePage/";
import { useSelector } from 'react-redux';
import { getNotes } from '../../utils/apiCalls.js';
import NoteItem from '../../components/NoteItem';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading/';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);

  const getUserNotes = async () => {
    try {
        setIsLoading(true);
        const response = await getNotes(user._id, token);
        setNotes(response);
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

        {notes.length > 0 ? (
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
              Faça sua primeira <Link to="/anotaçoes/inserir">anotação aqui</Link>
            </C.AnchorDiv>
          </C.WarningNotesDiv>
        )}
    </ContainerLayout>
  )
}

export default Notes