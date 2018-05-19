import React from 'react'

import Card, { Meta } from 'antd/lib/card'

const Resource = ({ resource }) => {
  return (
    <Card
      hoverable
      cover={<img alt={resource.alt} src={resource.image} />}
    >
      <Meta
        description={resource.description}
        title={<a href={resource.href}>{resource.title}</a>}

      />
    </Card>
  )
}
export default Resource