import NotFound from "../assets/NotFound.svg"
import { Image, Box, Text, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const PageNotFound = () => {
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Image src={NotFound} width={{ base:"80%", md:"50%" }} mt={{ base:10, md:0 }}/>
        <Text fontSize={20} mt={3}>Oops</Text>
        <Text mt={1}>We can’t seem to find the page you are looking for</Text>
        <Box mt={3}>
          <Link to="/"><Button fontWeight={100} borderRadius={"60px"} backgroundColor={"#7848F4"} color={"white"} _hover={{backgroundColor: "#7848F4", color:"white"}}>Back to homepage</Button></Link>
        </Box>
      </Box>
    </>
  )
}

export default PageNotFound