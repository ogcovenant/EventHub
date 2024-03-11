import eventCard from "../assets/eventCard.png"
import { Image, Box, Text, Flex } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const EventDisplayCard = () => {
  return (
    <>
      <Box mt={7} boxShadow={"2xl"} width={{ base:"100%", md:"45%", lg:"23%" }} p={5} borderRadius={15} backgroundColor={"white"} cursor={"pointer"}>
        <Link to={"/event"}>
          <Flex flexDirection={"column"}>
            <Box position={"relative"} width={"100%"}>
              <Image as={"img"} src={eventCard} width={"100%"}/>
              <Text position={"absolute"} top={2} left={2} color={"#7848F4"} backgroundColor={"white"} p={1} borderRadius={5} fontSize={13}>FREE</Text>
            </Box>
            <Text mt={3} fontSize={17} className="text">BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow</Text>
            <Text mt={5} fontSize={14}>Saturday, March 18, 9.30PM</Text>
            <Text mt={5} color={"#000000af"}>ONLINE EVENT - Attend anywhere</Text>
          </Flex>
        </Link>
      </Box>
    </>
  )
}

export default EventDisplayCard