import User from '../models/User.js'

//create new User
export const createUser = async (req,res)=>{
    const newUser = new User(req.body)
    try{
        const savedUser = await newUser.save()
        res.status(200).json({
            success:true,
            message:"Successfully created", 
            data:savedUser,
        })

    } catch (err){
        res.status(500)
            .json({success:false, message:"Failed to create. Try again."})
    }
}

//update User
export const updateUser= async(req,res)=>{
    const id=req.params.id
    try{
        const updatedUser = await User.findByIdAndUpdate(id,{
            $set: req.body
        }, {new:true})

        res.status(200).json({
            success:true,
            message:"Successfully updated", 
            data:updatedUser,
        })
    } catch (err) {
        res.status(500).json({
            success:false,
            message:"Failed to update", 
        })
    }
}

//delete User
export const deleteUser= async(req,res)=>{
    const id=req.params.id
    try{
        await User.findByIdAndDelete(id)

        res.status(200).json({
            success:true,
            message:"Successfully deleted",
        })
    } catch (err) {
        res.status(500).json({
            success:false,
            message:"Failed to delete", 
        })
    }
}

//get single User
export const getSingleUser= async(req,res)=>{
    const id=req.params.id
    try{
        const user = await User.findById(id)

        res.status(200).json({
            success:true,
            message:"Data found",
            data:user,
        })
    } catch (err) {
        res.status(404).json({
            success:false,
            message:"Not found", 
        })
    }
}

//get all Users
export const getAllUser= async(req,res)=>{

    try{
        const users = await User.find({})

        res.status(200).json({
            success:true,
            message:"Data found",
            data:users,
        })
    } catch (err) {
        res.status(404).json({
            success:false,
            message:"Not found",
        })
    }
}

//get User by search
export const getUserBySearch = async(req,res)=>{

    //here 'i' means case sensitive
    const city= new RegExp(req.query.city, 'i') 
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)

    try{

        //gte is greater than equal
        const Users = await User.find({city, distance:{$gte:distance}, maxGroupSize:{$gte:maxGroupSize}})
        res.status(200).json({
            success:true,
            message:"Data found",
            data:Users,
        })
    } catch (err){
        res.status(404).json({
            success:false,
            message:"Not found",
        })
    }

}

//get featured Users
export const getFeaturedUser= async(req,res)=>{
    
    try{
        const Users = await User.find({featured:true})
            .limit(8)

        res.status(200).json({
            success:true,
            message:"Data found",
            data:Users,
        })
    } catch (err) {
        res.status(404).json({
            success:false,
            message:"Not found",
        })
    }
}

//get User counts
export const getUserCount = async(req,res)=>{
    try{
        const UserCount = await User.estimatedDocumentCount()
        res.status(200).json({
            success:true,
            data:UserCount,
        })
    } catch (err){
        res.status(500).json({
            success:false,
            message:"Failed to fetch"
        })
    }
}