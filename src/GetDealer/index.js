import React from 'react'
import { Header, Card } from 'semantic-ui-react'

export default (props) => {

	const cards = []
	
	for (const player in props.players) {
		cards.push(
			<Card key={player}>
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
			</Card.Group>
   		</React.Fragment>
   		)
}