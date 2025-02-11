import React, { useState, useEffect } from "react";
import TaskBoard from "./TaskBoard";

const TaskManager = () => {
  const getStoredTasks = () => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    return storedTasks || { pending: [], completed: [] };
  };

  const [tasks, setTasks] = useState(getStoredTasks);
  const [newTask, setNewTask] = useState({ title: "", description: "", date: "" });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!newTask.title.trim() || !newTask.description.trim() || !newTask.date) {
      alert("Please provide title, description, and due date.");
      return;
    }

    const newTaskObject = {
      id: Date.now().toString(),
      title: newTask.title,
      description: newTask.description,
      date: newTask.date,
    };

    setTasks((prev) => {
      const updatedTasks = { ...prev, pending: [...prev.pending, newTaskObject] };
      localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Save to local storage
      return updatedTasks;
    });

    setNewTask({ title: "", description: "", date: "" });
  };
  return (
    <div className="min-h-screen p-6 bg-blue-300">
      <h1 className="mb-7 text-2xl font-bold text-center text-gray-600">
        Welcome to Task Management
      </h1>

      <div className="flex items-center gap-4 mb-4 justify-center">
        <input
          type="text"
          placeholder="Task Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          className="w-1/4 bg-white p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Task Description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          className="w-1/3 bg-white p-2 border rounded"
        />
        <input
          type="date"
          value={newTask.date}
          onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
          className="w-1/5 bg-white p-2 border rounded"
        />
        <button onClick={addTask} className="px-4 py-2 text-white bg-blue-500 rounded">
          Add Task
        </button>
      </div>

      <TaskBoard tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default TaskManager;
