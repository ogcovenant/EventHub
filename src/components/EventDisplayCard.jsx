import { Image, Box, Text, Flex } from "@chakra-ui/react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"


const EventDisplayCard = ({ bannerUrl, eventName, eventDate, eventTime, id }) => {
  return (
    <>
      <Box mt={7} boxShadow={"2xl"} width={{ base:"100%", sm:"45%", lg:"23%" }} p={5} borderRadius={15} backgroundColor={"white"} cursor={"pointer"}>
        <Link to={`/event/${id}`}>
          <Flex flexDirection={"column"}>
            <Box position={"relative"} width={"100%"}>
              <Image as={"img"} src={bannerUrl} width={"100%"}/>
            </Box>
            <Text mt={3} fontSize={17} className="text">{eventName}</Text>
            <Text mt={5} fontSize={14}>Date: {eventDate}</Text>
            <Text mt={1} fontSize={14}>Time: {eventTime}</Text>
          </Flex>
        </Link>
      </Box>
    </>
  )
}

EventDisplayCard.propTypes = {
  bannerUrl: PropTypes.string,
  eventName: PropTypes.string,
  eventDate: PropTypes.string,
  eventTime: PropTypes.string,
  id: PropTypes.string
}

export default EventDisplayCard