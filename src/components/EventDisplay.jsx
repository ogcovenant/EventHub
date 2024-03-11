import { Box, Text, Flex } from "@chakra-ui/react"
import EventDisplayCard from "./EventDisplayCard"

const EventDisplay = () => {
  return (
    <>
      <Box mt={{ base:2 }} p={8} pb={0} display={"flex"} justifyContent={"space-between"}>
        <Flex>
          <Box fontSize={24} display={"flex"} gap={1}>Upcoming <Text color={"#7848F4"}>Events</Text></Box>
        </Flex>
      </Box>   
      <Flex p={8} mt={-8} justifyContent={"space-around"} flexWrap={"wrap"} >
        <EventDisplayCard />
        <EventDisplayCard />
        <EventDisplayCard />
        <EventDisplayCard />
        <EventDisplayCard />
        <EventDisplayCard />
        <EventDisplayCard />
        <EventDisplayCard />
      </Flex>
    </>
  )
}

export default EventDisplay