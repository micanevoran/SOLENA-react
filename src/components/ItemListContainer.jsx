import React from 'react'

const ItemListContainer = (props) => {
  return (
    <main className='main'>
        <p>{props.greeting}</p>
        <p>{props.placeholder}</p>
    </main>
  )
}

export default ItemListContainer