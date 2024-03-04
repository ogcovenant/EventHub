import { Select, Button, Box, Image, Text } from "@chakra-ui/react"
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
        <Box position={"absolute"} width={"80%"} backgroundColor={"#10107B"} bottom={-16} p={10} color={"white"} display={"flex"} justifyContent={"space-around"} alignItems={"flex-end"} borderRadius={15}>
          <Box width={"28%"}>
            <label htmlFor="chooseEventType">Looking For</label>
            <Select backgroundColor={"white"} color={"black"} placeholder="Choose Event Type" id="chooseEventType" name="chooseEventType" cursor={"pointer"}>
              <option value="Party">Party</option>
              <option value="Bootcamp">Bootcamp</option>
            </Select>
          </Box>
          <Box width={"28%"}>
            <label htmlFor="chooseEventLocation">Location</label>
            <Select backgroundColor={"white"} color={"black"} placeholder="Choose Location" id="chooseEventLocation" name="chooseEventLocation" cursor={"pointer"}>
              <option value="Party">Lagos</option>
              <option value="Bootcamp">Abuja</option>
            </Select>
          </Box>
          <Box width={"28%"}>
            <label htmlFor="chooseEventDateTime">When</label>
            <Select backgroundColor={"white"} color={"black"} placeholder="Choose Date and Time" id="chooseEventDateTime" name="chooseEventDateTime" cursor={"pointer"}>
              <option value="Morning">Party</option>
              <option value="Afternoon">Bootcamp</option>
            </Select>
          </Box>
          <Button><FaSearch /></Button>
        </Box>
      </Box> 
    </>
  )
}

export default Hero