import User from "../models/user.model.js";


export const create = async(req,res)=>{

    try {

        const userData = new User(req.body);

        if(!userData){
            return res.status(404).json({msg:"User  not found"})
        }

        const savedData = await userData.save();
        res.status(200).json({ msg: "User created successfully", data: savedData });
        
       



        
    } catch (error) {
        res.status(500).json({error: error})
        
    }



}

export const getAll = async(req, res)=>{
    try { 

        const userData = await User.find();

        if (!userData) {
            return res.status(404).json({msg: "Data Not Found"})
        }
        res.status(200).json(userData)
        
    } catch (error) {
        res.status(500).json({error: error})
    }


}

export const getOne = async(req,res)=>{
    try {
        const id = req.params.id;
        const userExist = await User.findById(id) 

        if (!userExist) {
            return res.status(404).json({msg: "User Not Found"})
        }

        res.status(200).json(userExist)
    } catch (error) {
        res.status(500).json({error: error})
    }
}


export const update = async(req,res)=>{
    try {
        const id = req.params.id;
        const userExist = User.findById(id)
        
        if (!userExist) {
            return res.status(404).json({msg: "User Not Found"})
        }

        const userUpdate = await User.findByIdAndUpdate(id, req.body, {new: true})
        
        res.status(200).json(userUpdate)
    } catch (error) {
        res.status(500).json({error: error})
    }
}


export const deleteUser = async(req,res)=>{
        
    try {
        
        const id = req.params.id;
        const userExist = await User.findById(id)

        if (!userExist) {
            return res.status(404).json({msg: "User Not Found"})
        }

       await User.findByIdAndDelete(id)
        
        res.status(200).json({msg: "User deleted sucessfully"})

    } catch (error) {
        res.status(500).json({error: error})
    }

}