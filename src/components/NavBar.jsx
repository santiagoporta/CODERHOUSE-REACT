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

const NavBar = () => {
    return (

        <div className='navbar'><Flex>
            <Box p='4' bg='yellow.500'>
                <h3>Versalles-Store</h3>
            </Box>
            <Spacer />
            <Box p='4'>
                <Menu>
                    <MenuButton>
                        Productos
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Productos A</MenuItem>
                        <MenuItem>Productos B</MenuItem>
                        <MenuItem>Productos C</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            <Spacer />
            <Box p='4'>
                <CartWidget/>
            </Box>
            
        </Flex>
        </div>
    )
}

export default NavBar