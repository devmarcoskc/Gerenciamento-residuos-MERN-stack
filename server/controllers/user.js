import express from "express";
import User from "../models/User.js";

export const getUser = async (req, res) => {
    try {
        const {id} = req.params;

        const user = await User.findById(id);
        if(!user) res.status(406).json({error: "User not found"});

        res.status(200).json(user);
    } catch(error) {
        res.status(502).json({error: error.message});
    }
}

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const {orgao, cidade, estado} = req.body;

        const user = await User.findById(id);
        user.orgao = orgao;
        user.cidade = cidade;
        user.estado = estado;

        await user.save();
        res.status(200).json(user);
    } catch(error) {
        res.status(502).json({error: error.message});
    }
}

export const deleteUser = async (req, res) => {
    try {
        const {id} = req.params;

        await User.findByIdAndDelete(id);
        
        res.status(200).json({message: "User deleted"});
    } catch(error) {
        res.status(502).json({error: error.message});
    }
}