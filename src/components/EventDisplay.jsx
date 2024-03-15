import { Box, Text, Flex } from "@chakra-ui/react"
import EventDisplayCard from "./EventDisplayCard"
import { useEffect, useState } from "react"


const EventDisplay = () => {

  const token = localStorage.getItem("token")
  const[events, setEvents] = useState([])

  const fetchEvents = async() => {
    const res = await fetch("http://localhost:3000/event/", {
      headers: {
        "authorization": `Bearer ${token}`
      }
    });
    const events = await res.json()
    setEvents(events.events)
    
  }
  useEffect(() => {
    fetchEvents()
  }, [])


  return (
    <>
      <Box mt={{ base:2 }} p={8} pb={0} display={"flex"} justifyContent={"space-between"}>
        <Flex>
          <Box fontSize={24} display={"flex"} gap={1}>Upcoming <Text color={"#7848F4"}>Events</Text></Box>
        </Flex>
      </Box>   
      <Flex p={8} mt={-8} gap={8} flexWrap={"wrap"} >
        {
          events.map((event) => {
            return(<EventDisplayCard key={event.id} bannerUrl={event.banner_url} eventName={event.name} eventDate={new Date(event.date).toDateString()} eventTime={event.start_time} id={event.id} />)
          })
        }
      </Flex>
    </>
  )
}

export default EventDisplay