import { Box, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useState } from "react"

const DashSide = () => {

  const [active, setActive] = useState("profile");
  
  const profileChange = () => {
    setActive("profile")
  }

  const eventsChange = () => {
    setActive("events")
  }

  const notificationsChange = () => {
    setActive("notifications")
  }

  return (
    <>
      <Box width={"15%"} height={"87vh"} borderTopRightRadius={"15px"} display={"flex"} flexDirection={"column"} gap={5} py={20}>
        <Link to="/dashboard/profile"><Button className={active === "profile" ? "active": ""} onClick={profileChange} width={"80%"} fontWeight={100} backgroundColor={"#7848F4"} color={"white"} _hover={{backgroundColor: "#7848F4", color:"white"}} borderRadius={"0px"} borderRightRadius={"15px"} fontSize={"20px"} p={6}>Profile</Button></Link>
        <Link to={"/dashboard/events"}><Button className={active === "events" ? "active": ""} onClick={eventsChange} width={"80%"} fontWeight={100} backgroundColor={"#7848F4"} color={"white"} _hover={{backgroundColor: "#7848F4", color:"white"}} borderRadius={"0px"} borderRightRadius={"15px"} fontSize={"20px"} p={6} >Events</Button></Link>
        <Link to="/dashboard/notifications"><Button className={active === "notifications" ? "active": ""} onClick={notificationsChange} width={"80%"} fontWeight={100} backgroundColor={"#7848F4"} color={"white"} _hover={{backgroundColor: "#7848F4", color:"white"}} borderRadius={"0px"} borderRightRadius={"15px"} fontSize={"20px"} p={6}>Notification</Button></Link>
      </Box>
    </>
  )
}

export default DashSide