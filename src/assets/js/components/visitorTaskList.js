import React from 'react'

class VisitorTaskList extends React.Component {

  render() {
    return (
      <ul className="task-list">
	      <li className="task">
	        <div className="task__info">
	          <input type="checkbox" />
	          <div className="task__info-status">
	            <label className="toggle">
	              <span className="toggle__target"></span>
	            </label>
	          </div>
	          <span className="task__info-description">
	          	Sign In to have your tasks saved!
	          </span>
	        </div>
	      </li>
      </ul>
    )
  }

}

export default VisitorTaskList
