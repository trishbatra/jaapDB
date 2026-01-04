import mongoose from "mongoose";

const jaapSchema = new mongoose.Schema({
    mala: {type : Number, default : 0, required : true},
    dateAndTimeString : {type: String, required : true}
},
 {
    timestamps : true
 }
)

export const jaapModel = mongoose.models.jaapModel || mongoose.model("jaapModel" , jaapSchema)