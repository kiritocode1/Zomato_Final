import express from "express";
import { ReviewModel } from "../../database/allModels";

const Router = express.Router();

/*
Route        /new
Des          add new review
Params       none
Access       Public
Method       Post
*/

Router.post("/new", async(req, res) => {
    try {
        const { reviewData } = req.body;
        await ReviewModel.create(reviewData);
        return res.json({review:"successfully created Review . " });
    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
});


/*
Route        /delete
Des          delete a review
Params       _id
Access       Public
Method       Delete
*/

Router.Delete("/delete/:_id", async(req, res) => {
    try {
        const { _id } = req.params;
        await ReviewModel.findByIdAndDelete(_id);
        return res.json({review:"successfully deleated Review . " });
    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
});

export default Router;