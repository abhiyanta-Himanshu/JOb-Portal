/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import Navbar from "../shared/Navbar"
import JobCard from "../Jobs/JobCard"

const randomJobs = [1, 2, 3]
function Browse() {
  return (
    <div>
      <Navbar />
      <div  className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold  text-xl">Search Results : {randomJobs.length}</h1>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-5 ">
        {
          randomJobs.map((item, index) => {
            return (
              <JobCard />
            )
          })
        }
      </div>

    </div>
  )
}

export default Browse