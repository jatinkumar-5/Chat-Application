const User = require('../models/userModel');
const bcrypt = require('bcryptjs');


exports.register = async(req,res)=>{
 try{

  const{fullName , userName , password , confirmPassword , gender  } = req.body;

  if(!fullName || !userName || !password || !confirmPassword || !gender){
    return res.status(400).json({message:"All fields are required"});
  }
  
  if(password !== confirmPassword){
    return res.status(400).json({ message:"Password  does not match"});
  }

  const user = await User.findOne({userName})
  if(user){
    return res.status(400).json({message:"User Name alrady exists"});
  }
  
  const hashedPassword = await bcrypt.hash(password,10);

  //profilephoto
  const maleProfilePhoto = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9p_svIjwA810BURgFBTU0V6fNjiU9MRbUXQ&s?username=${userName}`;
  const femaleProfilePhoto = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQndYzShN5kyeY_s3HQCbAfSvFlC0zGkn38bw&s?username=${userName}`;

  await User.create({
    fullName,
    userName,
    password:hashedPassword,
    profilePhoto: gender === "male" ? maleProfilePhoto : femaleProfilePhoto , 
    gender 
  });
  return res.status(201).json({message:"User registered successfully" , success:true })
 }catch(error){
 return res.status(500).json({message:"Server error"});
 }
}


