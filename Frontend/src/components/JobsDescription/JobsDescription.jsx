import { Badge } from "../ui/badge"
import { Button } from "../ui/button"

function JobsDescription() {
    const isApplied = true;
    return (
        <div className="max-w-7xl mx-auto my-10 p-5">

            <div className="flex justify-between">
                <div>
                    <h1 className="font-bold text-xl">FrontEnd Developer</h1>

                    <div className="flex items-center gap-2 mt-4">
                        <Badge className='text-blue-700' variant={'ghost'}>24 LPA</Badge>
                        <Badge className='text-[#F83082]' variant={'ghost'}>12 Positions</Badge>
                        <Badge className='text-[#7209b7]' variant={'ghost'}>Part-Time</Badge>
                    </div>
                </div>
                <Button
                disabled={isApplied}
                className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#7209b7] hover:bg-[#af3ffa]' }`}>
                    {
                        isApplied ? "Already Applied" : "Apply Now"
                    }
                    
                </Button>
            </div>
            <h1 className="border-b-2 border-b-gray-300 font-medium my-5"> Job Description</h1>   
            <div className="my-4">
                <h1 className="font-bold my-1">Role : <span className="pl-4 font-normal text-gray-800">FrontEnd Developer</span></h1>
                <h1 className="font-bold my-1">Location : <span className="pl-4 font-normal text-gray-800">FrontEnd Developer</span></h1>
                <h1 className="font-bold my-1">Description : <span className="pl-4 font-normal text-gray-800">FrontEnd Developer</span></h1>
                <h1 className="font-bold my-1">Experience : <span className="pl-4 font-normal text-gray-800">FrontEnd Developer</span></h1>
                <h1 className="font-bold my-1">Salary : <span className="pl-4 font-normal text-gray-800">FrontEnd Developer</span></h1>
                <h1 className="font-bold my-1">Total Applicants : <span className="pl-4 font-normal text-gray-800">FrontEnd Developer</span></h1>
                <h1 className="font-bold my-1">Posted Date : <span className="pl-4 font-normal text-gray-800">FrontEnd Developer</span></h1>

            </div>

        </div>
    )
}

export default JobsDescription