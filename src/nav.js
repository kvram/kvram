import React, { PureComponent } from 'react'
import { Header } from 'antd/lib/layout'
import Menu, { Item } from 'antd/lib/menu'
import { Link } from 'react-router-dom'

const paths = require('./routes')

class Nav extends PureComponent {
  render () {
    return (
      <Header>
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={ [window.location.pathname] }
          style={ { lineHeight: '64px' } }
        >
          {Object.entries(paths).map(([name, value]) => (
            <Item key={ value.url }>
              <Link to={ value.url }>{name}</Link>
            </Item>
          ))}
        </Menu>
      </Header>
    )
  }
}

export default Nav
