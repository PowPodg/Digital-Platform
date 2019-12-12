import React, { Component } from 'react';
import LeftBlock from './Blocks/LeftBlocks/LeftBlocks';
import RightBlock from './Blocks/RightBlock/RightBlock'
import './App.css';
import SecondPage from './Blocks/SecondPage/SecondPage'
import Blackout from './Components/Blackout/Blackout'

class App extends Component {

    state = {
        onClose: 'Close',
        onCloseBoll: true,
        background: '',
        priority:'',
        executor: ''
    }

    SecondPageHandler = (paramSecPage) => {
        this.setState( {
            onClose: 'Open',
            onCloseBool: false,
            background: paramSecPage.background,
            priority: paramSecPage.priority,
            executor: paramSecPage.executor
        } )
     }
    ClickPageHandler = () => {
        this.setState( {
            onClose: 'Close',
            onCloseBool: true
        } )
    }

    componentDidMount() {
        this.ClickPageHandler()
    }
    render () {

        return (
            <div className="Container">
                {
                    !this.state.onCloseBool ? <Blackout onClick={ this.ClickPageHandler } /> : null
                }

                <LeftBlock/>

                <RightBlock
                    SecondPageHandler={ (paramSecPage)=>{this.SecondPageHandler(paramSecPage)} }
                />
                
                <SecondPage
                    onClose={ this.state.onClose }
                    backGround = {this.state.background}
                    priority = {this.state.priority}
                    executor = {this.state.executor}
                />

            </div>
        )
    }
}

export default App
