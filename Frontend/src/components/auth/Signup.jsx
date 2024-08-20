import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Button } from "../ui/button"
import {toast } from "sonner"

import { Link, useNavigate } from "react-router-dom"
import Navbar from "../shared/Navbar"
import { useState } from "react"
import axios from "axios"
import { USER_API_END_POINT } from "../../utils/constant"

import { useDispatch, useSelector } from "react-redux"
import { setLoading } from "../../redux/authslice"
import { Loader2 } from "lucide-react"

export default function Signup() {

  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: ""
  })
  const {loading} = useSelector(store => store.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  const changeFileHandler = (e) => {
    setInput({...input , file:e.target.files?.[0]});
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullname" , input.fullname)
    formData.append("email" , input.email)
    formData.append("phoneNumber" , input.phoneNumber)
    formData.append("password" , input.password)
    formData.append("role" , input.role)
    if(input.file)
    {
      formData.append("file" , input.file)
    }

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData , {
        header : {
          "Content-Type" : "multipart/form-data"
        },
        withCredentials : true
      })

      if(res.data.success){
        navigate("/login")
        toast.success(res.data.message);

      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    } finally{
      setLoading(false);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto ">
        <form onSubmit={submitHandler} className="w-1/2 border border-gray-200 rounded-md p-4 my-10">
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2">
            <div className="my-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                type='text'
                value={input.fullname}
                name="fullname"
                onChange = {changeEventHandler}
                placeholder='e.g. Himanshu Pal'
              />
            </div>

            <div className="my-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                type='email'
                value={input.email}
                name="email"
                onChange = {changeEventHandler}
                placeholder='e.g. himanshu@gmail.com'
              />
            </div>

            <div className="my-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                type='number'
                value={input.phoneNumber}
                name="phoneNumber"
                onChange = {changeEventHandler}
                placeholder='e.g. 9956257841'
              />
            </div>

            <div className="my-2">
              <Label htmlFor="password">Password</Label>
              <Input
                type='password'
                value={input.password}
                name="password"
                onChange = {changeEventHandler}
                placeholder='e.g. ********'
              />
            </div>


            <div className='flex items-center justify-items-centers mx-3 my-5 gap-10'>
              <div className="flex items-center space-x-2">
                <Input
                  type='radio'
                  name='role'
                  value='student'
                  checked={input.role === 'student'}
                  onChange={changeEventHandler}
                  className='cursor-pointer'
                />
                <Label htmlFor="student">Student</Label>

              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type='radio'
                  name='role'
                  value='recruiter'
                  checked={input.role === 'student'}
                  onChange={changeEventHandler}
                  className='cursor-pointer'
                />
                <Label htmlFor="recruiter">Recruiter</Label>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input
                accept='image/*'
                type='file'
                onChange = {changeFileHandler}
                className='cursor-pointer'
              />
            </div>

            {
                            loading ? <Button className='flex justify-center w-1/2 m-5'> 
                            <Loader2 className="mr-2 h-4 w-4 animate-spin"/> PLease Wait </Button> : <div className="my-5">
                            <Button
                                type='submit'
                                className='w-full'
                            >Sign up</Button>
                        </div>
                        }

            {/* <div className="my-5">
              <Button
                type='submit'
                className='w-full'
              >Sign Up</Button>
            </div> */}

            <span
              className="text-sm"
            >Already have an account ? <Link to={'./login'} className="text-red-500">Login</Link></span>
          </div>
        </form>
      </div>
    </div>
  )
}
