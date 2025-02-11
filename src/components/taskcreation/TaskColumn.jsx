import React from "react";
import { useDrop } from "react-dnd";
import TaskCard from "./TaskCard";

const columnTitles = {
  pending: "Pending",
  completed: "Completed",
};

const TaskColumn = ({ columnId, tasks, setTasks }) => {
  const [, drop] = useDrop({
    accept: "TASK",
    drop: (item) => {
      setTasks((prev) => {
        const newTasks = { ...prev };
        const sourceColumn = newTasks[item.columnId].filter(
          (task) => task.id !== item.id
        );
        const updatedTask = { ...item, columnId };

        newTasks[item.columnId] = sourceColumn;
        newTasks[columnId] = [...newTasks[columnId], updatedTask];

        return newTasks;
      });
    },
  });

  return (
    <div ref={drop} className="bg-gray-400 shadow-md rounded-lg p-4 min-h-[200px]">
      <h2 className="m-4 text-2xl  text-center font-bold mb-4">{columnTitles[columnId]}</h2>
      <div className=" space-y-4">
        {tasks.map((task, index) => (
          <TaskCard key={task.id} task={task} index={index} columnId={columnId} setTasks={setTasks} />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;
