import React from 'react';
import './SearchBox.css'

const SearchBox = ({onInputChange}) =>{
    return(
        <div className = "search-container">
            <input onChange = {(e) => onInputChange(e.target.value)} placeholder = "type keywords" className = "search-input"></input>
            

        </div>
    )
}
export default SearchBox;