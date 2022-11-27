import React, { useState , useEffect } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore'
import { collectionProd } from '../services/firebaseConfig';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true)
  const { prodId } = useParams();

  useEffect(() => {
    const prod = doc(collectionProd, prodId)
    getDoc(prod)
    .then((res) => setItem({id: res.id, ...res.data()}))
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))
  }, [prodId]);

  if (loading){
    return <main>Cargando...</main>
  }

  return (
      <main>
          <ItemDetail item={item}/>
      </main>
  );
};

export default ItemDetailContainer