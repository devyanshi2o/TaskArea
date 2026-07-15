const jwt=require("jsonwebtoken");
const auth=(req,res,next)=>{
  const token=req.header("Authorization");

  if(!token){
    return res.status(401).json({
      message:"no token,authorization denied"
    });
  }
  try{
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    req.user=decoded;//{id: ...}
    next();

  }catch(err){
    res.status(401).json({ message:"Invalid token",error:err.message});
  }
};
module.exports=auth;