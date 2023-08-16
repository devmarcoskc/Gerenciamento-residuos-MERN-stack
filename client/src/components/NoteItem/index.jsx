import React from 'react'
import * as C from "./styles.js";
import {BsClipboard2Fill} from "react-icons/bs"
import {AiFillEdit} from "react-icons/ai";
import {AiTwotoneDelete} from "react-icons/ai";
import { Link } from 'react-router-dom';

const NoteItem = ({note}) => {

  const FormatDate = (date) => {
     return date.slice(0,10);
  }

  return (
    <C.NoteItem>
        <BsClipboard2Fill/>
        <C.TitleNote>
            Data: {FormatDate(note.createdAt)}
        </C.TitleNote>
        <C.TitleNote>
            Nome: {note.nome}
        </C.TitleNote>
        <C.Description>
            {note.nota}
        </C.Description>
        <Link to={`/anotaçoes/${note._id}`}>
            <AiFillEdit/>
        </Link>
        <C.IconDiv>
            <AiTwotoneDelete/>
        </C.IconDiv>
    </C.NoteItem>
  )
}

export default NoteItem;