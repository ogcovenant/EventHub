import signup from "../assets/signup.png"
import logo from "../assets/logo.png"
import { Image, Box, Flex, Text, Input, Button, useToast } from "@chakra-ui/react"
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
// import axios from "axios";

const Signup = () => {
  // const toast = useToast();

  const formik = useFormik({
    initialValues: {
      username:"",
      email:"",
      password:"",
      cPassword:"",
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Required').min(3, "Must be 3 characters or more"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().min(8, "Password can not be less than 8 characters").required("Required"),
      cPassword: Yup.string().min(8, "Passwords do not match").required("Required").oneOf([Yup.ref("password"), null], "Passwords do not match")
    }),
    onSubmit: async (values) => {
      console.log(values);
    }
  })

  return (
    <>
      <Flex justifyContent={"center"}>
        <Image as={"img"} src={signup} width={"40%"} height={"100vh"} display={{ base:"none", lg:"block" }}/>
        <Box backgroundColor={"#F8F8FA"} height={"100vh"} width={{ base: "100%" }} p={10} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
          <Flex alignItems={"center"} justifyContent={"center"} gap={2}>
            <Text fontSize={20}>Sign Up to</Text>
            <Image as={"img"} src={logo} width={120}/>
          </Flex>
          <form style={{ marginTop: 10 }} onSubmit={formik.handleSubmit}>
            <Box mt={5} fontSize={14}>
              <label htmlFor="username">username</label>
              <Input onChange={formik.handleChange} value={formik.values.username} onBlur={formik.handleBlur} placeholder="john_doe" border={"1px solid #7848F4"} backgroundColor={"white"} type="text" name="username" id="username"/>
              {formik.errors.username && formik.touched.username ? (<Text color={"red"} fontSize={12}>{formik.errors.username}</Text>) : null}
            </Box>
            <Box mt={5} fontSize={14}>
              <label htmlFor="email">email</label>
              <Input onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} placeholder="johndoe@mail.co" border={"1px solid #7848F4"} backgroundColor={"white"} type="email" name="email" id="email"/>
              {formik.errors.email && formik.touched.email ? (<Text color={"red"} fontSize={12}>{formik.errors.email}</Text>) : null}
            </Box>
            <Box mt={5} fontSize={14}>
              <label htmlFor="password">password</label>
              <Input onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} placeholder="👻👻👻👻👻👻👻👻" border={"1px solid #7848F4"} backgroundColor={"white"} type="password" name="password" id="password"/>
              {formik.errors.password && formik.touched.password ? (<Text color={"red"} fontSize={12}>{formik.errors.password}</Text>) : null}
            </Box>
            <Box mt={5} fontSize={14}>
              <label htmlFor="cPassword">confirm password</label>
              <Input onChange={formik.handleChange} value={formik.values.cPassword} onBlur={formik.handleBlur} placeholder="👻👻👻👻👻👻👻👻" border={"1px solid #7848F4"} backgroundColor={"white"} type="password" name="cPassword" id="cPassword"/>
              {formik.errors.cPassword && formik.touched.cPassword ? (<Text color={"red"} fontSize={12}>{formik.errors.cPassword}</Text>) : null}
            </Box>
            <Box width={"100%"} display={"flex"} justifyContent={"center"}>
              <Button width={{ base: "100%" }} fontWeight={100} backgroundColor={"#7848F4"} color={"white"} _hover={{backgroundColor: "#7848F4", color:"white"}} mt={5} as={"button"} type="submit">Register</Button>
            </Box>
          </form>
          <Text mt={3}>Or</Text>
          <Button width={{ base:"90%", sm:"55%", md:"40%" }} fontWeight={100} p={2} border={"1px solid #687C94"} backgroundColor={"white"} color={"#7848F4"} _hover={{backgroundColor: "white", color:"#7848F4"}} mt={5} as={"button"} type="submit"><FcGoogle />&nbsp;Continue with Google</Button>
          <Text mt={5} display={"flex"} gap={1}>Already have an account? <Link to="/login"><Text color="#7848F4">Log in</Text></Link></Text>
        </Box>
      </Flex>
    </>
  )
}

export default Signup