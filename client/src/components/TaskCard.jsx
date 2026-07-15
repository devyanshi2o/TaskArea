import { useState } from "react";
import API from "../services/api";
import EditTaskModal from "./EditTaskModal";
import {toast} from "react-toastify";

function TaskCard({ task, fetchTasks }) {
  const[showEdit,setShowEdit]=useState(false);


  const token = localStorage.getItem("token");

  // const [edit, setEdit] = useState(false);

  const deleteTask = async () => {
    const confirmDelete=window.confirm("Are You sure You want to delete this task");
    if(!confirmDelete)return;
    try{
    await API.delete(`/tasks/${task._id}`, {
      headers: {
        Authorization: token,
      },
    });
    toast.success("Deleted Succesfully");

fetchTasks();

  }catch(err){
    console.log(err.response?.data);
   toast.error("Delete Failed");
  }
};

  const completeTask = async () => {
    try{

    
    await API.patch(
      `/tasks/${task._id}/complete`,
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    );
    toast.success("Task Completed");

    fetchTasks();
  }catch(err){
     toast.error("Failed to complete to task");
  }
  };

  return (
    <div className="card shadow mb-3">
      <div className="card-body">

        <h4>{task.title}</h4>

        <p>{task.description}</p>
        <p> <strong> Status: </strong>

        <span
          className={`badge ${
            task.status === "Completed"
              ? "bg-success"
              : "bg-warning text-dark"
          }`}
        >
          {task.status}
        </span>
        </p>
       <p>
        <strong> Priority:</strong>
       <span className={`badge ${
       task.priority ==="High"
       ?"bg-danger"
       :task.priority ==="Medium"
       ?"bg-warning text-dark"
       :"bg-success"
        }`}
        > {task.priority}
        </span>
        </p>
        <p>    
          <strong> Due Date:</strong>
          {task.dueDate ? new 
          Date(task.dueDate).toLocaleDateString()
          :"No Due Date"}
          </p>
        <div className="mt-3">

          <button
            className="btn btn-warning  btn-sm me-2"
            onClick={() => setShowEdit(!showEdit)}
          >
            Edit
          </button>

          <button
            className="btn btn-success btn-sm me-2"
            onClick={completeTask}
            disabled={task.status ==="Completed"}
          >
            Complete
          </button>

          <button
            className="btn btn-danger btn-sm"
            onClick={deleteTask}
          >
            Delete
          </button>

        </div>

        {showEdit && (
          <EditTaskModal
            task={task}
            fetchTasks={fetchTasks}
          />
        )}

      </div>
    </div>
  );
}

export default TaskCard;