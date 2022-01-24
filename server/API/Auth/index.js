import express from "express";
import bcrypt from "bcryptjs";
//Models
import { UserModel } from "../../database/user";

const Router = express.Router();

/*
Route       /signup
Des         Signup using email and password
Params       none
Access      public
Method       POST
*/

Router.post("/signup", async (req, res) => {
    try {
        const { fullname, email, password, phoneNumber } = req.body.credentials;
        const checkUserByEmail = await UserModel.findOne({ email });
        const checkUserByPhone = await UserModel.findOne({ phoneNumber });
        if (checkUserByEmail || checkUserByPhone) {
            return res.json({ error: "user already exists" });
        }
    } catch (error) {
        return res.status(500).json({ error: console.error(.message)});
    }
});