import React from 'react'

import './Pagination.css'

const Pagination = ({
  active,
  length,
  handleOnClick
}) => (
  <div className="carousel__pagination">
    <ul>
      { length && Array.from({ length }).map((_, i) => (
        <li
          className={ active === i ? 'active' : '' }
          key={ i }
          onClick={ () => handleOnClick(i) } />
      )) }
    </ul>
  </div>
)

Pagination.propTypes = {
  handleOnClick: React.PropTypes.func,
  length: React.PropTypes.number
}

export default Pagination
