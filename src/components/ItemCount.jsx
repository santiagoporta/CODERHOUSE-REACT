import React from 'react'
import { useState } from 'react'
import { Button,Stack,Box } from '@chakra-ui/react'

const ItemCount = () => {
    const [count,setCount] = useState(0)
  return (
<div>
    <Stack direction={['column','row']} spacing='24px'>
      <Box w='40xp' h='40px'>
        <Button size='xs' onClick={() => setCount(count - 1)}>
            -
        </Button>
      </Box>
      <Box w='40xp' h='40px'>
        <p>{count}</p>
      </Box>
      <Box w='40xp' h='40px'>
        <Button size='xs' onClick={() => setCount(count + 1)}>
            +
        </Button>
      </Box>
      <Box w='40xp' h='40px'>
        <Button size='xs' onClick={() => alert(`En carrito ${count}`) }>
            Agregar
        </Button>
      </Box>
    </Stack>
  </div>



  )
}

export default ItemCount