import { Box, Text, Select, Flex } from "@chakra-ui/react"
import EventDisplayCard from "./EventDisplayCard"

const EventDisplay = () => {
  return (
    <>
      <Box mt={20} p={8} pb={0} display={"flex"} justifyContent={"space-between"}>
        <Flex>
          <Box fontSize={24} display={"flex"} gap={1}>Upcoming <Text color={"#7848F4"}>Events</Text></Box>
        </Flex>
        <Flex gap={3}>
          <Box>
            <Select backgroundColor={"#687C942F"} border={"none"} color={"black"} placeholder="Weekdays" id="weekdays" name="weekdays" cursor={"pointer"}>
              <option value="Party">Monday</option>
              <option value="Bootcamp">Saturday</option>
            </Select>
          </Box>
          <Box>
            <Select backgroundColor={"#687C942F"} border={"none"} color={"black"} placeholder="Event Type" id="eventType" name="eventType" cursor={"pointer"}>
              <option value="Party">Lagos</option>
              <option value="Bootcamp">Abuja</option>
            </Select>
          </Box>
          <Box>
            <Select backgroundColor={"#687C942F"} border={"none"} color={"black"} placeholder="Any Category" id="category" name="category" cursor={"pointer"}>
              <option value="Morning">Online</option>
              <option value="Afternoon">Onsite</option>
            </Select>
          </Box>
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