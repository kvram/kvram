import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout, { Footer, Sider } from 'antd/lib/layout'
import Icon from 'antd/lib/icon'
import Nav from './nav'
import MainContent from './main/main-content'
import Resources from './resources/resources'
import Pages from './blog/pages'
import PageWrapper from './blog/wrapper'
import PageSideMenu from './blog/page-side-menu'

const routes = require('./routes')

const routeComponents = {
  '/': ({ match }) =>
    match && (
      <React.Fragment>
        <MainContent />
      </React.Fragment>
    ),
  '/blog': ({ match }) =>
    match && (
      <React.Fragment>
        <PageSideMenu />
        <Pages match={ match } />
        <Sider>right sidebar</Sider>
      </React.Fragment>
    ),
  '/blog/:page': ({ match }) =>
    match && (
      <React.Fragment>
        <PageSideMenu page={ match.params.page } />
        <PageWrapper match={ match } />
      </React.Fragment>
    ),
  '/resources': ({ match }) =>
    match && (
      <React.Fragment>
        <Resources />
      </React.Fragment>
    )
}

class App extends Component {
  render () {
    return (
      <Router>
        <div className='main'>
          <Layout className='main-content'>
            <Nav />
            <Layout>
              {routes.map(route => (
                <Route exact path={ route.url }>
                  {routeComponents[route.url]}
                </Route>
              ))}
            </Layout>
            <Footer>
              <a href='https://github.com/kvram'>
                Github <Icon type='github' />
              </a>
            </Footer>
          </Layout>
        </div>
      </Router>
    )
  }
}

export default App
