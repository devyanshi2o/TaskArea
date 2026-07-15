import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import AddTaskModal from "../components/AddTaskModal";


function Dashboard(){
  const[tasks,setTasks]=useState([]);
  const[search,setSearch]=useState("");

  const fetchTasks=async()=>{
    const token=localStorage.getItem("token");
    const res=await API.get("/tasks",{
      headers:{
        Authorization:token,
      },
    });
    setTasks(res.data);
  };

  useEffect(()=>{
    fetchTasks();
  },[]);

  const filteredTasks=tasks.filter((task)=>task.title.toLowerCase().includes(search.toLowerCase())
);
 
  return(
    <>
    <Navbar/>
    <div className="container mt-4">
      <h2>My Tasks</h2>
      <div className="row mb-4">
        <div className="col">
          <div className="card p-3 text-center">
            <h6> Total</h6> 
            <h2>{tasks.length}</h2>

          </div>
        </div>
        <div className="col">
          <div className="card p-3 text-center">
            <h6>Pending</h6>
            <h2>
              {
                tasks.filter(t=>t.status==="pending").length
              }
            </h2>
          </div>
        </div>
        <div className="col">
          <div className="card p-3 text-center">
            <h6>Completed</h6>
            <h2>  
             {
              tasks.filter(t=>t.status==="Completed").length
             } 
             </h2>
            
          </div>
        </div>
      </div>
     
<button
  type="button"
  className="btn btn-primary mb-3"
  data-bs-toggle="modal"
  data-bs-target="#addTaskModal"
>
  + Add Task
</button>

<AddTaskModal fetchTasks={fetchTasks} />

<input
  className="form-control mb-3"
  placeholder="Search Task"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>

      {filteredTasks.length===0?(
        <p> No Tasks Found</p>
      ):(filteredTasks.map((tasks)=>(
        <TaskCard key={tasks._id}
        task={tasks}
        fetchTasks={fetchTasks}/>
      )))}
     
    </div>
    </>
  );
}

export default Dashboard;