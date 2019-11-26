import React, { Component } from 'react';
import LeftBlock from './Blocks/LeftBlocks/LeftBlocks';
import RightBlock from './Blocks/RightBlock/RightBlock'
import './App.css';
import SecondPage from './Blocks/SecondPage/SecondPage'

class App extends Component {

    state = {
        onClose: '',
    }

    SecondPageHandler = () => {
        this.setState( {
            onClose: 'Open',
        } )
    }
    ClickPageHandler = () => {
        this.setState( {
            onClose: 'Close',
        } )
    }

    render () {

        return (
            <div className="Container">
                <LeftBlock
                    ClickPageHandler={ this.ClickPageHandler }
                />
                
                <RightBlock
                    ClickPageHandler={ this.ClickPageHandler }
                    SecondPageHandler={ this.SecondPageHandler }
                />
                <SecondPage
                    onClose={ this.state.onClose }
                />
            </div>
        )
    }
}

export default App
