import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        lastName: { type: String, required: true},
        cellphone: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        address: { type: String }
    },
    { timestamps: true}
);

export const Profile = mongoose.model("Profile", ProfileSchema);