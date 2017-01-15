import React, { Component } from 'react'
import Button from './Button'
import Pagination from './Pagination'
import Slide from './Slide'

import './Carousel.css'

class Carousel extends Component {

  static defaultProps = {
    active: 0,
    autoplay: 0,
    easing: 'ease',
    navigation: true,
    pagination: true,
    speed: 500
  }

  static propTypes = {
    active: React.PropTypes.number,
    autoplay: React.PropTypes.number,
    easing: React.PropTypes.string,
    navigation: React.PropTypes.bool,
    pagination: React.PropTypes.bool,
    speed: React.PropTypes.number
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      active: props.active,
      direction: 'left',
      transitionEnd: true
    }
  }

  componentDidMount() {
    const { autoplay } = this.props
    autoplay && this.autoPlay(autoplay)
  }

  componentWillReceiveProps(nextProps) {
    const { autoplay } = this.props
    if (nextProps.autoplay !== autoplay) {
      clearInterval(this.interval)
      nextProps.autoplay && this.autoPlay(nextProps.autoplay)
    }
  }

  autoPlay(autoplay) {
    this.interval = setInterval(() => this.handleSlideNext(true), autoplay)
  }

  handleSlideNext = transitionEnd => transitionEnd &&
    this.setState({
      active: this.getNext(),
      direction: 'left',
      transitionEnd: false
    })

  handleSlidePrev = transitionEnd => transitionEnd &&
    this.setState({
      active: this.getPrev(),
      direction: 'right',
      transitionEnd: false
    })

  handleTransitionEnd = active => active &&
    this.setState({ transitionEnd: true })

  getNext() {
    const { children: { length } } = this.props
    const { active } = this.state
    return active + 1 === length ? 0 : active + 1
  }

  getPrev() {
    const { children: { length } } = this.props
    const { active } = this.state
    return active === 0 ? length - 1 : active - 1
  }

  slideTo = index => this.setState({
    active: index,
    direction: this.findDirection(index),
    transitionEnd: false
  })

  findDirection(index) {
    const { children } = this.props
    const { active } = this.state
    if (active + 1 === children.length && index === 0) { return 'left' }
    else if (active === 0 && index + 1 === children.length) { return 'right' }
    else if (index > active) { return 'left' }
    return 'right'
  }

  render() {

    const { children: slides, easing, navigation, pagination, speed } = this.props
    const { active, direction, transitionEnd } = this.state

    return (
      <div className={`carousel carousel--slide-${ direction }`}>
        <div
          className="carousel__inner">
          { slides &&
            slides.length &&
            slides.map((image, i) => (
            <Slide
              active={ active === i }
              children={ image }
              easing={ easing }
              key={ i }
              next={ this.getNext() === i }
              handleTransitionEnd={ () => this.handleTransitionEnd(active === i) }
              prev={ this.getPrev() === i }
              speed={ speed > 0 ? speed : 0 } />
          )) }
        </div>
        { pagination && (
          <Pagination
            active={ active }
            handleOnClick={ this.slideTo }
            length={ slides.length ? slides.length : 0 } />
        ) }
        { navigation && (
          <div className="carousel__navigation">
            <Button
              handleOnClick={ () => this.handleSlidePrev(transitionEnd) }
              type="prev" />
            <Button
              handleOnClick={ () => this.handleSlideNext(transitionEnd) }
              type="next" />
          </div>
        ) }
      </div>
    )
  }
}

export default Carousel
