import { Flex, Image, Box, Button, Text, useToast } from "@chakra-ui/react"
import logo from "../assets/logo.png"
import { Link, useNavigate } from "react-router-dom"
import { FaBars} from "react-icons/fa"
import { FaXmark } from "react-icons/fa6";
import { useState, useEffect } from "react"
import { useLockScroll } from './useLockBodyScroll'

const Header = () => {
  
  const navigate = useNavigate();
  const toast = useToast();
  const [token, setToken] = useState(localStorage.getItem("token"))


  useEffect(() => {

    if(!token){
      navigate("/", { replace: true })
      
      toast({
        title: `Logout Successful`,
        status: "success",
        position: "top-right",
        variant: "left-accent",
        isClosable: true,
      })
    }

  }, [ token ])

  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => {
    if(menuOpen){
      setMenuOpen(false);
    }else{
      setMenuOpen(true);
    }
  }

  useLockScroll(menuOpen)

  const logout = () => {
    localStorage.removeItem("token")
    setToken("")
  }

  return (
    <>
      <Flex p={5} justifyContent={"space-between"} alignItems={"center"} >
        <Link to={"/"}><Image as={'img'} src={logo} width={150}/></Link>
        {
          !token && 
            <Box>
              <Box display={{ base:"none", md:"flex" }} gap={8} alignItems={"center"}>
              <Text as={Link} to="/login" color={"#7848F4"}>Login</Text>
              <Button as={Link} to="/signup" fontWeight={100} backgroundColor={"#7848F4"} color={"white"} _hover={{backgroundColor: "#7848F4", color:"white"}}>Register</Button>
            </Box>
            <Box onClick={openMenu} display={{ md:"none" }}>
              <FaBars fontSize={22}/>
            </Box>
          </Box>
        }
        {
          token && 
          <Box display={"flex"} gap={5} alignItems={"center"}>
            <Text as={"button"} onClick={logout} color={"red"}>Logout</Text>
            <Link to={"/dashboard"}>
              <Box width={"40px"} height={"40px"} backgroundColor={"black"} borderRadius={"50%"}>
              
              </Box>
            </Link>
          </Box>
        }
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

export default Header