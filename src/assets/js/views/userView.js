import React from 'react'
import STORE from '../store'
import ACTIONS from '../actions'
import LoginSuccess from '../components/loginSuccess'
import Header from '../components/header'
import UserTaskList from '../components/userTaskList'

class UserView extends React.Component {

	constructor() {
		super()
		this.state = STORE.getData()
	}

	componentWillMount() {
		STORE.on('syncState', () => {
			this.setState(STORE.getData())
		})
			ACTIONS.fetchTasks()
	}

	componentWillUnmount() {
		STORE.off('syncState')
	}

	render() {
		return (
			<div className="user-view">
        <div className="main main--logged-in">
	        <div className="l-wrapper l-wrapper--medium">
	          <Header filterState={this.state.filter} />
	          <UserTaskList collection={this.state.collection} filterState={this.state.filter} />
	        </div>
        </div>
        <div className={this.state.sidebarIsOpen ? 'sidebar' : 'sidebar sidebar--is-closed'}>
					<div className="l-wrapper l-wrapper--small">
						<LoginSuccess />
					</div>
        </div>
        <div className="sidebar__toggle sidebar__toggle--open" onClick={ACTIONS.toggleSidebar}>
        	<img src="img/user.svg" />
        </div>
			</div>
		)
	}

}

export default UserView
