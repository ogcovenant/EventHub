import { Box, Image, Button, Heading, Flex, Text } from "@chakra-ui/react"
import eventHero from "../assets/eventHero.png"
import { Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa";
import EventDisplay from "../components/EventDisplay"

const Event = () => {
  return (
    <>
      <Box mt={5} display={"flex"} justifyContent={"center"} position={"relative"}>
        <Box width={"90%"}>
          <Image as={"img"} src={eventHero} width={"100%"} height={"80vh"}/>
          <Box height={"100%"} width={"90%"} backgroundColor={"#000000af"} position={"absolute"} top={0} borderRadius={10} display={"flex"} p={8}>
            <Flex flexDirection={"column"} alignItems={"space-around"} width={"50%"}>
              <Box>
                <Link to="/"><Button display={"flex"} gap={1}><FaArrowLeft /> Back</Button></Link>
              </Box>
              <Box>
                <Heading fontSize={40} mt={8} color={"white"}>Dream WorldWide In Abuja</Heading>
              </Box>
              <Box color={"white"} mt={16}>
                <Text fontSize={32}>Abuja, Nigeria</Text>
                <Text mt={3}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ratione laboriosam vero officia. Itaque, repellat harum veritatis eveniet cupiditate temporibus sint similique, esse rem vitae deserunt doloribus dolor beatae voluptate?
                </Text>
              </Box>
              <Link to={"/event/register"}><Button fontWeight={100} mt={2} backgroundColor={"#7848F4"} color={"white"} _hover={{backgroundColor: "#7848F4", color:"white"}}>Register for this event</Button> </Link>
            </Flex>
          </Box>
        </Box>
      </Box>
      <EventDisplay/>
    </>
  )
}

export default Event