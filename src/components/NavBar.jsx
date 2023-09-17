import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Box,
    Spacer,
    Flex
} from '@chakra-ui/react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (

        <div className='navbar'><Flex>
            <Box p='4' bg='yellow.500'>
                <Link to={"/"} >
                    <h3>Versalles-Store</h3>
                </Link>
            </Box>
            <Spacer />
            <Box p='4'>
                <Menu>
                    <MenuButton>
                        Categorias
                    </MenuButton>
                    <MenuList>
                        <Link to={"/category/A"}><MenuItem>Categoria A</MenuItem></Link>
                        <Link to={"/category/B"}><MenuItem>Categoria B</MenuItem></Link>
                        <Link to={"/category/C"}><MenuItem>Categoria C</MenuItem></Link>
                    </MenuList>
                </Menu>
            </Box>
            <Spacer />
            <Box p='4'>
                <Link to={"/cart"} >
                    <CartWidget/>
                </Link>
            </Box>
            
        </Flex>
        </div>
    )
}

export default NavBar