import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Layout, { Footer, Sider } from 'antd/lib/layout'
import Nav from './nav'
import SideMenu from './side-menu'
import MainContent from './main/main-content'
import Pages from './blog/pages'
import PageWrapper from './blog/wrapper'
import PageSideMenu from './blog/page-side-menu'

const paths = require('./routes')

class App extends Component {
  render () {
    return (
      <Router>
        <div className='main'>
          <Layout>
            <Nav />
            <Layout>
              <Route exact path={ paths.Home.url }>
                {({ match }) =>
                  match && (
                    <React.Fragment>
                      <SideMenu />
                      <MainContent />
                    </React.Fragment>
                  )
                }
              </Route>
              <Route path={ `${ paths.Blog.url }/:page` }>
                {({ match }) =>
                  match && (
                    <React.Fragment>
                      <PageSideMenu page={ match.params.page } />
                      <PageWrapper match={ match } />
                    </React.Fragment>
                  )
                }
              </Route>
              <Route exact path={ paths.Blog.url }>
                {({ match }) =>
                  match && (
                    <React.Fragment>
                      <PageSideMenu />
                      <Pages match={ match } />
                    </React.Fragment>
                  )
                }
              </Route>
              <Sider>right sidebar</Sider>
            </Layout>
            <Footer>footer</Footer>
          </Layout>
        </div>
      </Router>
    )
  }
}

export default App
