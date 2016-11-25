import Backbone from 'backbone'

export const TaskModel = Backbone.Model.extend({
	urlRoot: '/api/tasks',
	idAttribute: '_id',
	default: {
		description: '',
		complete: false
	}
})

export const TasksCollection = Backbone.Collection.extend({
	url: '/api/tasks',
	model: TaskModel
})
