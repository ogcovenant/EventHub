import { Box, Text, Input, Textarea, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"

const CreateEvent = () => {
  return (
    <>
      <Box>
        <Box position={"relative"} left={8} top={5}>
          <Link to="/event"><Button display={"flex"} gap={1} fontWeight={100} backgroundColor={"black"} color={"white"} _hover={{ backgroundColor:"black", color:"white" }}><FaArrowLeft /> Back</Button></Link>
        </Box>
        <Text fontSize={"5xl"} textAlign={"center"}>Create Event</Text>
        <Box display={"flex"} justifyContent={"center"} mt={5}>
          <form>
            <Box>
              <label htmlFor="eventName">Event Title</label>
              <Input type="text" name="eventName" id="eventName" border={"1px solid blue"}/>
            </Box>
            <Box mt={5}>
              <label htmlFor="eventVenue">Event Venue:</label>
              <Input type="text" name="eventVenue" id="eventVenue" border={"1px solid blue"}/>
            </Box>
            <Box mt={5}>
              <label htmlFor="eventDate">Event Date:</label>
              <Input type="date" name="eventDate" id="eventDate" border={"1px solid blue"}/>
            </Box>
            <Box mt={5}>
              <label htmlFor="eventStartTime">Start Time:</label>
              <Input type="time" name="eventStartTime" id="eventStartTime" border={"1px solid blue"}/>
            </Box>
            <Box mt={5}>
              <label htmlFor="eventEndTime">End Time:</label>
              <Input type="time" name="eventEndTime" id="eventEndTime" border={"1px solid blue"}/>
            </Box>
            <Box mt={5}>
              <label htmlFor="eventBanner">Event Banner:</label>
              <Input type="file" accept="image/*" name="eventBanner" id="eventBanner" border={"1px solid blue"}/>
            </Box>
            <Box mt={5}>
              <label htmlFor="eventDesc">Event Description:</label>
              <Textarea name="eventDesc" id="eventDesc" border={"1px solid blue"} resize={"none"} height={"200px"}></Textarea>
            </Box>
            <Button width={"100%"} fontWeight={100} mt={3} backgroundColor={"#7848F4"} color={"white"} _hover={{backgroundColor: "#7848F4", color:"white"}}>Submit</Button>
          </form>
        </Box>
      </Box>
    </>
  )
}

export default CreateEvent