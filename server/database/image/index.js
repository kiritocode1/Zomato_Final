import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
    images: [{ location: { type: String, required: true } }]
},{
    timestamps: true
});

export const ImageModel = mongoose.model("Images", ImageSchema);
//? schema is defined here and is used everywhere