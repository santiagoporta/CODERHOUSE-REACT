import React from 'react';
import ItemCount from './ItemCount';
import {
  Card,
  Image,
  Stack,
  Text,
  CardBody,
  Divider,
  Button,
  ButtonGroup,
  CardFooter,
  Heading,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const ItemDetail = ({ product }) => {
  const { id } = useParams();
  let filteredProduct = product.filter((p) => p.id == id); 

  if (!filteredProduct.length) {
    return <div>Cargando producto ...</div>;
  } else {
    return (
      <div>
        <Card maxW='sm'>
          <CardBody>
            <Image src={filteredProduct[0].image} borderRadius='lg' />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{filteredProduct[0].title}</Heading>
              <Text>
                {filteredProduct[0].description}
                </Text>
              <Text color='blue.600' fontSize='2xl'>
                ${filteredProduct[0].price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
            </ButtonGroup>
            <ItemCount />
          </CardFooter>
        </Card>
      </div>
    );
  }
};

export default ItemDetail;