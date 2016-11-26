import React from 'react'
import Actions from '../actions'

class Login extends React.Component {
	
	handleSubmit(ev) {
		ev.preventDefault()
		const { email, password } = ev.target
		Actions.loginUser(email.value, password.value)
	}
	
	render() {
		const { alert } = this.props
		return (
			<form className="login" onSubmit={this.handleSubmit}>
				{alert && <p className="login__alert">Incorrect email or password.</p>}
				<label className="login__label" htmlFor="email">E-mail</label>
				<input className="login__input" placeholder="Your e-mail goes here" name="email" type="email" />
				<label className="login__label" htmlFor="password">Password</label>
				<input className="login__input" placeholder="Password" name="password" type="password" />
				<div className="login__submit">
					<button type="submit" value="Sign In">Sign In</button>
				</div>
			</form>
		)
	}
	
}

export default Login
