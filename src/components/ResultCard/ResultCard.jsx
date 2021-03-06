import React from 'react';
import './ResultCard.css';
const ResultCard = ({suggestedName}) =>{
    const URL = "https://www.namecheap.com/domains/registration/results/?domain=";
    return(
        <a className = "card-link" href = {`${URL}${suggestedName}`}>
        <div className = "result-name-card">
            <p className="result-name">{suggestedName}</p>
        </div>
        </a>

    )
}
export default ResultCard;