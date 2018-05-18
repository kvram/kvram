import React from 'react'
import { Content } from 'antd/lib/layout'
import { Link } from 'react-router-dom'
import Typist from 'react-typist'

import './main-content.css'

const MainContent = () => (
  <Content className='content'>
    <Typist cursor={ { show: false } }>
      <div>Welcome to my site</div>
      <Typist.Delay ms={ 500 } />
      <div>
        Check out the <Link to={ '/blog' }>blog</Link>.
      </div>
      <div>
        <img
          width={ 272 }
          alt='logo'
          src='https://picsum.photos/800/300/?image=977'
        />
      </div>
      <Typist.Delay ms={ 700 } />
      and stuff
    </Typist>
  </Content>
)

export default MainContent
