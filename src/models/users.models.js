
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    password: {
        type: String,
        required: true,

    },
    photo: {
        type: String,
    },
    gender: {
        type: String, enum: ["male", "female", "other"]
    },

    appointments: [{    
    }],
    
    role: {
        type: String,
        enum: ["user", "admin" , ],
        default: "user", // Set a default role for new users
    },
}, { timestamps: true }
)

// create object of the user 
export default mongoose.model("User", userSchema);


