/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "../ui/dialog"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useState } from "react"
import { Loader2 } from "lucide-react"
import { useSelector } from "react-redux"
import {USER_API_END_POINT} from "../../utils/constant"
import axios from "axios"
import { useDispatch } from "react-redux"
import { setUser } from "../../redux/authslice"
import { toast } from "sonner"
import { useSubmit } from "react-router-dom"


export const UpdateProfileDialog = ({ open, setOpen }) => {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();

    const {user} = useSelector(store=>store.auth);
    const [input , setInput] = useState({
        fullname : user?.fullname,
        email : user?.email,
        phoneNumber : user?.phoneNumber,
        bio : user?.profile?.bio,
        skills : user?.profile?.skills?.map(skill=>skill),
        file : user?.profile?.resume
    })

    const changeEventHandler = (e) => {
        setInput({...input,[e.target.name]:e.target.value})
    }

    const changeFileHandler = (e) => {
        e.preventDefault()
        const file = e.target.files?.[0]
        setInput(...input , file)
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("fullname" , input.fullname)
        formData.append("email" , input.email)
        formData.append("phoneNumber" , input.phoneNumber)
        formData.append("bio" , input.bio)
        formData.append("skills" , input.skills)
        
        if (input.file) {
            formData.append("resume" , input.resume)
        }

        try {
            const res = await axios.post(`${USER_API_END_POINT}/profile/update` , formData , {
                headers: {
                    'Content-Type' : 'multipart/form-data'
                },
                withCredentials : true
            })
            if(res.data.success)
            {
                dispatch(setUser(res.data.user));
                toast.success(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }
        setOpen(false)
        console.log(input)
    }

    return (
        <div>
            <Dialog open={open}>
                <DialogContent className='sm:max-w-[425px]' onInteractOutside={() => setOpen(false)}>
                    <DialogHeader>
                        <DialogTitle>Update Profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you&apos;re done.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={submitHandler}>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor='name' className='text-right'>Name</Label>
                                <Input
                                    id='name'
                                    name='name'
                                    value={input.fullname}
                                    onChange={changeEventHandler}
                                    className='col-span-3 rounded-lg'

                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor='email' className='text-right'>E-Mail</Label>
                                <Input
                                    id='email'
                                    name='email'
                                    onChange={changeEventHandler}
                                    value={input.email}
                                    className='col-span-3 rounded-lg'
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor='phoneNumber' className='text-right'>Phone Number</Label>
                                <Input
                                    id='phoneNumber'
                                    name='phoneNumber'
                                    onChange={changeEventHandler}
                                    value={input.phoneNumber}
                                    className='col-span-3 rounded-lg'
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor='bio' className='text-right'>bio</Label>
                                <Input
                                    id='bio'
                                    name='bio'
                                    value={input.bio}
                                    onChange={changeEventHandler}
                                    className='col-span-3 rounded-lg'
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor='skills' className='text-right'>skills</Label>
                                <Input
                                    id='skills'
                                    name='skills'
                                    value={input.skills}
                                    onChange={changeEventHandler}
                                    className='col-span-3 rounded-lg'
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor='resume' className='text-right'>resume</Label>
                                <Input
                                    id='resume'
                                    name='resume'
                                    type='file'
                                    onChange={changeFileHandler}
                                    accept="application/pdf"
                                    value={input.file}
                                    className='col-span-3 rounded-lg'
                                />
                            </div>

                        </div>
                    
                    <DialogFooter>
                        {
                            loading ? <Button className='flex justify-center w-1/2 m-5'> <Loader2 className="mr-2 h-4 w-4 animate-spin"></Loader2> PLease Wait </Button> : <div className="my-5">
                                <Button
                                    
                                    type='submit'
                                    className='w-full'
                                >Save</Button>
                            </div>
                        }
                    </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}
