import React from 'react'
import STORE from '../store'
import Form from '../components/form'
import Header from '../components/header'
import VisitorTaskList from '../components/visitorTaskList'

class VisitorView extends React.Component {

	constructor() {
		super()
		this.state = STORE.getData()
	}

	componentWillMount() {
		STORE.on('syncState', () => {
			this.setState(STORE.getData())
		})
	}

	componentWillUnmount() {
		STORE.off('syncState')
	}

	render() {
		return (
			<div className="visitor-view">
        <div className="main">
	        <div className="l-wrapper l-wrapper--medium">
	          <Header filterState={this.state.filter} />
	          <VisitorTaskList />
	        </div>
        </div>
        <div className="sidebar">
					<div className="l-wrapper l-wrapper--small">
						<Form activeForm={this.state.activeForm} alert={this.state.formAlert} />
					</div>
        </div>
			</div>
		)
	}

}

export default VisitorView
