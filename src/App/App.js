import React, { Component } from 'react'
import Carousel from './../Carousel/Carousel'
import Image from './../Image/Image'

import './App.css'

class App extends Component {

  state = {
    autoplay: 0,
    easing: 'ease',
    navigation: true,
    pagination: true,
    speed: 300
  }

  handleOnAutoPlayChange = ({ target }) => {
    const { value } = target
    const autoplay = value ? parseInt(value, 10) : 0
    this.setState({ autoplay })
  }

  handleOnEasingChange = ({ target }) => {
    const { value: easing } = target
    this.setState({ easing })
  }

  handleOnAutoSpeedChange = ({ target }) => {
    const { value } = target
    const speed = value ? parseInt(value, 10) : 0
    this.setState({ speed })
  }

  handleOnNavigationChange = ({ target }) => {
    const { value } = target
    const navigation = value === 'true'
    this.setState({ navigation })
  }

  handleOnPaginationChange = ({ target }) => {
    const { value } = target
    const pagination = value === 'true'
    this.setState({ pagination })
  }

  render() {

    const { images } = this.props
    const { autoplay, easing, navigation, pagination, speed } = this.state

    return (
      <main className="app">
        <div className="column column--left editor">
          <pre>
            <span className="white">{`<`}</span>
            <span className="yellow">{`Carousel\n`}</span>
            <span className="orange">{ `  autoplay`}</span>
            <span className="blue">{`=`}</span>
            <span className="red">{`{`}</span>
            <input
              onChange={ this.handleOnAutoPlayChange }
              type="text"
              value={ autoplay } />
            <span className="red">{`}\n`}</span>
            <span className="orange">{`  easing`}</span>
            <span className="blue">{`=`}</span>
            <span className="red">{`{`}</span>
            <input
              onChange={ this.handleOnEasingChange }
              type="text"
              value={ easing } />
            <span className="red">{`}\n`}</span>
            <span className="orange">{`  speed`}</span>
            <span className="blue">{`=`}</span>
            <span className="red">{`{`}</span>
            <input
              onChange={ this.handleOnAutoSpeedChange }
              type="text"
              value={ speed } />
            <span className="red">{`}\n`}</span>
            <span className="orange">{`  navigation`}</span>
            <span className="blue">{`=`}</span>
            <span className="red">{`{`}</span>
            <select
              onChange={ this.handleOnNavigationChange }
              value={ navigation }>
              <option value={ true }>{`True`}</option>
              <option value={ false }>{`False`}</option>
            </select>
            <span className="red">{`}\n`}</span>
            <span className="orange">{`  pagination`}</span>
            <span className="blue">{`=`}</span>
            <span className="red">{`{`}</span>
            <select
              onChange={ this.handleOnPaginationChange }
              value={ pagination }>
              <option value={ true }>{`True`}</option>
              <option value={ false }>{`False`}</option>
            </select>
            <span className="red">{`}`}</span>
            <span className="white">{` />`}</span>
          </pre>
        </div>
        <div className="column column--right">
          <Carousel
            autoplay={ autoplay }
            easing={ easing }
            speed={ speed }
            navigation={ navigation }
            pagination={ pagination }>
            { !!images.length && images.map((src, i) => (
              <Image
                className="carousel__image"
                key={ i }
                src={ src } />
            )) }
          </Carousel>
        </div>
      </main>
    )
  }
}

export default App
