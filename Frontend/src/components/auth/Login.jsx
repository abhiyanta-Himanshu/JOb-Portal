import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Button } from "../ui/button"
import { toast } from "sonner"

import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import Navbar from "../shared/Navbar"
import { useState } from "react"
import { USER_API_END_POINT } from "../../utils/constant"

import { useDispatch, useSelector } from "react-redux"
import { setLoading , setUser } from "../../redux/authslice"
import { Loader2 } from "lucide-react"

export default function Login() {

    const [input, setInput] = useState({
        email: "",
        password: "",
        role: ""
    })

    const { loading } = useSelector(store => store.auth);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            dispatch(setLoading(true))
            const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
                header: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })

            if (res.data.success) {
                dispatch(setUser(res.data.user))
                navigate("/")
                toast.success(res.data.message);

            }
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        } finally {
            dispatch(setLoading(false))
        }
    }


    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center max-w-7xl mx-auto ">
                <form onSubmit={submitHandler} className="w-1/2 border border-gray-200 rounded-md p-4 my-10">
                    <h1 className="font-bold text-xl mb-5">Log In</h1>
                    <div className="my-2">

                        <div className="my-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                                type='email'
                                value={input.email}
                                name="email"
                                onChange={changeEventHandler}
                                placeholder='e.g. himanshu@gmail.com'
                            />
                        </div>

                        <div className="my-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                type='password'
                                value={input.password}
                                name="password"
                                onChange={changeEventHandler}
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
                                    checked={input.role === 'recruiter'}
                                    onChange={changeEventHandler}
                                    className='cursor-pointer'
                                />
                                <Label htmlFor="recruiter">Recruiter</Label>
                            </div>
                        </div>

                        {
                            loading ? <Button className='flex justify-center w-1/2 m-5'> <Loader2 className="mr-2 h-4 w-4 animate-spin"></Loader2> PLease Wait </Button> : <div className="my-5">
                            <Button
                                type='submit'
                                className='w-full'
                            >Log In</Button>
                        </div>
                        }

                        <span
                            className="text-sm"
                        >Don&apos;t have an account ? <Link to={'./signup'} className="text-blue-500">Sign up</Link></span>
                    </div>
                </form>
            </div>
        </div>
    )
}
