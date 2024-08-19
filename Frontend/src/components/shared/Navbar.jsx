import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover.jsx";
import { Button } from "../ui/button.jsx";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar.jsx"
import {User2 , LogOut } from "lucide-react"
import { Link } from "react-router-dom";

function Navbar() {
    let user = false;
    return (
        <>
            <div
                className='bg-white p-3'
            >
                <div
                    className='flex items-center justify-between mx-auto max-w-7xl h-16'
                >

                    <div

                    >
                        <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>Portal</span></h1>
                    </div>

                    <div
                        className="flex items-center gap-20"
                    >
                        <ul className='flex font-medium items-center gap-10'>
                            <li>Home</li>
                            <li>Jobs</li>
                            <li>Browse</li>
                        </ul>

                        {
                            !user? (
                                <div
                                className="flex items-center gap-4"
                                >
                                    <Link
                                    to={"/login"}
                                    >
                                    <Button variant='outline'>Login</Button>
                                    </Link>
                                    <Link
                                    to={'./signup'}
                                    >
                                    <Button variant='outline' className="bg-[#7322ff] hover:bg-[#a473f7]">Signup</Button>
                                    </Link>
                                </div>
                            ) :
                            (
                                <Popover>
                            <PopoverTrigger asChild>
                                <Avatar className='cursor-pointer'>
                                    <AvatarImage src="https://github.com/shadcn.png" alt='@shadcn' />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent
                                className="w-80"
                            >
                                <div className="flex gap-8 my-2">
                                    <Avatar className='cursor-pointer'>
                                        <AvatarImage src="https://github.com/shadcn.png" alt='@shadcn' />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h4 className="font-medium">Himanshu Pal</h4>
                                        <p className="text-sm text-muted-foreground">Here is the bio of the user</p>
                                    </div>
                                </div>
                                <div className=" flex flex-col text-gray-600">
                                    <div
                                    className="flex w-fit items-center gap-2 cursor-pointer"
                                    >
                                        <User2/>
                                        <Button variant='link'>View Profile</Button>
                                    </div>
                                    <div
                                    className="flex w-fit items-center gap-2 cursor-pointer"
                                    >
                                        <LogOut/>
                                        <Button variant='link'>Logout</Button>
                                    </div>                                    
                                </div>
                            </PopoverContent>
                        </Popover>
                            )
                        }
                    </div>

                </div>
            </div>
        </>
    )
}
export default Navbar;