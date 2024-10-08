import { User } from "../models/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import getDataUri from "../utils/datauri.js";
import cloudinary from '../utils/cloudinary.js';

export const register = async (req, res) => {
    console.log(req.body)
    try {
        const { fullname, email, phoneNumber, password, role } = req.body;
        if (!fullname || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({
                message: "Something is Missing",
                success: false
            });
        };
        const user = await User.findOne({ email });
        console.log(user)
        if (user) {
            return res.status(400).json({
                message: "User already exist with that email.",
                success: false,
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        User.create({
            fullname,
            email,
            phoneNumber,
            password: hashedPassword,
            role,
        })

        return res.status(201).json({
            message: 'Account created successfully.',
            success: true
        })

    }
    catch (error) {
        console.log(error)
    }
}

export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        // console.log(email , password , role)
        if (!email || !password || !role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false,
            });
        };

        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Incorrect email.", // or password
                success: false,
            })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "Incorrect password.", //email or 
                success: false,
            })
        }
        // check role is correct or not
        if (role != user.role) {
            return res.status(400).json({
                message: "Account Doesn't exist with current role.",
                success: false
            })
        }

        const tokenData = {
            userId: user._id
        }
        const token = await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });


        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }

        return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'strict' }).json({
            message: `Welcome back ${user.fullname}`,
            user,
            success: true
        })

    } catch (err) {
        console.log(err)
        // return res.status(500).json({
        //     message: "Internal server error",
        //     success: false
        // });
    }

}


export const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0, httpOnly: true, sameSite: 'strict' }).json({
            message: "logged out successfully",
            success: true
        })
    } catch (err) {
        console.log(err)
    }
}

export const updateProfile = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, bio, skills } = req.body;
        const file = req.file

        let skillsArray
        if (skills) {
            skillsArray = skills.split(",");
        }


        const userId = req.id;//middleware authentication
        let user = await User.findById(userId);

        if (!user) {
            return res.status(400).json({
                message: "user not found.",
                success: false
            })
        }

        //updating resume
        if (file) {
            const fileUri = getDataUri(file);
            const cloudResponse = await cloudinary.uploader
                .upload(
                    fileUri.content , {
                        resource_type: 'raw',
                        // public_id: 'resume',
                    }
                )
                .catch((error) => {
                    console.log(error);
                });
                // console.log(cloudResponse)
                if (cloudResponse) {
                    user.profile.resume = cloudResponse.secure_url //save the cloudinary  url.
                    user.profile.resumeOriginalName = file.originalname //save original file name
                }
        }
        //updating data

        if (fullname) user.fullname = fullname
        if (email) user.email = email
        if (phoneNumber) user.phoneNumber = phoneNumber
        if (bio) user.profile.bio = bio
        if (skillsArray) user.profile.skills = skillsArray

        // resume comes later here.....
        

        await user.save();

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }

        return res.status(200).json({
            message: "profile updated succesfully",
            user,
            success: true
        })

    } catch (error) {
        console.log(error)
    }
}
