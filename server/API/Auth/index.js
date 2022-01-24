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
        // hashing redone
        const bcryptSalt = await bcrypt.genSalt(8);
        const hashedPassword = await bcrypt.hash(password, bcryptSalt);
        
        //! save to DB
        await UserModel.create({ ...req.body.credentials, password: hashedPassword });
        
        
        
        //! JWT token
        const token = jwt.sign({ user: { fullname, email } }, "ZomatoApp");
        return res.status(200).json({ token, status: "success" });
    
    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
});