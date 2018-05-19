import React, { PureComponent } from 'react'
import { Header } from 'antd/lib/layout'
import Menu, { Item } from 'antd/lib/menu'
import { Link } from 'react-router-dom'

const routes = require('./routes')

class Nav extends PureComponent {
  render () {
    return (
      <Header>
        <Menu
          mode='horizontal'
          defaultSelectedKeys={ [window.location.pathname] }
          style={ { lineHeight: '64px' } }
        >
          {routes.filter(route => route.url.indexOf(':') < 0).map(route => (
            <Item key={ route.url }>
              <Link to={ route.url }>{route.name}</Link>
            </Item>
          ))}
        </Menu>
      </Header>
    )
  }
}

export default Nav
