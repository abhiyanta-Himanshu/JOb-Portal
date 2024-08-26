import { Contact, Mail, Pen } from "lucide-react"
import Navbar from "../shared/Navbar"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import {Badge} from "../ui/badge"
import {Label} from "../ui/label"
import AppliedJobTable from "./AppliedJobTable"
import {UpdateProfileDialog} from "./UpdateProfileDialog"
import { useState } from "react"

const skills = ["html" , "js" , "react" , "node"];

function Profile() {
    const isResume = true
    const [open , setOpen] = useState(false)
    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto bg-white border border-gray-300 rounded-2xl my-5 p-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        <Avatar className='h-24 w-24'>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <h1 className="text-lg font-bold">Full Name</h1>
                    </div>

                    <div >
                        <Button variant='outline' className='border-gray-300 rounded-xl'><Pen onClick={()=>setOpen(true)}/></Button>
                    </div>
                </div>
                <div className="my-5 text-sm text-gray-600">
                    <p>Add your Bio here : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, quam quibusdam, quis doloribus distinctio ipsum sint possimus repellat consectetur ipsam in deserunt explicabo, veniam quia. Praesentium nobis totam nisi quasi!</p>
                </div>

                <div>
                    <div className="flex items-center gap-10">
                       <Mail/>
                    <span>himanshu@gmail.com</span> 
                    </div>
                    
                    <div className="flex items-center gap-10 my-5">
                        <Contact/>
                    <span>8527419630</span>
                    </div>
                    
                </div>

                <div className="my-8">
                    <h1 className="font-bold text-md">Skills</h1>
                    <div className="flex items-center gap-3">
                    {
                        skills.length!==0 ?skills.map((item , index) => <Badge key={index}>{item}</Badge>) : 
                        <span className="my-10 text-rose-600">
                            No skills to show!!!
                        </span>
                    }
                    </div>
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5 my-8">
                    <Label className='text-md font-bold'>Resume</Label>

                    {
                        isResume ? <a target="blank" href="https://www.google.com" className="text-blue-500 text-sm hover:underline cursor-pointer">Open Resume</a> :
                        <span className="text-rose-600">Resume was not uploaded by User
                        </span>
                    }
                </div>

                
            </div>
            <div className="max-w-7xl mx-auto bg-white rounded-2xl p-8 shadow-xl border border-gray-300 my-5">
                    <h1 className="font-bold">Applied Jobs</h1>
                    {/* Application Table */}
                    <AppliedJobTable/>
                </div>

                <UpdateProfileDialog open={open} setOpen={setOpen}/>
        </div>
    )
}

export default Profile