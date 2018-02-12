import { shallow } from 'enzyme'
import React from 'react'
import App from '../src/App'

describe('<App />', () => {
  it('should render correctly', () => {
    expect(shallow(<App />)).toMatchSnapshot()
  })
})
