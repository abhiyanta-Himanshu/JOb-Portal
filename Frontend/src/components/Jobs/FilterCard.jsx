/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import {Label } from "../ui/label"
const filterData = [
    {
        filterType: 'Location',
        array: ["Delhi NCR", "Banglore", "Hyderabad", "Pune", "Mumbai"]
    },
    {
        filterType: 'Industry',
        array: ["Frontend Developer", "Backend Developer", "Fullstack Developer"]
    },
    {
        filterType: 'Salary',
        array: ["0-40k", "42-1lakh", "1Lakh to 5lakh"]
    },
]

function FilterCard() {
    return (
        <div
        className="m-5 p-5 border border-gray-200 rounded-xl shadow-xl bg-white"
        >
            <h1 className="text-xl font-bold">Filter Jobs</h1>
            <hr className="mt-3" />
            <RadioGroup>
                {
                    filterData.map((data, index) => (
                        <div className="mt-5">
                            <h1 className="text-lg font-bold">{data.filterType}</h1>
                            {
                                data.array.map((item, index) => {
                                    return <div className="mt-2 flex items-center">
                                        <RadioGroupItem value={item} />
                                        <Label className="ml-2">{item}</Label>
                                    </div>
                                })
                            }
                        </div>
                    ))
                }
            </RadioGroup>

        </div>
    )
}

export default FilterCard