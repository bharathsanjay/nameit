import React from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer'
import './App.css'

const name  = require('@rstacruz/startup-name-generator');

class App extends React.Component{
    state = {
        headerExpanded : true,
        suggestedNames : []
    }
    handleInputChange = (inputText) =>{
        this.setState({headerExpanded : inputText.length > 0 ? false : true , suggestedNames : inputText ? name(inputText) : []});


    }

    render(){
        return(
            <div>
                <Header headerExpanded = {this.state.headerExpanded}/>
                <SearchBox onInputChange = {this.handleInputChange}/>
                <ResultsContainer suggestedNames = {this.state.suggestedNames}/>
            </div>
        )
    }
}
export default App;