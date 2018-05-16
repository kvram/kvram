import React from 'react'
import { Route } from 'react-router-dom'
import { Content } from 'antd/lib/layout'
import { pages } from './pages'

const PageWrapper = ({ match }) => {
  return (
    <Content className='content'>
      {Object.entries(pages).map(([page, value]) => (
        <Route
          key={ page }
          path={ `/blog/${ value.url }` }
          component={ value.component }
        />
      ))}
    </Content>
  )
}

export default PageWrapper
