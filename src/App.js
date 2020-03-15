import React from 'react';
import './App.css';
// import {Button, Label, Form, Radio} from 'semantic-ui-react'
import CardModal from './CardModal'
import FormHowManyPlayers from './FormHowManyPlayers'
import GetDealer from './GetDealer'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      qty : null,
      openCardModal: false,
      players: null
    }
  }
  handleChange = (e,{ name, value }) => {

    console.log("name >>>", name);
    console.log("value >>>", value);
    
    this.setState({ [name]: value })
  }
  setDealer = player => this.setState({dealer:player})
  
  getPlayersName = ()=> this.setState({openCardModal: true})
  
  closeCardModal = ()=> this.setState({openCardModal: false})

  startGame = (players)=> {

    // console.log('players >> ', players);
    
    this.setState({
      openCardModal: false,
      players: players
    })

  }
  
  render(){
    // console.log(this.state)
  return (
    <div className="App">
      
          {this.state.players ? 
            <GetDealer players={this.state.players} setDealer={this.setDealer} dealer={this.state.dealer}/>
          :             
            <FormHowManyPlayers qty={this.state.qty} handleChange={this.handleChange} getPlayersName={this.getPlayersName}/>
          }

          {this.state.openCardModal
            ?
            <CardModal 
              qty={this.state.qty} 
              open={this.state.openCardModal} 
              close={this.closeCardModal}
              startGame={this.startGame}/>
            :
            null}

    </div>
  )
  }
}

export default App;
