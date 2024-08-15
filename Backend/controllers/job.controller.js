
import {Job} from "../models/job.model.js"

export const postJob = async (req , res) => {
    try {
        const {title , description , requirements , salary , location , jobType , experience , position , companyId} = req.body;
        const userId = req.id;

        if(!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId) {
            return res.status(400).json({
                message : "Something is Missing",
                success : false
            })
        }

        const job = await Job.create({
            title,
            description, 
            requirements : requirements.split(",") , 
            salary,
            location,
            jobType,
            experienceLevel : experience,
            position,
            company : companyId,
            created_by : userId
        })

        return res.status(201).json({
            message: "New Job created Successfully",
            job,
            success : true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : "Internal Server Error",
            success : false
        })
    }
}


export const getAllJobs = async (req , res) => {
    try {
        const keyword = req.query.keyword || "";
        const query = {
            $or:[
                {title:{$regex:keyword, $options:"i" }},
                {description:{$regex:keyword , $options:"i"}} 
            ]
        };
        const jobs = await Job.find(query).populate({
            path:"company"
        }).sort({createdAt:-1})
        if(!jobs)
        {
            return res.status(400).json({
                message : "Job not Found",
                success : false
            })
        }
        return res .status(200).json({
            jobs,
            success:true
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : "Internal Server Error",
            success : false
        })
    }
}

export const getJobById = async (req,res) => {
    try{
        const jobId = req.params.id;
        const job = await Job.findById(jobId);
        if(!job)
        {
            return res.status(404).json({
                message : "Jobs not found",
                success : false
            })
        }
        return res.status(200).json({
            message : "These job find on based of query.",
            job,
            success : true
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : "Internal Server Error",
            success : false
        })
    }
}

export const getAdminJob = async (req,res) => {
    try{
        const adminId = req.id;
        const jobs = await Job.find({created_by : adminId})
        if (jobs.length ===0
        ) {
            return res.status(404).json({
                message : "jobs not found",
                success : false
            })
        }
        return res.status(200).json({
            message : "Job of admin are",
            jobs,
            success : false
        })

    }catch{
        return res.status(500).json({
            message : "Internal Server Error",
            success : false
        })
    }
}