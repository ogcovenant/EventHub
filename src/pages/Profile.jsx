import { Box, Text, Input, Image } from "@chakra-ui/react"
import { useState } from "react";
import { useFormik } from "formik"
import * as Yup from "yup"

const Profile = () => {
  const [ file,setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files)
    setFile(URL.createObjectURL(e.target.files[0]))

  }
 
  const formik = useFormik({
    initialValues:{
      username: "just_covenant_",
      email: "justcovenant@gmail.com",
      password: "Covenant@07",
    },
    validationSchema: Yup.object({
      username: Yup.string().min(3, "username can not be less than 3 characters"),
      email: Yup.string().email("Invalid email address"),
      password: Yup.string().min(8, "Password can not be less than 8 characters"),
    }),
    onSubmit: async (values) => {
      console.log(values);
    }
  })

  return (
    <>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <form onSubmit={formik.handleSubmit}>
        <Box mt={16}>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Box width={"100px"} height={"100px"} backgroundColor={"black"} borderRadius={"50%"}>
              <Image width={"100%"} height={"100%"} objectFit={"cover"} borderRadius={"50%"} src={file}/>
              
            </Box>
            <Text as={"label"} htmlFor="profilePic" mt={1} color={"blue"} cursor={"pointer"}>Change Avatar</Text>
            <Input onChange={handleChange} type="file" display={"none"} name="profilePic" id="profilePic" accept="image/*"/>

          </Box>
          <Box mt={6}>
            <Box display={"flex"} gap={{ base:"5px", md:"20px" }}>
              <Box width={"50%"}>
                <label htmlFor="username">username</label>
                <Input type="text" name="username" id="username" placeholder="john_doe" value={formik.values.username} onBlur={formik.handleBlur} onChange={formik.handleChange} border={"1px solid grey"}/>
                {formik.errors.username && formik.touched.username ? (<Text color={"red"} fontSize={12}>{formik.errors.username}</Text>) : null}
              </Box>
              <Box width={"50%"}>
                <label htmlFor="email">email</label>
                <Input type="email" name="email" id="email" placeholder="john@doe.com" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} border={"1px solid grey"}/>
                {formik.errors.email && formik.touched.email ? (<Text color={"red"} fontSize={12}>{formik.errors.email}</Text>) : null}
              </Box>
            </Box>
            <Box mt={5}>
              <label htmlFor="password">password</label>
              <Input type="password" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="👻👻👻👻👻👻👻👻" border={"1px solid grey"}/>
              {formik.errors.password && formik.touched.password ? (<Text color={"red"} fontSize={12}>{formik.errors.password}</Text>) : null}
            </Box>
            <Box textAlign={"center"}>
              <Text as={"button"} mt={"8"} type="submit" color={"blue"}> Save Changes </Text>
            </Box>
          </Box>
        </Box>
      </form>
      </Box>
    </>
  )
}

export default Profile