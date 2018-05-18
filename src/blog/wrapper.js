import React from 'react'
import { Route } from 'react-router-dom'
import { Content } from 'antd/lib/layout'
import { pages } from './pages'

const PageWrapper = ({ match }) => {
  return (
    <Content className='content'>
      {pages.map(page => (
        <Route
          key={ page.url }
          path={ `/blog/${ page.url }` }
          component={ page.component }
        />
      ))}
    </Content>
  )
}

export default PageWrapper
