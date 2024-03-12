import { Flex, Image, Box, Button } from "@chakra-ui/react"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import { FaBars} from "react-icons/fa"
import { FaXmark } from "react-icons/fa6";
import { useState } from "react"
import { useLockScroll } from './useLockBodyScroll'

const DashHeader = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => {
    if(menuOpen){
      setMenuOpen(false);
    }else{
      setMenuOpen(true);
    }
  }

  useLockScroll(menuOpen)

  return (
    <>
      <Flex p={5} justifyContent={"space-between"} alignItems={"center"}>
        <Link to={"/"}><Image as={'img'} src={logo} width={150}/></Link>
        <Box onClick={openMenu} display={{ md:"none" }}>
          <FaBars fontSize={22}/>
        </Box>
      </Flex>
      {
        menuOpen && 
        <Box display={{ md:"none" }} position={"absolute"} top={0} height={"100vh"} backgroundColor={"#ffffff"} width={"100%"} zIndex={999}>
          <Box onClick={openMenu} position={"absolute"} right={5} top={5}>
            <FaXmark fontSize={30}/>
          </Box>
          <Box position={"absolute"} top={32} p={10} width={"100%"}>
            <Button as={Link} to="/login" width={"100%"} fontWeight={100} backgroundColor={"#7848F4"} color={"white"} _hover={{backgroundColor: "#7848F4", color:"white"}}>Login</Button>
            <Button as={Link} to="/signup" width={"100%"} mt={5} fontWeight={100} backgroundColor={"#7848F4"} color={"white"} _hover={{backgroundColor: "#7848F4", color:"white"}}>Register</Button>
          </Box>
        </Box> 
      }
    </>
  )
}

export default DashHeader