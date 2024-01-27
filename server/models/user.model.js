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
    

})


export default mongoose.model("User", UserSchema)