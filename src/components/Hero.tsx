import { Input, Button, Box, Image, Text } from "@chakra-ui/react"
import React from "react"
import { FaSearch } from "react-icons/fa"
import heroImg from "../assets/hero.png"

const Hero = () => {
  return (
    <>
      <Box display={"flex"} justifyContent={"center"} mt={5} position={"relative"} mb={{ base:12 }}>
        <Box position={"relative"} width={"90%"}>
          <Image src={heroImg} width={"100%"} height={{ base:"30vh" }} borderRadius={{ base:30 }}/>  
          <Box position={"absolute"} width={"100%"} top={{ base:14, md:28 }}>
            <Text textAlign={"center"} backdropBlur={20} display={"block"} backgroundColor={"#0000006F"} p={5} fontSize={{ base:20, md:38 }} color={"white"}>Discover, Connect, Experience!</Text>
          </Box>
        </Box>
        <Box position={"absolute"} width={"80%"} backgroundColor={"#10107B"} bottom={{ base:-12 }} p={{ base:5 }} color={"white"} display={"flex"} justifyContent={"center"} gap={1} alignItems={"flex-end"} borderRadius={{ base:20 }}>
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