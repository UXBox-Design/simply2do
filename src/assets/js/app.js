import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import VisitorView from './views/visitorView'
import UserView from './views/userView'

const app = function() {
	
	const container = document.querySelector('.container')

	const Router = Backbone.Router.extend({
		
		routes: {
			'visitor': 'handleVisitor',
			'user': 'handleUser',
			'*default': 'redirect'
		},
		
		handleVisitor() {
			ReactDOM.render(<VisitorView />, container)
		},
		
		handleUser() {
			ReactDOM.render(<UserView />, container)
		},
		
		redirect() {
			location.hash = 'visitor'
		},
		
		initialize() {
			Backbone.history.start()
		},
		
	})
	
	new Router()

}

app()
