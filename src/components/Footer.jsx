import logo from "../assets/logo2.png"
import { Image, Box, Text } from "@chakra-ui/react"

const Footer = () => {
  return (
    <>
      <Box mt={10} backgroundColor={"#10107B"} p={10} display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Image as={"img"} src={logo} width={120}/>
        <Text color={"white"} mt={5}>©2024 Covenant Ogowale </Text>
      </Box>
    </>
  )
}

export default Footer