import React from 'react'
import Store from '../store'
import Actions from '../actions'
import LoginSuccess from '../components/loginSuccess'
import Header from '../components/header'
import UserTaskList from '../components/userTaskList'

class UserView extends React.Component {
	
	constructor() {
		super()
		this.state = Store.getData()
	}
	
	componentWillMount() {
		Store.on('syncState', () => {
			this.setState(Store.getData())
		})
			Actions.fetchTasks()
	}
	
	componentWillUnmount() {
		Store.off('syncState')
	}
	
	render() {
		return (
			<div className="user-view">
        <div className="main main--logged-in">
	        <div className="l-wrapper l-wrapper--medium">
	          <Header />
	          <UserTaskList collection={this.state.collection} filter={this.state.filter} />
	        </div>
        </div>
        <div className="sidebar sidebar--is-open">
					<div className="l-wrapper l-wrapper--small">
						<LoginSuccess />
					</div>
        </div>
        <div className="sidebar__toggle sidebar__toggle--open" onClick={Actions.toggleSidebar}>
        	<img src="img/user.svg" />
        </div>
			</div>
		)
	}
	
}

export default UserView
