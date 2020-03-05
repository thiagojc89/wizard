import React from 'react';
import './App.css';
import {Button, Label, Form, Radio} from 'semantic-ui-react'
import CardModal from './CardModal'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      qty : null,
      openCardModal: false
    }
  }
  handleChange = (e,{ name, value }) => {
    
    this.setState({ [name]: value })
  }
  qty
  startGame = ()=> this.setState({openCardModal: true})
  
  closeCardModal = ()=> this.setState({openCardModal: false})
  
  render(){
    console.log(this.state);
  return (
    <div className="App">
      
          <Label> How Many Players ? </Label>   

          <Form>
            <Form.Field>
              <Radio
                label='3'
                name='qty'
                value='3'
                checked={this.state.qty === '3'}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label='4'
                name='qty'
                value='4'
                checked={this.state.qty === '4'}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label='5'
                name='qty'
                value='5'
                checked={this.state.qty === '5'}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label='6'
                name='qty'
                value='6'
                checked={this.state.qty === '6'}
                onChange={this.handleChange}
              />
            </Form.Field>
          </Form>
    

          <Button onClick={this.startGame}> Start Game </Button>

          {this.state.openCardModal
            ?
            <CardModal qty={this.state.qty} open={this.state.openCardModal} close={this.closeCardModal}/>
            :
            null}

    </div>
  )
  }
}

export default App;
