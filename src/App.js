import React, { Component } from 'react';
import LeftBlock from './Blocks/LeftBlocks/LeftBlocks';
import RightBlock from './Blocks/RightBlock/RightBlock'
import './App.css';
import SecondPage from './Blocks/SecondPage/SecondPage'
import Blackout from './Components/Blackout/Blackout'

class App extends Component {

    state = {
        onClose: 'Close',
        onCloseBoll: true
    }

    SecondPageHandler = () => {
        this.setState( {
            onClose: 'Open',
            onCloseBool: false
        } )
    }
    ClickPageHandler = () => {
        this.setState( {
            onClose: 'Close',
            onCloseBool: true
        } )
    }

    render () {

        return (
            <div className="Container">
                {
                    !this.state.onCloseBoll ? <Blackout onClick={ this.ClickPageHandler } /> : null
                }

                <LeftBlock/>

                <RightBlock
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
