import { Box, Image, Button, Flex, Text } from "@chakra-ui/react"
import { Link, useParams } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from "react";

const Event = () => {

  const params = useParams();
  const id = params.id
  const [event, setEvent] = useState([])
  const [creator, setCreator] = useState([])
  const token = localStorage.getItem("token")

  const fetchEventData = async () => {
    
    const res = await fetch(`http://localhost:3000/event/${id}`);

    const event = await res.json()

   setEvent(event.event)
   setCreator(event.creator)


  }


  useEffect(() => {

    fetchEventData();
    
  },[])

  const register = async() => {
    const res = await fetch(`http://localhost:3000/event/register/${id}`, {
      method: "POST",
      headers: {
        "authorization": `Bearer ${token}`
      }
    })

    const msg = await res.json();
    console.log(msg)
  }

  return (
    <>
      <Box mt={5} position={"relative"} my={{ base:5, md:20 }}>
      <Link to={"/"}><Button mx={10} backgroundColor={"black"} color={"white"} fontWeight={100}><FaArrowLeft />&nbsp;Back</Button></Link>
        <Flex p={10} alignItems={"center"} flexDirection={{ base:"column", lg:"row" }}>
          <Box width={"50%"} position={"relative"}>
            <Image borderRadius={20} src={event.banner_url} width={"100%"} height={"40vh"} objectFit={"cover"}/>
          </Box>
          <Flex m={5}>
            <Box>
              <Text fontWeight={700} fontSize={32}>{event.name}</Text>
              <Text mt={1}>By&nbsp;&nbsp;{creator.username}</Text>
              <Text mt={1}>{new Date(event.date).toDateString()}</Text>
              <Text mt={1}>{event.start_time} - {event.end_time}</Text>
              <Text mt={3} textAlign={"justify"}>{event.description}</Text>
              <Button onClick={register} fontWeight={"100"} backgroundColor={"#7848F4"} color={"white"} _hover={{backgroundColor: "#7848F4", color:"white"}} mt={3}>Register to this event</Button>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default Event