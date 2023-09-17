import React from 'react'
import Item from './Item'

const ItemList = ({product}) => {
  return (
    <div>
        {
            product.map((p,index)=> {
                return(
                    <Item product={p} key={index}/>
                )
            })
        }
    </div>
  )
}

export default ItemList