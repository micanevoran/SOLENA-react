import React, { useEffect, useState } from 'react';
import {products} from '../mock/products.js';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  
  const[items, setItems] = useState([])

  const {categoryName} = useParams()
  
  useEffect(()=>{
    const getProducts = () =>{
      return new Promise ((res,rej)=>{
        const prodFiltrados = products.filter(prod=>prod.category === categoryName)
        const resol = categoryName ? prodFiltrados : products
        setTimeout(() =>{
          res(resol)
        },2000)
    })
  }
    getProducts()
    .then((res)=>setItems(res))
    .catch((error)=>console.log(error))
  },[categoryName])
  return (
    <main>
      <ItemList items={items}/>
    </main>
  )
}

export default ItemListContainer