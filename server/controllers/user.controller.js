import User from "../models/user.model";


export const create = async(req,res)=>{

    try {

        const userData = new User(req.body);
        if(!userData){
            return res.status(404).json(msg:"User  not found")
        }

        const savedData = await userdata.save



        
    } catch (error) {
        
    }



}