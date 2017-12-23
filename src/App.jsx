import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './styles/fonts.scss'
import './styles/app.scss'
import Hello from './components/hello/Hello'
import Experience from './components/experience/Experience'
import Education from './components/education/Education'

export default function App (props) {
  return (
    <Provider store={props.store}>
      <MuiThemeProvider>
        <div className="app-container">
          <Hello />
          <Experience />
          <Education />
        </div>
      </MuiThemeProvider>
    </Provider>
  )
}

App.propTypes = {
  store: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
}
