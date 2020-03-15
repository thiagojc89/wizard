import React from 'react'
import { Header, Card, Button } from 'semantic-ui-react'

export default (props) => {

	const cards = []
	
	for (const player in props.players) {
		cards.push(
			<Card key={player} color={player === props.dealer ? "green": "red"} onClick={()=>props.setDealer(player)}>
				<Card.Content>

					<Card.Header>{props.players[player]}</Card.Header>


				</Card.Content>
			</Card>)

	}

	


   	return(
   		<React.Fragment>
			<Header content="Who is dealing?"/>
			<Card.Group centered>
				{cards}
				<Button content="Get Bids" onClick={props.getBids}/>
			</Card.Group>
   		</React.Fragment>
   		)
}