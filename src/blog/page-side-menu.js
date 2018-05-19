import React from 'react'
import SideMenu from '../side-menu'

import { pages } from './pages'

const options = pages.map(page => ({
  name: page.title,
  key: page.url,
  url: `/blog/${ page.url }`,
  icon: 'profile'
}))

const PageSideMenu = ({ page }) => {
  return (
    <SideMenu
      defaultSelectedKeys={ page && [page] }
      defaultOpenKeys={ ['blog'] }
      options={ options }
    />
  )
}

export default PageSideMenu
