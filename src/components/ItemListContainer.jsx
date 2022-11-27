import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import {getDocs, query, where} from 'firebase/firestore'
import { collectionProd } from '../services/firebaseConfig';

const ItemListContainer = () => {
  
  const[items, setItems] = useState([])
  const[loading, setLoading] = useState(true)

  const {categoryName} = useParams()
  
  useEffect(()=>{
    const q = categoryName && query(collectionProd, where('category', '==', categoryName))
    getDocs(q ? q : collectionProd)
    .then ((res)=>{
      const products = res.docs.map(prod=>{
        return {id: prod.id, ...prod.data()}
      })
      setItems(products)
    })
    .catch((error)=>console.log(error))
    .finally(()=> setLoading(false))
  },[categoryName])

  return (
    <main>
      <ItemList items={items}/>
    </main>
  )
}

export default ItemListContainer