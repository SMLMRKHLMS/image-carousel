import React from 'react'

import './Button.css'

const Button = ({
  handleOnClick,
  type
}) => (
  <button
    className={ `carousel__button carousel__button--${ type }` }
    onClick={ handleOnClick } />
)

Button.propTypes = {
  handleOnClick: React.PropTypes.func,
  type: React.PropTypes.string.isRequired
}

export default Button
