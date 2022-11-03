import React from 'react';
import Item from './Item';

const ItemList = ({items}) => {
  return (
    <div className='prodContainer'>
        {items.map(prod=>
            <Item prod={prod} key={prod.id} />)}
    </div>
  )
}

export default ItemList