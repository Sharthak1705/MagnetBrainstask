import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TaskColumn from "./TaskColumn";

const TaskBoard = ({ tasks, setTasks }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="w-full min-h-screen flex justify-center items-center bg-blue-300 p-10">
        <div className="w-[90%] h-[90vh] grid grid-cols-2 gap-8 bg-transparent p-6 rounded-lg shadow-lg">
          {Object.keys(tasks).map((columnId) => (
            <TaskColumn key={columnId} columnId={columnId} tasks={tasks[columnId]} setTasks={setTasks} />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default TaskBoard;
