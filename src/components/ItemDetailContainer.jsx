import React from 'react'
import {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const product = [
        {id:1,title:"Producto A",description:"descripcion del producto A",stock:10,category:"A",price:"100"},
        {id:2,title:"Producto B",description:"descripcion del producto B",stock:10,category:"A",price:"200"},
        {id:3,title:"Producto C",description:"descripcion del producto C",stock:10,category:"B",price:"300"},
        {id:4,title:"Producto D",description:"descripcion del producto D",stock:10,category:"B",price:"400"},
        {id:5,title:"Producto E",description:"descripcion del producto E",stock:10,category:"B",price:"500"},
        {id:6,title:"Producto F",description:"descripcion del producto F",stock:10,category:"C",price:"600"}
    ]

    const getProducts = new Promise((resolve,reject) => {
        if (product.length > 0) {
            setTimeout(()=> {
                resolve(product)
            }, 2000)
        } else {
            reject(new Error("No hay datos"))
        }
    })

    getProducts
    .then((res)=>{
    })
    .catch((error)=>{
        console.log(error)
    })

    return (
        <>
        <ItemDetail product={product}/>
        </>
    )

}


// const ItemDetailContainer = () => {

    // const getProducts = async()=>{
    //     const response = await fetch ("https://fakestoreapi.com/products")
    //     const data = await response.json()

    //     return data
    // }

//     const [product, setProduct] = useState([]); 

//     useEffect(()=>{
//         getProducts().then((product)=> setProduct(product))
//     }, [])
//     return (
//         <div>
//             <ItemDetail product={product} />
//         </div>  
//     )

// }

export default ItemDetailContainer