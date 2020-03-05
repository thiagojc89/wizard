import React from 'react'
import { Modal, Card, Input, Button } from 'semantic-ui-react'

class CardModal extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			cardsArray: [],
			qty: parseInt(this.props.qty)
		}
	}
	componentDidMount(){
		this.showCards()
	}
	handleChange = (e)=>{

    	this.setState({[e.target.name]: e.target.value})

  	}
	showCards = ()=>{
		const array = []
		

		for (let i = 1; i <= this.state.qty ; i++){
			
			array.push(
				<Card key={i}>
					<Card.Content>
				
						<img alt="avatar" className="ui tiny centered image" src="https://semantic-ui.com/images/avatar/large/jenny.jpg"/>
				
						<Input onChange={this.handleChange} name={`player${i}`} value={this.state.player}/>
					</Card.Content>
				</Card>
				)
		}

		this.setState({
			cardsArray: [...this.state.cardsArray, array]
		})
	}
	render(){
		console.log('this is state >>> ', this.state);
		return(
			<React.Fragment>
				<Modal open={this.props.open} onClose={this.props.close}>
					<br/>
					<br/>
					<Card.Group centered>
						{this.state.cardsArray}
					</Card.Group>
					<Button content="GO!"/>

					 
				</Modal>
			</React.Fragment>
		)
	}
}

export default CardModal;


// const time  = ()=> {
//     const timeToGraduation = (Date.UTC(2020,0,07,15,40,00)/1000 - Date.now()/1000)/60/60 + 6
//     const hours = Math.floor(timeToGraduation)
//     const minutes = Math.floor((timeToGraduation - hours) * 60)
//     const seconds = Math.floor((((timeToGraduation - hours) * 60) - minutes) * 60)
//     console.log(`${hours} hours, ${minutes} minutes and ${seconds} seconds left to land in Texas for the amazing Rany's graduation`)

// }