import { Box, Text, Input } from "@chakra-ui/react"

const Profile = () => {
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Text fontSize={38}>Profile</Text>
        <Box mt={5}>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Box width={"60px"} height={"60px"} backgroundColor={"white"} borderRadius={"50%"}></Box>
            <Text mt={1} color={"blue"} cursor={"pointer"}>Change Avatar</Text>
          </Box>
          <Box mt={6}>
            <form>
              <Box display={"flex"} gap={"20px"}>
                <Box>
                  <label htmlFor="username">username</label>
                  <Input type="text" name="username" id="username" placeholder="john_doe" border={"1px solid grey"}/>
                </Box>
                <Box>
                  <label htmlFor="email">email</label>
                  <Input type="email" name="email" id="email" placeholder="john@doe.com" border={"1px solid grey"}/>
                </Box>
              </Box>
              <Box mt={5}>
                <label htmlFor="password">password</label>
                  <Input type="password" name="password" id="password" placeholder="👻👻👻👻👻👻👻👻" border={"1px solid grey"}/>
              </Box>
              <Box textAlign={"center"}>
                <Text as={"button"} mt={"8"} type="submit" color={"blue"}> Save Changes </Text>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Profile