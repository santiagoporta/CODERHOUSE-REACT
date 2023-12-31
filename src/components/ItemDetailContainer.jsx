import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'


const ItemDetailContainer = () => {

    const { id } = useParams()
    const [product, setProduct] = useState ([])

    useEffect (() => {
        const db = getFirestore()

        const oneItem = doc(db, "Cervezas", `${id}`)
        getDoc(oneItem).then((snapshot) => {
            if(snapshot.exists()){
                const docs = snapshot.data()
                setProduct(docs)
            }
        })
    },[]);

    // const filteredProduct = product.filter((p) => p.id == id);


    return (
        <Flex
        flexWrap="wrap"
        justifyContent="space-around"
        alignItems="center"
        gap={4}
        >
        <ItemDetail product={product}/>
        </Flex>
    )

}


export default ItemDetailContainer