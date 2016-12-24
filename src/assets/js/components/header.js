import React from 'react'
import ACTIONS from '../actions'
import HeaderForm from './headerForm'

class Header extends React.Component {

  selectFilter(ev) {
    const selected = ev.target,
          filterVal = selected.textContent.toLowerCase()
    ACTIONS.updateActiveFilter(filterVal)
  }

  render() {
    const { isOpen, active } = this.props.filterState
    return (
      <header className="header">
        <div className={isOpen ? 'filter filter--is-open' : 'filter'}>
          <div className="filter__toggle" onClick={ACTIONS.toggleFilterOptions}>
            <img className="filter__toggle-el" src="img/cross.svg" />
          </div>
          <ul className="filter__options">
            <li className="filter__options-el"><span className={active === 'all' ? 'is-active' : ''} onClick={this.selectFilter.bind(this)}>All</span></li>
            <li className="filter__options-el"><span className={active === 'complete' ? 'is-active' : ''} onClick={this.selectFilter.bind(this)}>Complete</span></li>
            <li className="filter__options-el"><span className={active === 'pending' ? 'is-active' : ''} onClick={this.selectFilter.bind(this)}>Pending</span></li>
          </ul>
        </div>
        <h1 className="header__title">One Task at a Time</h1>
        <HeaderForm />
      </header>
    )
  }

}

export default Header
