import STORE from './store'
import { TaskModel, TasksCollection } from './models/data'
import User from './models/user'

const ACTIONS = {

	fetchTasks() {
    STORE.get('collection').fetch({
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
      STORE.get('collection').add(taskModel)
    }
    ev.target.description.value = ''
  },

  removeTask() {
    let coll = STORE.get('collection')
    let taskModel = coll.get(this.props.model)
    taskModel.destroy()
    coll.remove(taskModel)
    STORE.set({
      collection: coll
    })
  },

  toggleComplete() {
    let coll = STORE.get('collection')
    let taskModel = coll.get(this.props.model)
    taskModel.set({
      complete: taskModel.get('complete') ? false : true
    })
    taskModel.save()
    STORE.set({
      collection: coll
    })
  },

  filterTasks(value) {
	  STORE.set({ filter: value })
  },

  toggleSidebar() {
		const prevState = STORE.get('sidebarIsOpen')
	  STORE.set({ sidebarIsOpen: !prevState })
  },

	toggleFilterOptions() {
		const prevState = STORE.get('filter')
	  STORE.set({
			filter: {
				isOpen: !prevState.isOpen,
				active: prevState.active
			}
		})
	},

	updateActiveFilter(filterVal) {
		const prevState = STORE.get('filter')
	  STORE.set({
			filter: {
				isOpen: prevState.isOpen,
				active: filterVal
			}
		})
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
						STORE.set({ formAlert: false })
						setTimeout(() => {
							this.toggleSidebar()
						}, 1600)
					},
					() => STORE.set({ formAlert: true })
				)
	},

	logoutUser() {
		User.logout()
				.then(() => location.hash = 'visitor')
  }

}

export default ACTIONS
