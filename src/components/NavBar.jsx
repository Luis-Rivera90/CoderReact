import { Flex, Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import CartWidget from "./CartWidget";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { getAllCategories } from "../services/products.service";


const NavBar = () => {

  const navigate = useNavigate();
  const [categories, setCategories] = useState ([]);
  useEffect(() => {
    getAllCategories()
    .then((res) => setCategories(res.data))
    .catch((error) => console.error(error))
  }, [])

  return <Flex justifyContent="space-between" alignItems="center" width="100vw" padding="20px 20px" height="7%" border="1px solid #2e2e2e" cursor={"pointer"}>

    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<HamburgerIcon />}
        variant='outline'
      />
      <MenuList height={"100px"}>
        {
          categories.map(item => {
            return <MenuItem key={item.slug} onClick={() => navigate(`/category/${item.slug}`)}> {item.name} </MenuItem>
          })
        }
      </MenuList>
    </Menu>
    <h2 onClick={() => navigate("/")}>VERTICAL Ski & Snowboard</h2>
    <CartWidget />

  </Flex>;
};

export default NavBar;