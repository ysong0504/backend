import mongoose, { Schema, model, mongo } from "mongoose";

const UserSchema: Schema = new Schema({
    email: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

export default mongoose.model("Users", UserSchema);