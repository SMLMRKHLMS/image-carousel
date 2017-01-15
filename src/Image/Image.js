import React from 'react'

import './Image.css'

const Image = ({
  className = '',
  src
}) => (
  <div
    className={ `image ${ className }` }
    style={{ backgroundImage: `url('${ src }')` }} />
)

Image.propTypes = {
  className: React.PropTypes.string,
  src: React.PropTypes.string
}

export default Image
