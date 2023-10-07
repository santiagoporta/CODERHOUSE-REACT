import React, { useContext } from 'react'
import Form from './Form'
import { CartContext } from '../context/ShoppingCartContext'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'



const Cart = () => {

  const {cart} = useContext(CartContext)

  return (
    <div> Tu Compra

      {cart.lenght > 0?
      <Form/>
      :
      <Button>
        <Link to={'/'}>Regresar a al tienda</Link>
      </Button>
    }
    </div>
  )
}

export default Cart