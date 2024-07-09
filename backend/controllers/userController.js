import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'


// login user

const loginUser = async(req, res) => {
    const {email, password} = req.body;
    try {

        // find a user using given details
        const user = await userModel.findOne({email});

        // check if user exist
        if(!user){
            return res.json({success: false,message: "User not found"});
        }

        // boolean value is stored here
        const isMatch = await bcrypt.compare(password, user.password)

        // if password do not match
        if(!isMatch){
            return res.json({success: false,message: "Incorrect password"});
        }

        // generate token
        const token = createToken(user._id);
        res.json({success: true, token});

    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Something went wrong"});
    }
}

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET);
}

// register user

const registerUser = async(req, res) => {
    const {name, password, email} = req.body;
    try {
        // checking if user already exist
        const exists = await userModel.findOne({email})
        if(exists){
            return res.json({success: false, message: "User already exists"});
        }

        // validating email format and strong password
        if(!validator.isEmail(email)){
            return res.json({success: false, message: "Please enter a valid email"});
        }

        // check password length
        if(password.length < 8){
            return res.json({success: false, message: "Password should be at least 8 characters"})
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // create new user in database with given details
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword,
        })

        // save user in database
        const user = await newUser.save();

        // token creation
        const token = createToken(user._id);
        res.json({success: true, token, message: "User registered successfully"});

    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Something went wrong"});
    }
}

export {loginUser, registerUser}