import { Box,Text, List, ListItem } from "@chakra-ui/react"

const Notifications = () => {
  return (
    <>
      <Box>
        <Text fontSize={32} textAlign={"center"}>Notifications</Text>
        <Box mt={5}>
          <List display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <ListItem textAlign={"center"} mb={2} borderBottom={"1px solid grey"} p={3} width={{ base:"100%", md:"80%" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, voluptatem!</ListItem>
            <ListItem textAlign={"center"} mb={2} borderBottom={"1px solid grey"} p={3} width={{ base:"100%", md:"80%" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, voluptatem!</ListItem>
            <ListItem textAlign={"center"} mb={2} borderBottom={"1px solid grey"} p={3} width={{ base:"100%", md:"80%" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, voluptatem!</ListItem>
            <ListItem textAlign={"center"} mb={2} borderBottom={"1px solid grey"} p={3} width={{ base:"100%", md:"80%" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, voluptatem!</ListItem>
          </List>
        </Box>
      </Box>
    </>
  )
}

export default Notifications