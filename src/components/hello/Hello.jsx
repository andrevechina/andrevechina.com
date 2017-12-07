import React from 'react'
import helloImage from '../../images/hello.jpg'

export default function Hello () {
  return (
    <div style={{ backgroundImage: `url(${helloImage})` }} className="hello-container">
      <div className="message" >
        <div className="hello">Hello! {'I\'m'}</div>
        <div className="name">{'André'} <span className="lastName">Vechina</span></div>
      </div>
    </div>
  )
}
