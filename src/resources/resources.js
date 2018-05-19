import React from 'react'
import { Content } from 'antd/lib/layout'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'

import Resource from './resource'

const resources = [
  {
    description: 'Consistent high quality products with great customer service.  Proven excellence.',
    href: 'https://www.premier1supplies.com/c/fencing/rotational-grazing-supplies',
    image: 'https://www.premier1supplies.com/assets/images/logo--premier1.svg',
    title: 'Premier 1 fence supply'
  }
]

const Resources = () => (
  <Content className='content'>
    <h1>Affiliate Resources</h1>
    <Row gutter={16}>
      {
        resources.map(resource => (
          <Col span={4}>
            <Resource resource={resource}/>
          </Col>
        ))
      }
    </Row>

  </Content>
)

export default Resources
