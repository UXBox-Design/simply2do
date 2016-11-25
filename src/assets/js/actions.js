import Store from './store'
import { TaskModel, TasksCollection } from './models/data'
import User from './models/user'

const Actions = {
	
	fetchTasks() {
    Store.get('collection').fetch({
	    data: {
		    user_id: User.getCurrentUser()._id
	    }
    })
  },
	
	addTask(ev) {
    ev.preventDefault()
    const { value } = ev.target.description
    let taskInfo = {
	    user_id: User.getCurrentUser()._id,
      description: value
    }
    if (taskInfo.description) {
      let taskModel = new TaskModel(taskInfo)
      taskModel.save()
      Store.get('collection').add(taskModel)
    }
    ev.target.description.value = ''
  },
  
  removeTask() {
    let coll = Store.get('collection')
    let taskModel = coll.get(this.props.model)
    taskModel.destroy()
    coll.remove(taskModel)
    Store.set({
      collection: coll
    })
  },

  toggleComplete() {
    let coll = Store.get('collection')
    let taskModel = coll.get(this.props.model)
    taskModel.set({
      complete: taskModel.get('complete') ? false : true
    })
    taskModel.save()
    Store.set({
      collection: coll
    })
  },
  
  filterTasks(value) {
	  Store.set({ filter: value })
  },
  
  toggleSidebar() {
	  const sidebar = document.querySelector('.sidebar')
	  sidebar.classList.toggle('sidebar--is-open')
  },
	
	registerUser(userObj) {
		User.register(userObj)
				.then(() => {
					this.loginUser(userObj.email, userObj.password)
				})
	},
	
	loginUser(email, password) {
		User.login(email, password)
				.then(() => {
						location.hash = 'user'
						Store.set({ formAlert: false })
						setTimeout(() => {
							this.toggleSidebar()
						}, 1600)
					},
					() => Store.set({ formAlert: true })
				)
	},
	
	logoutUser() {
		User.logout()
				.then(() => location.hash = 'visitor')
  }
	
}

export default Actions
