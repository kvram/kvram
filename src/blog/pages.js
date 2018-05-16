import React from 'react'
import { Link, Route } from 'react-router-dom'
import { Content } from 'antd/lib/layout'
import Avatar from 'antd/lib/avatar'
import List, { Item } from 'antd/lib/list'
import Icon from 'antd/lib/icon'

import Started, {
  content as startedContent,
  description as startedDescription,
  logo as startedLogo,
  title as startedTitle
} from './05-15-2018'

export const pages = {
  'You can blog': {
    url: 'you-can-blog',
    component: Started,
    content: startedContent,
    description: startedDescription,
    logo: startedLogo,
    title: startedTitle
  }
  // New: { url: 'new', component: New, draft: true }
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={ type } style={ { marginRight: 8 } } />
    {text}
  </span>
)

const listData = Object.entries(pages)
  .filter(([page, value]) => !value.draft)
  .map(([page, value]) => ({
    href: `/blog/${ value.url }`,
    title: value.title,
    logo: value.logo,
    description: value.description,
    content: value.content
  }))

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
          dataSource={ listData }
          footer={
            <div>
              <b>Passive income</b> from your clicks
            </div>
          }
          renderItem={ item => (
            <Item
              key={ item.title }
              actions={ [
                <IconText type='star-o' text='156' />,
                <IconText type='like-o' text='156' />,
                <IconText type='message' text='2' />
              ] }
              extra={ <Link to={ item.href }><img width={ 272 } alt='logo' src={ item.logo } /></Link> }
            >
              <Item.Meta
                avatar={ <Avatar src={ item.avatar } /> }
                title={ <Link to={ item.href }>{item.title}</Link> }
                description={ item.description }
              />
              {`${ item.content.substring(0, 80) }${
                item.content.length > 80 ? '...' : ''
              }`}
            </Item>
          ) }
        />
      )}
      {Object.entries(pages).map(([page, value]) => (
        <Route
          key={ page }
          path={ `${ match.url }/${ value.url }` }
          component={ value.component }
        />
      ))}
    </Content>
  )
}

export default Page
