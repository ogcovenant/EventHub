import { Box, Text, Input } from "@chakra-ui/react"

const Profile = () => {
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Box mt={16}>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Box width={"60px"} height={"60px"} backgroundColor={"black"} borderRadius={"50%"}></Box>
            <Text mt={1} color={"blue"} cursor={"pointer"}>Change Avatar</Text>
          </Box>
          <Box mt={6}>
            <form>
              <Box display={"flex"} gap={{ base:"5px", md:"20px" }}>
                <Box width={"50%"}>
                  <label htmlFor="username">username</label>
                  <Input type="text" name="username" id="username" placeholder="john_doe" value={"just_covenant_"} border={"1px solid grey"}/>
                </Box>
                <Box width={"50%"}>
                  <label htmlFor="email">email</label>
                  <Input type="email" name="email" id="email" placeholder="john@doe.com" value={"justcovenant@gmail.com"} border={"1px solid grey"}/>
                </Box>
              </Box>
              <Box mt={5}>
                <label htmlFor="password">password</label>
                  <Input type="password" name="password" id="password" value={"12345678"} placeholder="👻👻👻👻👻👻👻👻" border={"1px solid grey"}/>
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