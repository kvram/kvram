import React from 'react'

export const draft = false
export const url = 'you-can-blog'

export const description = 'Making money blogging is easy.'
export const logo = 'https://picsum.photos/800/300/?image=977'
export const title = 'You can blog too'
export const content = ``

const affiliateId = 'kvram'
const bluehost = (
  <a href={ `https://www.bluehost.com/track/${ affiliateId }` }>bluehost</a>
)

export const component = () => {
  return (
    <div>
      <h1>Making money blogging is easy</h1>
      <h2>All you have to do is convince a lot of other people to blog too!</h2>
      <p>
        All you need to do is convince other people that blogging is easy and
        and have them sign up for {bluehost} using your affiliate program.
      </p>
      <p>
        First you need to sign up for the affiliate program at {bluehost}.{' '}
        {bluehost} {bluehost} {bluehost}.
      </p>
      <p>
        The link for {bluehost} is{' '}
        <a href='https://www.bluehost.com/cgi/partner/signup'>
          https://www.bluehost.com/cgi/partner/signup
        </a>{' '}
        which directs you to {bluehost}.
      </p>
      Then sign up for a name at {bluehost}.
    </div>
  )
}
