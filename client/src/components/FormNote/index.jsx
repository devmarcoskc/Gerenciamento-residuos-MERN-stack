import React from 'react'
import * as C from "./styles.js";
import { useForm } from 'react-hook-form';
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import { createNote, editNote } from '../../utils/apiCalls.js';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const createNoteSchema = z.object({
    nome: z.string()
      .nonempty("Campo obrigatório")
      .min(2, "Deve conter no mínimo 2 caracteres")
      .max(40, "Deve conter no máximo 40 caracteres")
      .regex(new RegExp(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/), "Nome inválido"),
    nota: z.string()
      .nonempty("Campo obrigatório")
      .min(6, "Deve conter no mínimo 6 caracteres")
      .max(100, "Deve conter no máximo 100 caracteres")
});

const FormNote = ({noteNome, setNoteNome, noteNota, setNoteNota, isEditing, id}) => {
  const navigate = useNavigate();

  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);

  const {register, handleSubmit, formState: {errors}, setValue} = useForm({
    resolver: zodResolver(createNoteSchema), defaultValues: {
      nome: noteNome,
      nota: noteNota,
    }
  });

  const handleCreateNote = async (data) => {
    if(isEditing) {
      try {
        const response = await editNote(id, data, token);
        navigate("/notas");
      } catch(error) {
        alert(error.message);
      }
    } else {
      data.orgaoId = user._id;
      try {
        const response = await createNote(data, token);
        navigate("/notas");
      } catch(error) {
        alert(error.message);
      }
    }
  }

  return (
    <C.Form onSubmit={handleSubmit(handleCreateNote)}>
        {!isEditing ? (
          <h3>Deixe um recado para seus colegas</h3>
        ): (
          <h3>Edite seu recado para seus colegas</h3>
        )}

        <label htmlFor='nome'>Seu nome:</label>
        <input 
            value={noteNome}
            type="text" 
            placeholder="Digite seu nome"
            {...register("nome", {
              onChange: (e) => setNoteNome(e.target.value),
              value: noteNome,
            })}
        />
        {errors.nome && <span>{errors.nome.message}</span>}

        <label style={{marginTop: "10px"}} htmlFor='nota'>Sua Mensagem:</label>
        <textarea
            value={noteNota}
            placeholder='Digite aqui a sua mensagem'
            {...register("nota", {
              onChange: (e) => setNoteNota(e.target.value),
              value:noteNota
            })}
        />
        {errors.nota && <span>{errors.nota.message}</span>}

        <button type="submit">
            {isEditing ? (
              <>
                Editar
              </>
            ): (
              <>
                Adicionar
              </>
            )}
        </button>
    </C.Form>
  )
}

export default FormNote