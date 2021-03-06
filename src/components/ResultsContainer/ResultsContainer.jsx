import React from 'react';
import ResultCard from '../ResultCard/ResultCard';
import './ResultsContainer.css';
const ResultsContainer = ({suggestedNames}) =>{
    const namesList = suggestedNames.map((suggestedName => {
        return <ResultCard key = {suggestedName} suggestedName = {suggestedName}/>
     }))
        return(
            <div className = "results-container">
                <p>{namesList}</p>
            </div>
        )
};

export default ResultsContainer;