import LatestJobCards from "./LatestJobCards.jsx"

const randomJobs = [1,2,3,4,5,6,7,8]


function LatestJob() {
  return (
    <div className="max-w-7xl mx-auto my-20">
        <h1 className="text-4xl font-bold">Latest & Top <span className="text-[#6A38C2]">Job Openings</span></h1>
        {/* multiple job cards */}
        <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 my-5">
        {
            randomJobs.slice(0,6).map((item,index) =>
              //  key prop was sent to remove key error in console nothing is of use
                <LatestJobCards key={index}/>
            )
        }
        </div>
        

    </div>
  )
}

export default LatestJob