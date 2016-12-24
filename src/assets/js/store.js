import _ from 'underscore'
import Backbone from 'backbone'
import { TasksCollection } from './models/data'

const STORE = _.extend(Backbone.Events, {

	data: {
		collection: new TasksCollection(),
		activeForm: 'register',
		formAlert: false,
		filter: {
			isOpen: false,
			active: 'all'
		},
		sidebarIsOpen: true
	},

	getData() {
		return this.data
	},

	get(key) {
		return this.data[key]
	},

	emitChange() {
		this.trigger('syncState')
	},

	set(stateObj) {
		this.data = _.extend(this.data, stateObj)
		this.emitChange()
	},

	initialize() {
		this.get('collection').on('update sync', () => this.emitChange())
	}

})

STORE.initialize()

export default STORE
