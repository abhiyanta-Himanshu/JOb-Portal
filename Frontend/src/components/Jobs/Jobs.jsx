/* eslint-disable no-unused-vars */
import Navbar from "../shared/Navbar"
import FilterCard from "./FilterCard.jsx"
import JobCard from "./JobCard.jsx";


const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

function Jobs() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-1/5">
            <FilterCard />
          </div>
          
          {
            jobsArray.length <= 0 ?<span>Job not found</span> : (
              <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
                <div className="grid grid-cols-3 gap-4">
                {
                  jobsArray.map((index , value) => <JobCard key={index}/>)
                }
                </div>
              </div>
            )
          }
        </div>

      </div>

    </>
  )
}

export default Jobs;