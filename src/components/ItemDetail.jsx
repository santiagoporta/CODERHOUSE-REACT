import React from 'react';
import ItemCount from './ItemCount';
import { Card, Image, Stack, Text,  CardBody, Divider, Button, ButtonGroup, CardFooter, Heading,} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import {CartContext} from '../context/ShoppingCartProvider'



const ItemDetail = ({ product }) => {
  const {addItem} = useContext(CartContext);
  function handleAddItem(quantity){
    addItem(product, quantity); 
  }
  return (
        <div>
          <Card maxW='sm'>
            <CardBody>
              <Image src={product.image} borderRadius='lg' />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{product.title}</Heading>
                <Text>
                  {product.description}
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                  ${product.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <ItemCount handleAddItem={handleAddItem}/>
          </ButtonGroup>
          <ItemCount />
        </CardFooter>
      </Card>
    </div>
  );
}



export default ItemDetail;