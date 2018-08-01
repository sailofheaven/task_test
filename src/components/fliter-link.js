import React from 'react'
import PropTypes from 'prop-types'

const FilterLink = ({ active, children, onClick }) => (

  <span className={active ? 'active' : ''}
    onClick={onClick}
    style={{
      marginLeft: '4px',
    }}
  >
    {children}
  </span>
)

FilterLink.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default FilterLink