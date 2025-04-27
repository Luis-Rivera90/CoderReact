import { Flex, Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import CartWidget from "./CartWidget";


const NavBar = () => {
    return <Flex justifyContent="space-between" alignItems="center" width="100vw" padding="20px 20px" height="7%" border="1px solid #2e2e2e">
        
  <Menu>
    <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
    />
    <MenuList>
     <MenuItem>Login</MenuItem>
     <MenuItem>Compra</MenuItem>
     <MenuItem>Renta</MenuItem>
     <MenuItem>Perfil</MenuItem>
     <MenuItem>Contáctanos</MenuItem>
    </MenuList>
  </Menu>
      <h2>VERTICAL Ski & Snowboard</h2> 
      <CartWidget/>
      
    </Flex>;
};

export default NavBar;