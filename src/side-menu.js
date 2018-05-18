import React from 'react'
import Icon from 'antd/lib/icon'
import { Link } from 'react-router-dom'
import Menu, { Item } from 'antd/lib/menu'
import { Sider } from 'antd/lib/layout'

const SideMenu = ({
  defaultSelectedKeys = [],
  defaultOpenKeys = [],
  options = []
}) => (
  <Sider>
    <Menu
      defaultSelectedKeys={ defaultSelectedKeys }
      defaultOpenKeys={ defaultOpenKeys }
      mode='inline'
    >
      {options.map(option => {
        return option.url ? (
          <Item key={ option.key }>
            <Link to={ option.url }>
              <Icon type={ option.icon } />
              <span>{option.name}</span>
            </Link>
          </Item>
        ) : (
          <Item key={ option.key }>
            <Icon type={ option.icon } />
            <span>{option.name}</span>
          </Item>
        )
      })}
    </Menu>
  </Sider>
)

export default SideMenu
