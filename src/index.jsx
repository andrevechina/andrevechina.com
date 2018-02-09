import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import configureStore from './store/configureStore'
import isResourceLoaded from './helpers/resourcesHelpers'

function renderApp() {
  document.getElementById('spinner-container').remove()

  const store = configureStore()

  ReactDOM.render(<App store={store} />, document.getElementById('app'))
}

isResourceLoaded().then(renderApp)
