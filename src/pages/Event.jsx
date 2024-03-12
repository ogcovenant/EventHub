import { Box, Image, Button, Flex, Text } from "@chakra-ui/react"
import eventHero from "../assets/eventHero.png"
import { Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa";

const Event = () => {
  return (
    <>
      <Box mt={5} position={"relative"} my={{ base:5, md:20 }}>
      <Link to={"/"}><Button mx={10} backgroundColor={"black"} color={"white"} fontWeight={100}><FaArrowLeft />&nbsp;Back</Button></Link>
        <Flex p={10} alignItems={"center"} flexDirection={{ base:"column", lg:"row" }}>
          <Box width={"95%"} position={"relative"}>
            <Image as={"img"} borderRadius={20} src={eventHero} width={"100%"} height={"40vh"} objectFit={"cover"}/>
          </Box>
          <Flex m={5}>
            <Box>
              <Text fontWeight={700} fontSize={32}>Dream Wold</Text>
              <Text mt={1}>By Covenant Ogowale</Text>
              <Text>Saturday 12th July, 2024</Text>
              <Text mt={3} textAlign={"justify"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint mollitia doloribus, velit voluptates necessitatibus possimus veritatis labore pariatur inventore quis ea, repellat animi obcaecati, reiciendis sed quas perspiciatis eligendi quos!</Text>
              <Link to="/event/register"><Button fontWeight={"100"} backgroundColor={"#7848F4"} color={"white"} _hover={{backgroundColor: "#7848F4", color:"white"}} mt={3}>Register to this event</Button></Link>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default Event