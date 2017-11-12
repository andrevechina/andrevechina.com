import React from 'react'
import App from '../src/App.jsx'
import { shallow } from 'enzyme'
import { expect } from 'chai'

describe('<App />', () => {
    it('should print Hello World', () => {
        const wrapper = shallow(<App />)
        expect(wrapper.text()).to.equal('Hello world')
    })
})