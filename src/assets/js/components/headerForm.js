import React from 'react'
import Actions from '../actions'

class HeaderForm extends React.Component {

  render() {
    return (
      <form className="header__form" onSubmit={Actions.addTask}>
        <input className="header__form-input" name="description" placeholder="What is your focus today?" />
        <button className="header__form-submit" type="submit">
          <img src="img/select.svg" />
        </button>
      </form>
    )
  }

}

export default HeaderForm
