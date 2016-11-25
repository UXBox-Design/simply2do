import React from 'react'
import Store from '../store'
import Form from '../components/form'
import Header from '../components/header'
import VisitorTaskList from '../components/visitorTaskList'

class VisitorView extends React.Component {
	
	constructor() {
		super()
		this.state = Store.getData()
	}
	
	componentWillMount() {
		Store.on('syncState', () => {
			this.setState(Store.getData())
		})
	}
	
	componentWillUnmount() {
		Store.off('syncState')
	}
	
	render() {
		return (
			<div className="visitor-view">
        <div className="main">
	        <div className="l-wrapper l-wrapper--medium">
	          <Header />
	          <VisitorTaskList />
	        </div>
        </div>
        <div className="sidebar sidebar--is-open">
					<div className="l-wrapper l-wrapper--small">
						<Form activeForm={this.state.activeForm} alert={this.state.formAlert} />
					</div>
        </div>
			</div>
		)
	}
	
}

export default VisitorView
