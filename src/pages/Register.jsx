import { Box, Text, Input, Button } from "@chakra-ui/react"
import { FaArrowLeft } from "react-icons/fa"
import { Link } from "react-router-dom"

const Register = () => {
  return (
    <>
      <Box>
          <Box position={"relative"} left={5}>
            <Link to="/event"><Button display={"flex"} gap={1} fontWeight={100} backgroundColor={"black"} color={"white"} _hover={{ backgroundColor:"black", color:"white" }}><FaArrowLeft /> Back</Button></Link>
          </Box>
        <Text fontSize={"5xl"} textAlign={"center"}>Registration</Text>
        <Text textAlign={"center"}>Register to Dream WorldWide In Abuja</Text>
        <Box display={"flex"} justifyContent={"center"} mt={8}>
          <form>
          <Box>
              <label htmlFor="name">Your Name:</label>
              <Input border={"1px solid blue"} type="text" name="name" id="name"/>
            </Box>
            <Box mt={3}>
              <label htmlFor="email">Your Email:</label>
              <Input border={"1px solid blue"} type="email" name="email" id="email"/>
            </Box>
            <Button width={"100%"} fontWeight={100} mt={3} backgroundColor={"#7848F4"} color={"white"} _hover={{backgroundColor: "#7848F4", color:"white"}}>Submit</Button>
          </form>
        </Box>
      </Box>
    </>
  )
}

export default Register