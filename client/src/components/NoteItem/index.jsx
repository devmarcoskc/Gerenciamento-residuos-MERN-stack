import React, {memo} from 'react'
import * as C from "./styles.js";
import {BsClipboard2Fill} from "react-icons/bs"
import {AiFillEdit} from "react-icons/ai";
import {AiTwotoneDelete} from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { deleteNote } from '../../utils/apiCalls.js';
import { useDispatch } from 'react-redux';
import { setNotes } from '../../redux/index.js';

const NoteItem = ({note}) => {
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleDeleteNote = async () => {
    const data = {
        orgaoId: user._id,
    }

    try {
        const response = await deleteNote(note._id, data, token);
        dispatch(setNotes({notes: response}));
    } catch(error) {
        alert(error.message);
    }
  }

  return (
    <C.NoteItem>
        <BsClipboard2Fill/>
        <C.TitleNote>
            Data: {note.createdAt}
        </C.TitleNote>
        <C.TitleNote>
            Nome: {note.nome}
        </C.TitleNote>
        <C.Description>
            {note.nota}
        </C.Description>
        <Link to={`/notas/${note._id}`}>
            <AiFillEdit/>
        </Link>
        <C.IconDiv>
            <AiTwotoneDelete onClick={handleDeleteNote}/>
        </C.IconDiv>
    </C.NoteItem>
  )
}

export default memo(NoteItem);