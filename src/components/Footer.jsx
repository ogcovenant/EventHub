import logo from "../assets/logo2.png"
import { Image, Button, Input, Box, Text } from "@chakra-ui/react"

const Footer = () => {
  return (
    <>
      <Box mt={10} backgroundColor={"#10107B"} p={10} display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Image as={"img"} src={logo} width={120}/>
        <Text color={"white"} mt={5}>Subscribe to our newsletter:</Text>
        <form style={{ width: "70%", margin: "0 auto", display:"flex", justifyContent:"center", alignItems:"center" }}>
            <Input backgroundColor={"white"} width={"30%"} m={1} placeholder="Enter Your Email" />
            <Button type="submit" mx={2}>Subscribe</Button>
        </form>
        <Text color={"white"} mt={5}>©2024 Covenant Ogowale </Text>
      </Box>
    </>
  )
}

export default Footer