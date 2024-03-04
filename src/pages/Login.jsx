import { Flex, Image, Box, Input, Text, Button } from "@chakra-ui/react"
import logo from "../assets/logo.png"
import login from "../assets/login.png"
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <>
      <Flex alignItems={"center"}>
        <Image as={"img"} src={login} width={"40%"} height={"100vh"}/>
        <Box backgroundColor={"#F8F8FA"} height={"100vh"} width={"60%"} p={10} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
          <Flex alignItems={"center"} justifyContent={"center"} gap={2}>
            <Text fontSize={20}>Log In to</Text>
            <Image as={"img"} src={logo} width={120}/>
          </Flex>
          <form style={{ marginTop: 10 }}>
            <Box mt={5}>
              <label htmlFor="email">email</label>
              <Input placeholder="johndoe@mail.co" border={"1px solid #7848F4"} backgroundColor={"white"} type="email" name="email" id="email"/>
            </Box>
            <Box mt={5}>
              <label htmlFor="password">password</label>
              <Input placeholder="👻👻👻👻👻👻👻👻" border={"1px solid #7848F4"} backgroundColor={"white"} type="password" name="password" id="password"/>
            </Box>
            <Box width={"100%"} display={"flex"} justifyContent={"center"}>
              <Button width={"40%"} fontWeight={100} backgroundColor={"#7848F4"} color={"white"} _hover={{backgroundColor: "#7848F4", color:"white"}} mt={5} as={"button"} type="submit">Log In</Button>
            </Box>
          </form>
          <Text mt={3}>Or</Text>
          <Button width={"40%"} fontWeight={100} p={5} border={"1px solid #687C94"} backgroundColor={"white"} color={"#7848F4"} _hover={{backgroundColor: "white", color:"#7848F4"}} mt={5} as={"button"} type="submit"><FcGoogle />&nbsp;Continue with Google</Button>
        </Box>
      </Flex>
    </>
  )
}

export default Login