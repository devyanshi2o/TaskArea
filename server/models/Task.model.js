const mongoose=require("mongoose");
const taskSchema=new mongoose.Schema({
  title:{
    type:String,
    required:true,
  },
  description:{
    type:String
  },
  status:{
    type:String,
    enum:["pending","Completed"],
    default:"pending",
  },
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
  },
  dueDate: {
    type: Date
}
,
priority: {
  type: String,
  enum: ["Low", "Medium", "High"],
  default: "Medium",
},
},{timestamps:true});
module.exports=mongoose.model("Task",taskSchema)