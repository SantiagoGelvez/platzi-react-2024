import React from 'react'
import './TodoSearch.css'

function TodoSearch({searchValue, setsearchValue}) {
    return (
        <div className="input-container">
            <input
                placeholder="Ejemplo: Cortar cebolla"
                onChange={(event) => setsearchValue(event.target.value)}
                value={searchValue}
            />
        </div>
    )
}

export { TodoSearch }
