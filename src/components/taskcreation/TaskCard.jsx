import React, { useState, useEffect } from "react";
import { useDrag } from "react-dnd";
import { FiTrash2, FiEdit, FiCheck } from "react-icons/fi";
const COLORS = ["#FFADAD", "#FFD6A5", "#FDFFB6", "#CAFFBF", "#9BF6FF", "#A0C4FF", "#BDB2FF", "#FFC6FF"];

const getRandomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];

const TaskCard = ({ task, columnId, setTasks }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { ...task, columnId },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [editedDate, setEditedDate] = useState(task.date);
  const [cardColor, setCardColor] = useState(task.color || getRandomColor());
  const updateLocalStorage = (updatedTasks) => {
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  useEffect(() => {
    if (!task.color) {
      setTasks((prev) => {
        const updatedTasks = {
          ...prev,
          [columnId]: prev[columnId].map((t) =>
            t.id === task.id ? { ...t, color: cardColor } : t
          ),
        };
        updateLocalStorage(updatedTasks);
        return updatedTasks;
      });
    }
  }, []);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks((prev) => {
        const updatedTasks = { ...prev, [columnId]: prev[columnId].filter((t) => t.id !== task.id) };
        updateLocalStorage(updatedTasks);
        return updatedTasks;
      });
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (!editedTitle.trim() || !editedDescription.trim() || !editedDate.trim()) {
      alert("All fields must be filled out.");
      return;
    }

    setTasks((prev) => {
      const updatedTasks = {
        ...prev,
        [columnId]: prev[columnId].map((t) =>
          t.id === task.id ? { ...t, title: editedTitle, description: editedDescription, date: editedDate } : t
        ),
      };
      updateLocalStorage(updatedTasks);
      return updatedTasks;
    });

    setIsEditing(false);
  };

  return (
    <div
      ref={drag}
      className={`p-4 rounded-lg shadow-md border flex flex-col gap-2 transition-all ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
      style={{ backgroundColor: cardColor }} // Apply random color
    >
      {isEditing ? (
        <>
          <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} className="w-full border p-1 font-bold" />
          <input type="text" value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} className="w-full border p-1" />
          <input type="date" value={editedDate} onChange={(e) => setEditedDate(e.target.value)} className="w-full border p-1" />
        </>
      ) : (
        <>
          <h3 className="font-bold text-gray-900">{task.title}</h3>
          <p className="text-gray-800">{task.description}</p>
          <h5 className="text-gray-700">{task.date}</h5>
        </>
      )}

      <div className="flex justify-end gap-5 mt-2">
        {isEditing ? (
          <button onClick={handleSave} className="border-2 p-1 text-green-500">
            <FiCheck size={20} />
          </button>
        ) : (
          <button onClick={handleEdit} className="text-blue-500 border-2 p-1">
            <FiEdit size={20} />
          </button>
        )}
        <button onClick={handleDelete} className="text-red-500 p-1 border-2">
          <FiTrash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
