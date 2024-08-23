import { Search } from "lucide-react"
import { Input } from "../ui/input.jsx"
import { Button } from "../ui/button.jsx"

function HeroSection() {
    return (
        <div
            className='text-center my-5'
        >
            <div className="flex flex-col items-center gap-5 my-5">
                <span className='mx-auto px-4 py-2 rounded-full bg-gray-300 text-[#F83002]'>
                    No.1 Job Hunt Website
                </span>
                <h1 className="text-5xl font-bold ">Search , Apply & <br /> Get Your <span className="text-[#6A38C2]"> Dream Job</span></h1>
                <p 
                className="w-1/2 my-10"
                >Proin eget odio non lectus sagittis luctus. Mauris volutpat lectus eget nunc varius, at faucibus lorem cursus. Vivamus in semper justo. Vestibulum quis porttitor urna.</p>

                <div className="flex w-[40%] shadow-lg border-gray-300 pl-3 rounder-full items-center gap-4 mx-auto my-5">
                    <Input
                    type='text'
                    placeholder="Find Your Dream Job"
                    className='text-center outline-none border-none w-full placeholder:text-[#F83002]'
                    />
                    <Button className='rounded-r-full bg-[#6A38C2]'>
                        <Search className="h-5 w-5"/>
                    </Button>
                </div>
            
            </div>

        </div>
    )
}

export default HeroSection