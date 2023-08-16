import React, { useState } from 'react';
import * as C from "./styles.js";
import ContainerLayout from '../../components/Container';
import TitlePage from '../../components/TitlePage';
import FormNote from '../../components/FormNote';

const AddNote = () => {
  const [noteNome, setNoteNome] = useState("");
  const [noteNota, setNoteNota] = useState("");

  return (
    <ContainerLayout>
        <TitlePage title="Adicione uma anotação" text="Preencha os requisitos abaixo"/>
        <FormNote 
          noteNome={noteNome} 
          setNoteNome={setNoteNome} 
          noteNota={noteNota} 
          setNoteNota={setNoteNota}
          isEditing={false}
        />
    </ContainerLayout>
  )
}

export default AddNote