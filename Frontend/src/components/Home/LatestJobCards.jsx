
import { Badge } from "../ui/badge.jsx"


function LatestJobCards() {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-300">
        <div>
         <h1 className="font-medium text-lg">Company Name</h1>
        <p className="text-sm text-gray-500">India</p>   
        </div>
        <div>
            <h1 className="font-bold text-lg my-2">Job Title</h1>
            <p className="text-sm text-gray-600 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus mi, gravida sed ultricies a, aliquam a turpis. Vivamus non.</p>
            <div className="md:flex items-center gap-3 mt-4">
                <Badge className={'text-blue-700 font-bold'} variant={'ghost'}>12 Positions</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant={'ghost'}>Part Time</Badge>
                <Badge className={'text-[#6A38C2] font-bold'} variant={'ghost'}>24 LPA</Badge>
            </div>
        </div>
    </div>
  )
}

export default LatestJobCards