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
      <Box backgroundColor={"white"} p={5} width={"20%"} height={"87vh"} display={{ base:"none", md:"flex" }} flexDirection={"column"} gap={5} py={20}>
        <Link to="/dashboard/profile"><Button className={active === "profile" ? "active": ""} onClick={profileChange} width={"100%"} fontWeight={100} backgroundColor={"#687C942F"} _hover={{backgroundColor: "#687C942F"}} borderRadius={"15px"} fontSize={"20px"} p={6}>Profile</Button></Link>
        <Link to={"/dashboard/events"}><Button className={active === "events" ? "active": ""} onClick={eventsChange} width={"100%"} fontWeight={100} backgroundColor={"#687C942F"} _hover={{backgroundColor: "#687C942F"}} borderRadius={"15px"} fontSize={"20px"} p={6} >Events</Button></Link>
        <Link to="/dashboard/notifications"><Button className={active === "notifications" ? "active": ""} onClick={notificationsChange} width={"100%"} fontWeight={100} backgroundColor={"#687C942F"} _hover={{backgroundColor: "#687C942F"}} borderRadius={"15px"} fontSize={"20px"} p={6}>Notification</Button></Link>
      </Box>
    </>
  )
}

export default DashSide