import { Divider,Flex,Box } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'

const CartWidget = () => {

  const {cart} = useContext(CartContext)

  return (
    <div>
        <Flex>
            <Box>
            <span className="material-symbols-outlined">
              shopping_cart
            </span>
            </Box>
            <Divider/>
            <Box>
                <p className='compra' >{cart.lenght}</p>
            </Box>
        </Flex>
    </div>
  )
}

export default CartWidget