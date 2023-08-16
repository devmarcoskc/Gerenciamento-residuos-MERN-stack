import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const register = async (req, res) => {
    try {
        const {orgao, cidade, estado, email, password} = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const checkEmailIfExists = await User.find({email});

        if(checkEmailIfExists.length > 0) {
            res.status(200).json({emailAlreadyExists: true});
        } else {
            const newUser = new User({
                orgao, cidade, estado, email, passowrd: passwordHash
            });

            const savedUser = await newUser.save();
            
            delete savedUser.passowrd;
            res.status(201).json(savedUser);
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({error: error.message});
    }
}

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        
        const user = await User.findOne({email: email});
        if(!user) return res.status(406).json({msg: "Usuário não existe"});

        const isMatch = await bcrypt.compare(password, user.passowrd);
        if(!isMatch) return res.status(406).json({msg: "Senha incorreta"});

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
        delete user.passowrd;
        
        res.status(200).json({token, user});
    } catch(error) {
        res.status(403).json({error: error.message});
    }
}