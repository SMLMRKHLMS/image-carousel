import React from 'react'
import ReactDOM from 'react-dom'
import App from './App/App'
import images from './images.json'

import './index.css'

ReactDOM.render(<App images={ images } />, document.getElementById('root'))
