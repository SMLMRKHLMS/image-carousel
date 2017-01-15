import React from 'react'

import './Slide.css'

const Slide = ({
  active,
  children,
  easing,
  next,
  handleTransitionEnd,
  prev,
  speed
}) => (
  <div
    children={ children }
    className={[
      'carousel__slide',
      active ? 'carousel__slide--active' : '',
      next ? 'carousel__slide--next' : '',
      prev ? 'carousel__slide--prev' : ''
    ].filter(str => str).join(' ')}
    onTransitionEnd={ handleTransitionEnd }
    style={{ transitionDuration: `${ speed }ms`, transitionTimingFunction: easing }} />
)

Slide.propTypes = {
  active: React.PropTypes.bool,
  children: React.PropTypes.node,
  easing: React.PropTypes.string,
  next: React.PropTypes.bool,
  handleTransitionEnd: React.PropTypes.func,
  prev: React.PropTypes.bool,
  speed: React.PropTypes.number
}

export default Slide
