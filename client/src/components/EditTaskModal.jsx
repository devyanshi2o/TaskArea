import { useState } from "react";
import API from "../services/api";
import {toast} from "react-toastify";

function EditTaskModal({ task, fetchTasks }) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const[priority,setPriority]=useState(task.priority);
  const[dueDate,setDueDate]=useState(task.dueDate?.substring(0,10));
 

  const updateTask = async () => {
    try {
      const token = localStorage.getItem("token");

      await API.put(
        `/tasks/${task._id}`,
        {
          title,
          description,
          priority,
          dueDate
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      toast.success("Task updated Succesfully");

      fetchTasks();
    } catch (err) {
      toast.error("update failed");
    }
  };

  return (
    <div className="border rounded p-3 mt-3">

      <h5>Edit Task</h5>

      <input
        className="form-control mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="form-control mb-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        className="btn btn-warning"
        onClick={updateTask}
      >
        Update
      </button>

    </div>
  );
}

export default EditTaskModal;