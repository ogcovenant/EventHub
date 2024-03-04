import { Flex, Image, Box, Button, Text } from "@chakra-ui/react"
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <>
      <Flex p={5} justifyContent={"space-between"}>
        <Image as={'img'} src={logo} width={150}/>
        <Box display={"flex"} gap={8} alignItems={"center"}>
          <Text as={"a"} href="/login" color={"#7848F4"}>Login</Text>
          <Button as={"a"} href="/signup" fontWeight={200} backgroundColor={"#7848F4"} color={"white"} _hover={{backgroundColor: "#7848F4", color:"white"}}>Register</Button>
        </Box>
      </Flex>
    </>
  )
}

export default Header