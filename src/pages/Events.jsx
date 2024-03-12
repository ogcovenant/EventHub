import { Box, Text } from "@chakra-ui/react"
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

const Events = () => {
  return (
    <>
      <Box>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={"full"} gap={"8"}>
          <Box backgroundColor={"green"} width={"20%"} color={"white"} p={5} borderRadius={12} textAlign={"center"}>
            <Text fontSize={22}>Events Created</Text>
            <Text fontSize={42}>4</Text>
          </Box>
          <Box backgroundColor={"red"} width={"20%"} color={"white"} p={5} borderRadius={12} textAlign={"center"}>
            <Text fontSize={22}>Events Registered</Text>
            <Text fontSize={42}>9</Text>
          </Box>
          <Box backgroundColor={"blue"} width={"20%"} color={"white"} p={5} borderRadius={12} textAlign={"center"}>
            <Text fontSize={22}>Events Attended</Text>
            <Text fontSize={42}>7</Text>
          </Box>
        </Box>
        <Box mt={10}>
          <Text fontSize={32} textAlign={"center"} mb={3}>Events Created</Text>
          <TableContainer width={"90%"} margin={"0 auto"} height={"40vh"} overflowY={"scroll"}>
            <Table>
              <Thead>
                <Tr>
                  <Th>s/n</Th>
                  <Th>Event title</Th>
                  <Th>No of registrants</Th>
                  <Th>Date</Th>
                  <Th>Time</Th>
                  <Th>Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>1</Td>
                  <Td>Coding Bootcamp</Td>
                  <Td>5</Td>
                  <Td>11/2/2024</Td>
                  <Td>11:22am</Td>
                  <Td>Pending</Td>
                </Tr>
                <Tr>
                  <Td>2</Td>
                  <Td>Jesus Party</Td>
                  <Td>7</Td>
                  <Td>21/8/2024</Td>
                  <Td>2:00pm</Td>
                  <Td>In Progress</Td>
                </Tr>
                <Tr>
                  <Td>3</Td>
                  <Td>In house party</Td>
                  <Td>12</Td>
                  <Td>18/6/2024</Td>
                  <Td>12:30am</Td>
                  <Td>Completed</Td>
                </Tr>
                <Tr>
                  <Td>4</Td>
                  <Td>Coding Bootcamp</Td>
                  <Td>5</Td>
                  <Td>11/2/2024</Td>
                  <Td>11:22am</Td>
                  <Td>Pending</Td>
                </Tr>
                <Tr>
                  <Td>5</Td>
                  <Td>Coding Bootcamp</Td>
                  <Td>5</Td>
                  <Td>11/2/2024</Td>
                  <Td>11:22am</Td>
                  <Td>Pending</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  )
}

export default Events