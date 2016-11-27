import React from 'react'
import ACTIONS from '../actions'

class LoginSuccess extends React.Component {
	
	render() {
		return (
			<div className="login-success">
				<svg xmlns="http://www.w3.org/2000/svg" className="checkmark" viewBox="0 0 52 52"><circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
				<div className="login-success__content">
					<p className="blurb">
						Hi! Thanks for using Simply2do. If you would like to contribute or perhaps you&apos;ve discovered a bug and have the fix, feel free to submit a <a className="pull-request" href="https://github.com/BuckyMaler/simply2do" target="_blank">pull request</a>. It would be greatly appreciated!
						<span className="blurb__attribution">~ Bucky</span>
					</p>
					<button className="logout" value="Sign Out" onClick={ACTIONS.logoutUser}>Sign Out</button>
				</div>
				<div className="sidebar__toggle sidebar__toggle--close" onClick={ACTIONS.toggleSidebar}>
        	<img src="img/cross.svg" />
        </div>
			</div>
		)
	}
	
}

export default LoginSuccess
