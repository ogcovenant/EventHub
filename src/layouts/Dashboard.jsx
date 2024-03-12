import { Outlet } from "react-router-dom"
import { Box } from "@chakra-ui/react"
import DashHeader from "../components/DashHeader"
import DashSide from "../components/DashSide"

const Dashboard = () => {
  return (
    <>
      <Box>
        <DashHeader />
        <Box display={"flex"}>
          <DashSide />
          <Box>
            <Outlet/>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Dashboard