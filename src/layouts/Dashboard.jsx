import { Outlet } from "react-router-dom"
import { Box } from "@chakra-ui/react"
import DashHeader from "../components/DashHeader"
import DashSide from "../components/DashSide"

const Dashboard = () => {
  return (
    <>
      <Box height={"100vh"}>
        <DashHeader />
        <Box display={"flex"}>
          <DashSide />
          <Box width={"85%"} p={5}>
            <Outlet/>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Dashboard