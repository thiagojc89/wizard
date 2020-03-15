import React from 'react'
import {Button, Label, Form, Radio} from 'semantic-ui-react'


export default (props)=>{
	return(
		<React.Fragment>
		<Label> How Many Players ? </Label>   

          <Form>
            <Form.Field>
              <Radio
                label='3'
                name='qty'
                value='3'
                checked={props.qty === '3'}
                onChange={props.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label='4'
                name='qty'
                value='4'
                checked={props.qty === '4'}
                onChange={props.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label='5'
                name='qty'
                value='5'
                checked={props.qty === '5'}
                onChange={props.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label='6'
                name='qty'
                value='6'
                checked={props.qty === '6'}
                onChange={props.handleChange}
              />
            </Form.Field>
          </Form>
    

          <Button onClick={props.getPlayersName}> Start Game </Button>
		</React.Fragment>
		)
} 