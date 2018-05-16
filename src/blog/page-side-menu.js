import React from 'react'
import SideMenu from '../side-menu'

import { pages } from './pages'

const options = Object.keys(pages).map(page => ({
  name: page,
  key: pages[page].url,
  url: `/blog/${ pages[page].url }`
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
