import { useState } from "react";
import API from "../services/api";
import { toast } from "react-toastify";

function AddTaskModal({ fetchTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  const addTask = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await API.post(
        "/tasks",
        {
          title,
          description,
          priority,
          dueDate,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      toast.success("Task Added Successfully");

      setTitle("");
      setDescription("");
      setPriority("Medium");
      setDueDate("");

      fetchTasks();

      // Close Modal
      document.getElementById("closeModal").click();
    } catch (err) {
      toast.error("Failed to add task");
      console.log(err);
    }
  };

  return (
    <div
      className="modal fade"
      id="addTaskModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">Add New Task</h5>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>

          </div>

          <form onSubmit={addTask}>

            <div className="modal-body">

              <input
                className="form-control mb-3"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />

              <textarea
                className="form-control mb-3"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />

              <select
                className="form-select mb-3"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>

              <input
                type="date"
                className="form-control"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />

            </div>

            <div className="modal-footer">

              <button
                type="button"
                className="btn btn-secondary"
                id="closeModal"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="btn btn-primary"
              >
                Save Task
              </button>

            </div>

          </form>

        </div>
      </div>
    </div>
  );
}

export default AddTaskModal;