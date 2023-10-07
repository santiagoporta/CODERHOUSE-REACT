import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import React from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useState, useEffect } from 'react'


const ItemListContainer = () =>{

  const { categoryId } = useParams()
  const [products,setProducts] = useState([])
  
  useEffect(()=> {
      const db = getFirestore()

      const itemsCollection = collection(db, "Cervezas") //, `${categoryId}`
      getDocs(itemsCollection).then((snapshot) => {
          const docs = snapshot.docs.map((doc) =>   
           ({
            ...doc.data(), id:doc.id
          }))
          console.log(docs)
          setProducts(docs)
      })
  }, [])

  if (categoryId){
    const filteredProductByCategory = products.filter((product)=> product.category === categoryId)
    return(
      <ItemList product={filteredProductByCategory}/>
    )
  }
  return(
    <ItemList product={products}/>
  )
}




export default ItemListContainer