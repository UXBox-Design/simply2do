import React from 'react'
import ACTIONS from '../actions'

class UserTaskList extends React.Component {

  render() {
	  const { active: filterValue } = this.props.filterState
    return (
      <ul className="task-list">
        {this.props.collection.filter(taskModel => {
          if (filterValue === 'complete') {
            return taskModel.get('complete')
          }
          else if (filterValue === 'pending') {
            return !taskModel.get('complete')
          }
          else {
            return taskModel
          }
        })
        .map(taskModel => {
          return <Task model={taskModel} key={taskModel.cid} />
        })}
      </ul>
    )
  }

}

class Task extends React.Component {

  render() {
    const { model } = this.props
    return (
      <li className="task">
        <div className="task__info">
          <input id={model.cid} type="checkbox"
            checked={model.get('complete') ? 'checked' : ''} onChange={ACTIONS.toggleComplete.bind(this)}
          />
          <div className="task__info-status">
            <label htmlFor={model.cid} className="toggle">
              <span className="toggle__target"></span>
              <img className="toggle__checkmark" src="img/checkmark.svg" />
            </label>
          </div>
          <span className="task__info-description"
            onClick={ACTIONS.removeTask.bind(this)}>
            {model.get('description')}
          </span>
        </div>
      </li>
    )
  }

}

export default UserTaskList
