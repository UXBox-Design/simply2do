import React from 'react'
import STORE from '../store'
import Register from './register'
import Login from './login'

class Form extends React.Component {
	
	toggleActiveForm() {
		STORE.set({
			activeForm: STORE.get('activeForm') === 'register' ? 'login' : 'register'
		})
	}
	
	render() {
		const { activeForm } = this.props,
					activeOption = {
						color: '#C1A670',
			      borderColor: '#C1A670'
					}
		if (activeForm === 'register') {
			var form = <Register />,
					registerActive = activeOption
		}
		else {
			var form = <Login alert={this.props.alert} />,
					loginActive = activeOption
		}
		return (
			<div className="form">
				<ul className="options" onClick={this.toggleActiveForm}>
					<li className="options__el" style={loginActive}>Sign In</li>
					<span>or</span>
					<li className="options__el" style={registerActive}>Sign Up</li>
				</ul>
				{form}
			</div>
		)
	}
	
}

export default Form
