import mongoose from "mongoose"


const UserSchema = new mongoose.Schema({
    fullname :{
        type: String,
        requried : true 

    },
    email :{
        type: String,
        requried : true 

    },
    password :{
        type: String,
        requried : true 

    },
    username:{
        
    }


}, {timestamps: true})


export default User = mongoose.model("User", UserSchema)