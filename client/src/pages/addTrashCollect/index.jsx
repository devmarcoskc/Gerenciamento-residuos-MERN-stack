import React, { useState } from 'react'
import * as C from "./styles.js";
import ContainerLayout from '../../components/Container';
import TitlePage from '../../components/TitlePage';
import { useForm, useFieldArray } from 'react-hook-form';
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import { createTrashCollection } from '../../utils/apiCalls.js';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const createTrashCollectSchema = z.object({
  nomeDoBairro: z.string()
    .nonempty("Campo obrigatório")
    .min(2, "Deve conter no mínimo 2 caracteres")
    .max(40, "Deve conter no máximo 40 caracteres")
    .regex(new RegExp(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/), "Nome inválido"),
  nomeDaRota: z.string()
    .nonempty("Campo obrigatório")
    .min(4, "Deve conter no mínimo 6 caracteres")
    .max(100, "Deve conter no máximo 100 caracteres")
    .regex(new RegExp(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/), "Nome inválido"),
  data: z.string()
    .nonempty("Campo obrigatório")
    .transform((data) => {
      return data.replace(/-/g, "/")
    }),
  coletaSeletiva: z.string()
  .nonempty("Campo obrigatório"),
  residuoPorCategoria: z.array(z.object({
    categoria: z.string()
      .nonempty("Campo de categoria é obrigatório")
      .toLowerCase(),
    quantidade: z.string()
    .min(1, "No mínimo 0.1 no valor da quantidade")
    .regex(new RegExp(/^[\d,.?!]+$/), "Digite um formato de quantidade válido!")
    .transform((quantidade) => parseFloat(quantidade)),
  }))
});

const AddTrashCollect = () => {
  const [isInputToSelect, setIsInputToSelect] = useState(true);

  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const navigate = useNavigate();

  const {register, handleSubmit, reset, formState: {errors}, control, setValue} = useForm({
    resolver: zodResolver(createTrashCollectSchema),
  });

  const {fields, append, remove} = useFieldArray({
    control,
    name: "residuoPorCategoria",
  });

  const addNewTrashCollect = () => {
    append({categoria: '', quantidade: 0})
  }

  const handleResetForm = () => {
    remove();
    reset();
  }

  const handleCreateTrashCollect = async (data) => {
    const totalResiduos = data.residuoPorCategoria.reduce((total, residuo) => {
      return total + residuo.quantidade
    }, 0);

    data.coletaSeletiva === "Sim" ? data.coletaSeletiva = true : data.coletaSeletiva = false;
    data.totalResiduos = totalResiduos;
    data.orgaoId = user._id;
    
    if(data.residuoPorCategoria.length === undefined) {
      return alert("Adicione os resíduos por categoria!")
    } 

    try {
      const response = await createTrashCollection(data, token);
      navigate("/coletas");
    } catch(error) {
      alert(error.message);
    }

  }

  return (
    <ContainerLayout>
        <TitlePage 
            title="Adicione uma coleta" 
            text="Preencha os requisitos abaixo para adicionar uma coleta"
        />
        <C.Form onSubmit={handleSubmit(handleCreateTrashCollect)}>
          <C.H2>Inclua sua coleta</C.H2>

          <C.Container>
            <C.LabelAndInputDiv>
              <label>Nome do Bairro:</label>
              <input
                type="text"
                placeholder="Digite o nome do bairro"
                {...register('nomeDoBairro')}
              />
              {errors.nomeDoBairro && <C.SpanError>{errors.nomeDoBairro.message}</C.SpanError>}
            </C.LabelAndInputDiv>

            <C.LabelAndInputDiv>
              <label>Nome da Rota:</label>
              <input
                type="text"
                placeholder="Digite o nome do bairro"
                {...register('nomeDaRota')}
              />
              {errors.nomeDaRota && <C.SpanError>{errors.nomeDaRota.message}</C.SpanError>}
            </C.LabelAndInputDiv>
          </C.Container>

          <C.Container>
            <C.LabelAndInputDiv>
              <label>Data da coleta:</label>
              <C.shortWidthInput
                  type="date"
                  placeholder="Selecione a data"
                  {...register('data')}
              />
              {errors.data && <C.SpanError>{errors.data.message}</C.SpanError>}
            </C.LabelAndInputDiv>

            <C.LabelAndInputDiv>
              <label>Coleta seletiva:</label>
              <select {...register('coletaSeletiva')}>
                <option>Não</option>
                <option>Sim</option>
              </select>
              {errors.coletaSeletiva && <C.SpanError>{errors.coletaSeletiva.message}</C.SpanError>}
            </C.LabelAndInputDiv>
          </C.Container>
          
          <C.H4>
            Residuos por categoria:
            <button type="button" onClick={addNewTrashCollect}>Adicionar</button>
          </C.H4>

          {fields.length > 0 && isInputToSelect &&
            <C.OptionsDiv>
              Clique para
              <span onClick={() => setIsInputToSelect(false)}>digitar as categorias</span>
            </C.OptionsDiv>
          }

          {fields.map((field, index) => {
            return (
            <C.LabelAndInputDiv key={field.id}>
              {isInputToSelect ? (
                <C.CategoryArea>
                  <label>Selecione a categoria:</label>
                  <select
                    {...register(`residuoPorCategoria.${index}.categoria`)}
                  >
                    <option value="orgânico">orgânico</option>
                    <option value="reciclável">reciclável</option>
                    <option value="metálico">metálico</option>
                    <option value="plástico/isopor">plástico/isopor</option>
                    <option value="eletrônico">eletrônico</option>
                    <option value="hospitalar">hospitalar</option>
                    <option value="vidro">vidro</option>
                    <option value="madeira">madeira</option>
                    <option value="papel/papelão">papel/papelão</option>
                    <option value="misturados">misturados ou não recicláveis</option>
                    <option value="contaminados/perigosos">contaminados ou perigosos</option> 
                  </select>

                  <label>Quantidade em kg:</label>
                  <C.NumberInput
                    type="text"
                    placeholder="0"
                    {...register(`residuoPorCategoria.${index}.quantidade`)}
                  />
                </C.CategoryArea>
              ): (
                <C.FlexDivRow>
                  <label>Digite a categoria:</label>
                  <input
                    type="text"
                    placeholder="Digite o nome do bairro"
                    {...register(`residuoPorCategoria.${index}.categoria`)}
                  />
                  
                  <label>Quantidade em kg:</label>
                  <C.NumberInput
                    type="number"
                    placeholder="0"
                    {...register(`residuoPorCategoria.${index}.quantidade`)}
                  />
                </C.FlexDivRow>
              )}
              {errors.residuoPorCategoria?.[index]?.categoria && <C.SpanError>{errors.residuoPorCategoria?.[index]?.categoria.message}</C.SpanError>}
              {errors.residuoPorCategoria?.[index]?.quantidade && <C.SpanError>{errors.residuoPorCategoria?.[index]?.quantidade.message}</C.SpanError>}
            </C.LabelAndInputDiv>
            )
          })}

          {!isInputToSelect &&
            <C.SpanObersvation>Atenção, cheque os nomes para ver se estão corretos</C.SpanObersvation>
          }
          <C.ButtonsDiv>
            <C.Button type="submit">Enviar</C.Button>
            <C.Button type="button" onClick={handleResetForm}>Resetar</C.Button>
          </C.ButtonsDiv>
        </C.Form>
    </ContainerLayout>
  )
}

export default AddTrashCollect