import React from 'react'
import { Link, Route } from 'react-router-dom'
import { Content } from 'antd/lib/layout'
import Avatar from 'antd/lib/avatar'
import List, { Item } from 'antd/lib/list'
import Icon from 'antd/lib/icon'

import * as Started from './05-15-2018'
import * as Farm from './05-18-2018-start-a-farm'

export const pages = [Farm, Started].filter(p => !p.draft)

const IconText = ({ type, text }) => (
  <span>
    <Icon type={ type } style={ { marginRight: 8 } } />
    {text}
  </span>
)

const Page = ({ match }) => {
  return (
    <Content className='content'>
      {match.isExact && (
        <List
          itemLayout='vertical'
          size='large'
          pagination={ {
            onChange: page => {},
            pageSize: 3
          } }
          dataSource={ pages }
          footer={ <div /> }
          renderItem={ item => (
            <Item
              key={ item.title }
              actions={ [
                <IconText type='star-o' text='156' />,
                <IconText type='like-o' text='156' />,
                <IconText type='message' text='2' />
              ] }
              extra={
                <Link to={ `/blog/${ item.url }` }>
                  <img width={ 272 } alt={ item.title } src={ item.logo } />
                </Link>
              }
            >
              <Item.Meta
                avatar={ <Avatar src={ item.avatar } /> }
                title={ <Link to={ `/blog/${ item.url }` }>{item.title}</Link> }
                description={ item.description }
              />
              {`${ item.content.substring(0, 80) }${
                item.content.length > 80 ? '...' : ''
              }`}
            </Item>
          ) }
        />
      )}
      {pages.map(page => (
        <Route
          key={ page.title }
          path={ `${ match.url }/${ page.url }` }
          component={ page.component }
        />
      ))}
    </Content>
  )
}

export default Page
