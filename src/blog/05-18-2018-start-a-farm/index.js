import React from 'react'

export const content = ``
export const description = 'Why and how to start a farm.'
export const draft = false
export const logo = 'https://picsum.photos/800/300/?image=424'
export const title = 'Start a farm'
export const url = 'start-a-farm'

export const component = () => {
  return (
    <div>
      <h1>What is a farm</h1>
      <div>
        <img alt={ title } src={ logo } height='120px' />
      </div>
      A farm is place where you grow food.
      <p>
        I don't currently have a farm. I live in an apartment in a small city
        mixed into the suburban sprawl
      </p>
    </div>
  )
}
