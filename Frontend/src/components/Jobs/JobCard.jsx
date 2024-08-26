import { Bookmark } from "lucide-react"
import { Button } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import {Badge } from "../ui/badge"
import { useNavigate } from "react-router-dom"

function JobCard() {
    const navigate = useNavigate();
    const jobId = "kkeojdorjd"
    return (
        <div className="p-5 rounded-md shadow-xl bg-white border border-gray-200">

            <div className="flex justify-evenly items-center">
                <p className="text-sm text-gray-600">2 Days ago</p>
                <Button variant='outline' className='rounded-full border border-gray-300' size='icon'><Bookmark /></Button>
            </div>

            <div className="flex items-center gap-2 my-2">
                <Button variant='outline' className='rounded-full border border-gray-300' size='icon'>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </Button>


                <div>
                    <h1 className="font-bold">Company Name</h1>
                    <p className="text-sm text-gray-500">India</p>
                </div>
            </div>

            <div>
                <h1 className="font-bold text-lg my-2">Title</h1>
                <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac odio posuere, porta orci sed, viverra dolor. Praesent vitae lorem elit. Integer consectetur a ligula nec ultrices. Aliquam sed mi sit amet eros venenatis auctor quis non enim. Donec ut.

                </p>
            </div>

            <div className="flex items-center gap-2 mt-4">
                <Badge className='text-blue-700' variant={'ghost'}>24 LPA</Badge>
                <Badge className='text-[#F83082]' variant={'ghost'}>12 Positions</Badge>
                <Badge className='text-[#7209b7]' variant={'ghost'}>Part-Time</Badge>
            </div>
                <div className="flex justify-start mt-3 gap-5">
                    <Button 
                    onClick = {() => navigate(`/description/${jobId}`)}
                    variant='outline' className="rounded-3xl border border-gray-400"
                    >Details</Button>
                    <Button variant='outline' className="rounded-3xl border border-gray-400 bg-blue-600">Save for later</Button>
                </div>

        </div>
    )
}

export default JobCard