import eventCard from "../assets/eventCard.png"
import { Image, Box, Text } from "@chakra-ui/react"

const EventDisplayCard = () => {
  return (
    <>
      <Box mt={7} boxShadow={"2xl"} width={"23%"} p={5} borderRadius={15} backgroundColor={"white"}>
        <Box position={"relative"}>
          <Image as={"img"} src={eventCard}/>
          <Text position={"absolute"} top={2} left={2} color={"#7848F4"} backgroundColor={"white"} p={1} borderRadius={5} fontSize={13}>FREE</Text>
        </Box>
        <Text mt={3} fontSize={20}>BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow</Text>
        <Text mt={3} fontSize={14}>Saturday, March 18, 9.30PM</Text>
        <Text mt={3} color={"#ff0000"}>ONLINE EVENT - Attend anywhere</Text>
      </Box>
    </>
  )
}

export default EventDisplayCard