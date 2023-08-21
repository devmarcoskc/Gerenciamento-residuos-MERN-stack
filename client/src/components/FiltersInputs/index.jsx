import React from 'react';
import * as C from "./styles.js";

const FiltersInputs = ({label, search, setSearch, isAddress}) => {
  return (
    <C.FilterArea>
        <C.LabelAndInputDiv>
            <label>Filtrar por data:</label>
            <input
                value={search.filterBydate}
                type="text"
                placeholder="Exemplo: 2023/07/18"
                onChange={(e) => setSearch({...search, filterBydate: e.target.value})}
            />
        </C.LabelAndInputDiv>

        <C.LabelAndInputDiv>
            {isAddress ? (
                <>
                    <label>Filtrar por bairro:</label>
                    <input
                    value={search.filterByAddress}
                    type="text"
                    placeholder="Exemplo: 'Jardim'"
                    onChange={(e) => setSearch({...search, filterByAddress: e.target.value})}
                    />
                </>
            ) : (
                <>
                    <label>{label}</label>
                    <input
                        value={search.filterByName}
                        type="text"
                        placeholder="Exemplo: 'Marcos'"
                        onChange={(e) => setSearch({...search, filterByName: e.target.value})}
                    />
                </>
            )}
            
        </C.LabelAndInputDiv>
     </C.FilterArea>
  )
}

export default FiltersInputs