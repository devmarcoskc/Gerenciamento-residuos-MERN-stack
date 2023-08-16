import React, { useEffect, useState } from 'react'
import ContainerLayout from '../../components/Container';
import TitlePage from '../../components/TitlePage';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getNote } from '../../utils/apiCalls';
import FormNote from '../../components/FormNote';

const EditNote = () => {
  const [noteNome, setNoteNome] = useState("");
  const [noteNota, setNoteNota] = useState("");

  const {id} = useParams();
  const token = useSelector((state) => state.token);

  const getSpecificNote = async () => {
    try {
        const response = await getNote(id, token);
        setNoteNome(response.nome);
        setNoteNota(response.nota);
    } catch(error) {
        alert(error.message);
    }
  }
  
  useEffect(() => {
    getSpecificNote();
  }, []);

  return (
    <ContainerLayout>
        <TitlePage title="Edite sua anotação" text="Reescreva o que precisa"/>
        <FormNote
          id={id} 
          noteNome={noteNome} 
          setNoteNome={setNoteNome} 
          noteNota={noteNota} 
          setNoteNota={setNoteNota}
          isEditing={true}
        />
    </ContainerLayout>
  )
}

export default EditNote;