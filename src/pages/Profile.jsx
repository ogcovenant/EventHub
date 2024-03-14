import { Box, Text, Input, Image } from "@chakra-ui/react"
import { useState,useEffect, useRef } from "react";
import { useFormik } from "formik"
import * as Yup from "yup"

const Profile = () => {
  const [ filePath,setFilePath] = useState();
  const [file, setFile] = useState(null)
  const [ user ,setUser ] = useState([]);
  const formRef = useRef(null)

  const token = localStorage.getItem("token");


  const fetchUser = async () => {
    const result = await fetch("http://localhost:3000/profile", {
        headers: {
          "authorization" : `Bearer ${token}`
        }
    })
    const user = await result.json();
    setUser(user.user[0])
    console.log(user.user[0])
  }

  useEffect(() =>{

    fetchUser();

  },[])
 

  const handleSubmit = async (e) => {

      const formData = new FormData(e.current);
      formData.append("profilePic", file)
      const res = await fetch("http://localhost:3000/profile/edit", {
        method: "PUT",
        headers: {
          "authorization": `Bearer ${token}`
        },
        body: formData

      })
    
      const msg = await res.json();
      console.log(msg)
  }

  function handleChange(e) {
    setFilePath(URL.createObjectURL(e.target.files[0]))
    setFile(e.target.files[0])
  }
 
  const formik = useFormik({
    initialValues:{
      username: user.username,
      email: user.email,
      password: "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      username: Yup.string().min(3, "username can not be less than 3 characters"),
      email: Yup.string().email("Invalid email address"),
      password: Yup.string().min(8, "Password can not be less than 8 characters"),
    }), 
    onSubmit: () => {
      handleSubmit(formRef);
    }
  })

  return (
    <>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Box mt={16}>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Box width={"100px"} height={"100px"} backgroundColor={"black"} borderRadius={"50%"}>
              <Image width={"100%"} height={"100%"} objectFit={"cover"} borderRadius={"50%"} src={user.profilePic}/>       
            </Box>
            <Text as={"label"} htmlFor="profilePic" mt={1} color={"blue"} cursor={"pointer"}>Change Avatar</Text>
            <Input as={"input"} onChange={handleChange} type="file" display={"none"} name="profilePic" id="profilePic" accept="image/*"/>

          </Box>
          <Box mt={6}>
            <form ref={formRef} onSubmit={formik.handleSubmit}>
            <Box display={"flex"} gap={{ base:"5px", md:"20px" }}>
              <Box width={"50%"}>
                <label htmlFor="username">username</label>
                <Input as={"input"} type="text" name="username" id="username" placeholder="john_doe" value={formik.values.username} onBlur={formik.handleBlur} onChange={formik.handleChange} border={"1px solid grey"}/>
                {formik.errors.username && formik.touched.username ? (<Text color={"red"} fontSize={12}>{formik.errors.username}</Text>) : null}
              </Box>
              <Box width={"50%"}>
                <label htmlFor="email">email</label>
                <Input as={"input"} type="email" name="email" id="email" placeholder="john@doe.com" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} border={"1px solid grey"}/>
                {formik.errors.email && formik.touched.email ? (<Text color={"red"} fontSize={12}>{formik.errors.email}</Text>) : null}
              </Box>
            </Box>
            <Box mt={5}>
              <label htmlFor="password">password</label>
              <Input as={"input"} type="password" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="👻👻👻👻👻👻👻👻" border={"1px solid grey"}/>
              {formik.errors.password && formik.touched.password ? (<Text color={"red"} fontSize={12}>{formik.errors.password}</Text>) : null}
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