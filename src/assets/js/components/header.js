import React from 'react'
import Actions from '../actions'
import HeaderForm from './headerForm'

class Header extends React.Component {

  toggleFilterOptions() {
	  const filter = document.querySelector('.filter')
    filter.classList.toggle('filter--is-open')
  }
  
  toggleActiveFilter(ev) {
	  if (ev.target.parentElement.classList.contains('filter__options-el')) {
		  const currentActive = document.querySelector('.filter__options .is-active'),
		  			selected = ev.target,
		  			selectedValue = selected.textContent.toLowerCase()
	    currentActive.classList.remove('is-active')
	    selected.classList.add('is-active')
	    Actions.filterTasks(selectedValue)
    }
  }

  render() {
    return (
      <header className="header">
        <div className="filter">
          <div className="filter__toggle" onClick={this.toggleFilterOptions.bind(this)}>
            <img className="filter__toggle-el" src="img/cross.svg" />
          </div>
          <ul className="filter__options" onClick={this.toggleActiveFilter}>
            <li className="filter__options-el"><span className="is-active">All</span></li>
            <li className="filter__options-el"><span>Complete</span></li>
            <li className="filter__options-el"><span>Pending</span></li>
          </ul>
        </div>
        <h1 className="header__title">One Task at a Time</h1>
        <HeaderForm />
      </header>
    )
  }

}

export default Header
