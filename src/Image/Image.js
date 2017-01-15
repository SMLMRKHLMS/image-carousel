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

export default Image
