import React from 'react'
import './styles/fonts.scss'
import './styles/app.scss'
import Hello from './components/hello/Hello'
import Experience from './components/experience/Experience'

export default function App () {
  return (
    <div className="container">
      <Hello />
      <Experience />
    </div>
  )
}
