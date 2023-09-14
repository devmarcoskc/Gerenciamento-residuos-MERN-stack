import React from 'react';
import * as C from "./styles.js";

const FiltersInputs = ({label, search, setSearch, isAddress}) => {
  return (
    <C.FilterArea>
        <C.LabelAndInputDiv>
            <label htmlFor='filter-date'>Filtrar por data:</label>
            <input
                name='filter-date'
                value={search.filterBydate}
                type="text"
                placeholder="Exemplo: 18/07/2023"
                onChange={(e) => setSearch({...search, filterBydate: e.target.value})}
            />
        </C.LabelAndInputDiv>

        <C.LabelAndInputDiv>
            {isAddress ? (
                <>
                    <label htmlFor='filter-address'>Filtrar por bairro:</label>
                    <input
                        name='filter-address'
                        value={search.filterByAddress}
                        type="text"
                        placeholder="Exemplo: 'Jardim'"
                        onChange={(e) => setSearch({...search, filterByAddress: e.target.value})}
                    />
                </>
            ) : (
                <>
                    <label htmlFor='filter-name'>{label}</label>
                    <input
                        name='filter-name'
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