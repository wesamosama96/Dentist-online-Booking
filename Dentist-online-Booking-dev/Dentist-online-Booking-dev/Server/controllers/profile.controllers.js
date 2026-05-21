const user =require ("../Modules/User.model.js")
const Doctor =require ("../Modules/Doctor.models")

//get profile
const getProfile = async (req ,res ,next)=>{

try {
    //protect /Auth middleware get from role and userid lsa h3mlhom
const userId = req.user.id
const role = req.user.role

//get main data and remove password for safety
const user = await User.findById(userId).select("-password")
if (!user){
    return res.status(404).json({ message:"User not found"})
}
// if user is doctor get his data 
if (role ==="doctor"){
    const doctorinfo = await Doctor.findOne({userId})
    return res.status(200).json({user , doctorinfo})
}

//if it's patient 
res.status(200).json({user})
  } catch (err) {
    next(err)    //handling error
  }
}
//update profile
const updateProfile = async (req ,res ,next)=>{
  try{
        //protect /Auth middleware get from role and userid lsa h3mlhom
const userId = req.user.id
const role = req.user.role
const updates = req.body  
  //$set =>edite 
const updatedUser =await User.findByIdAndUpdate(userId, {$set: updates},{new:true ,runValidators:true}).select("-password")
 // if doctor b edite in his data 
   if (role === "doctor") {
    const updatedDoctor = await Doctor.findOneAndUpdate({ userId },{ $set: updates },{ new: true, upsert: true })

  return res.status(200).json({
        message: "Profile patched successfully",
        user: updatedUser,
        doctorInfo: updatedDoctor
   })
    }

    res.status(200).json({
      message: "Profile patched successfully",
      user: updatedUser
    })

  } catch (err) {
    next(err)
  }
}

//change password
const changePassword = async (req, res, next) => {
  try {
    const userId = req.user.id
    const { oldPassword, newPassword } = req.body

    if (!oldPassword || !newPassword) {
      return res.status(400).json({ message: "Both old and new passwords are required" })
    }

    const user = await User.findById(userId)
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    const isMatch = await user.matchPassword(oldPassword)
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid old password" })
    }

    user.password = newPassword
    await user.save()

    res.status(200).json({ message: "Password changed successfully" })
  } catch (err) {
    next(err)
  }
}

module.exports = { getProfile, updateProfile, changePassword }