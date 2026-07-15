const express=require('express');
const router=express.Router();

const auth=require("../middleware/auth");
const{
  addTask,
  getTasks,
  updateTask,
  deleteTask,
  completeTask,
}=require("../controllers/taskController");

router.post("/",auth,addTask);
router.get("/",auth,getTasks);
router.put("/:id",auth,updateTask);
router.delete("/:id",auth,deleteTask);
router.patch("/:id/complete",auth,completeTask);

module.exports=router;