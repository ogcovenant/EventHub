import { Input, Button, Box, Image, Text } from "@chakra-ui/react"
import React from "react"
import { FaSearch } from "react-icons/fa"
import heroImg from "../assets/hero.png"

const Hero = () => {
  return (
    <>
      <Box display={"flex"} justifyContent={"center"} mt={5} position={"relative"} mb={20}>
        <Box position={"relative"} width={"90%"}>
          <Image src={heroImg} width={"100%"} height={"70vh"}/>  
          <Box position={"absolute"} width={"100%"} top={28}>
            <Text textAlign={"center"} backdropBlur={20} display={"block"} backgroundColor={"#0000006F"} p={5} fontSize={80} color={"white"}>Discover, Connect, Experience!</Text>
          </Box>
        </Box>
        <Box position={"absolute"} width={"80%"} backgroundColor={"#10107B"} bottom={-16} p={10} color={"white"} display={"flex"} justifyContent={"center"} gap={3} alignItems={"flex-end"} borderRadius={15}>
          <Box w={"90%"}>
            <Input type="text" placeholder="Search for events..." backgroundColor={"white"} color={"black"}/>
          </Box>
          <Button><FaSearch /></Button>
        </Box>
      </Box> 
    </>
  )
}

export default Hero