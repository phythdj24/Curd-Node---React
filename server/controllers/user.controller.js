import User from "../models/user.model";


export const create = async(req,res)=>{

    try {

        const userData = new User(req.body);



        
    } catch (error) {
        
    }



}