import _ from 'underscore'
import Backbone from 'backbone'
import { TaskModel, TasksCollection } from './models/data'

const Store = _.extend(Backbone.Events, {
	
	data: {
		collection: new TasksCollection(),
		activeForm: 'register',
		filter: 'all',
		formAlert: false
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

Store.initialize()

export default Store
