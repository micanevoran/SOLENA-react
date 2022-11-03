import React, { useState , useEffect } from 'react'
import {products} from '../mock/products.js';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { prodId } = useParams();

  useEffect(() => {
    const getProduct = (prodId) => {
      return new Promise((res, rej) => {
          const product = products.find((prod) => prod.id === prodId);
          setTimeout(() => {
              res(product);
          }, 1000);
      });
    };
    getProduct(Number(prodId))
    .then((res) => setItem(res))
    .catch((error) => console.log(error))
  }, [prodId]);

  return (
      <div>
          <ItemDetail item={item}/>
      </div>
  );
};

export default ItemDetailContainer