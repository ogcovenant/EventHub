import { Flex, Image, Box, Input, Text, Button, useToast } from "@chakra-ui/react"
import logo from "../assets/logo.png"
import login from "../assets/login.png"
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup"

const Login = () => {

  const toast = useToast();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email:"",
      password:""
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().min(8, "Password can not be less than 8 characters").required("Required")
    }),
    onSubmit: async (values) => {
      const result = await fetch("http://localhost:3000/auth/login", {
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify({
          email: values.email,
          password: values.password
        })
      })

      const msg = await result.json()
      
      if(msg.msg){

        if(msg.token){
          localStorage.setItem("token", msg.token);
          console.log(localStorage.getItem("token"))
        }

        toast({
          title: `${msg.msg}`,
          status: "success",
          position: "top-right",
          variant: "left-accent",
          isClosable: true,
        })

        navigate("/", { replace: true });
      }

      if(msg.error){
        return toast({
          title: `${msg.error}`,
          status: "error",
          position: "top-right",
          variant: "left-accent",
          isClosable: true,
        })
      }
    }
  })

  return (
    <>
      <Flex alignItems={"center"}>
        <Image as={"img"} src={login} width={"40%"} height={"100vh"} display={{ base:"none", lg:"block" }}/>
        <Box backgroundColor={"#F8F8FA"} height={"100vh"} width={{ base:"100%" }} p={10} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
          <Flex alignItems={"center"} justifyContent={"center"} gap={2}>
            <Text fontSize={20}>Log In to</Text>
            <Image as={"img"} src={logo} width={120}/>
          </Flex>
          <form style={{ marginTop: 10 }} onSubmit={formik.handleSubmit}>
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
            <Box width={"100%"} display={"flex"} justifyContent={"center"}>
              <Button width={"100%"} fontWeight={100} backgroundColor={"#7848F4"} color={"white"} _hover={{backgroundColor: "#7848F4", color:"white"}} mt={5} as={"button"} type="submit">Log In</Button>
            </Box>
          </form>
          <Text mt={3}>Or</Text>
          <Button width={{ base:"90%", sm:"55%", md:"40%" }} fontWeight={100} p={5} border={"1px solid #687C94"} backgroundColor={"white"} color={"#7848F4"} _hover={{backgroundColor: "white", color:"#7848F4"}} mt={5} as={"button"} type="submit"><FcGoogle />&nbsp;Continue with Google</Button>
          <Text mt={5} display={"flex"} gap={1}>Don&apos;t have an account? <Link to="/signup"><Text color="#7848F4">Sign Up</Text></Link></Text>
        </Box>
      </Flex>
    </>
  )
}

export default Login