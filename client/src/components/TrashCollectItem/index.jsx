import React, {memo} from 'react'
import * as C from "./styles.js";
import {ImStatsBars} from "react-icons/im";

const TrashCollectItem = ({trashCollect}) => {
  return (
    <C.ItemContainer>
        <ImStatsBars/>

        <C.TitleAndText>
         <h3>Data da Coleta:</h3>
         <span>{trashCollect.data}</span>
        </C.TitleAndText>

        <C.TitleAndText>
         <h3>Nome da Rota:</h3>
         <span>{trashCollect.nomeDaRota}</span>
        </C.TitleAndText>

        <C.TitleAndText>
         <h3>Nome do Bairro:</h3>
         <span>{trashCollect.nomeDoBairro}</span>
        </C.TitleAndText>

        <C.TitleAndText>
         <h3>Total de Resíduos:</h3>
         <span>{trashCollect.totalResiduos}kg</span>
        </C.TitleAndText>
        
        <C.TitleAndText>
         <h3>Coleta Seletiva:</h3>
         {trashCollect.coletaSeletiva === true ? (
            <span>Sim</span>
          ):(
            <span>Não</span>
         )}
        </C.TitleAndText>

        <C.h2>Resíduos por Categoria:</C.h2>
        {trashCollect.residuoPorCategoria.map((trash) => (
          <C.CollectItem key={trash._id}>
              <C.TitleAndTextItem>
                <h3>Categoria:</h3>
                <span>{trash.categoria}</span>
              </C.TitleAndTextItem>
              <C.TitleAndTextItem>
                <h3>Quantidade:</h3>
                <span>{trash.quantidade}kg</span>
              </C.TitleAndTextItem>
          </C.CollectItem>
        ))}
    </C.ItemContainer>
  )
}

export default memo(TrashCollectItem);