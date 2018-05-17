import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Layout, { Footer, Sider } from 'antd/lib/layout'
import Icon from 'antd/lib/icon'
import Nav from './nav'
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
                      <MainContent />
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
                      <Sider>right sidebar</Sider>
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
