import React from 'react'
import Actions from '../actions'

class Register extends React.Component {
	
	handleSubmit(ev) {
		ev.preventDefault()
		const { fullname, email, password } = ev.target,
					userObj = {
						fullname: fullname.value,
						email: email.value,
						password: password.value
					}
		Actions.registerUser(userObj)
	}
	
	render() {
		return (
			<form className="register" onSubmit={this.handleSubmit}>
				<label className="register__label" htmlFor="fullname">Full Name</label>
				<input className="register__input" placeholder="Enter your full name" name="fullname" />
				<label className="register__label" htmlFor="email">E-mail</label>
				<input className="register__input" placeholder="Your e-mail goes here" name="email" type="email" />
				<label className="register__label" htmlFor="password">Password</label>
				<input className="register__input" placeholder="Password" name="password" type="password" />
				<div className="register__submit">
					<button type="submit" value="Sign Up">Sign Up</button>
				</div>
			</form>
		)
	}
	
}

export default Register
