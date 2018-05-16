import React from 'react'
import TestUtils from 'react-dom/test-utils'
import App from './App'

it('renders without crashing', () => {
  const instance = TestUtils.renderIntoDocument(<App />)
  expect(instance).toBeDefined()
})
