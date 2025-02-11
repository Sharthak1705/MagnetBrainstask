# React + Vite
# Task Management System

## Overview
This is a **Task Management System** built using **React.js** with **React DnD (Drag and Drop)**. The application allows users to:

- Add new tasks with a **title, description, and due date**.
- Assign each task a **random background color**.
- Edit or delete tasks.
- Drag and drop tasks between different status columns (**Pending & Completed**).
- Persist tasks using **Local Storage**, so they remain after page reloads.

## Features

✅ **Add New Tasks** with title, description, and due date.  
✅ **Random Background Color** for each task.  
✅ **Edit & Delete Tasks**.  
✅ **Drag and Drop Support** using `react-dnd`.  
✅ **Tasks are Stored in Local Storage** and persist after refresh.  
✅ **Fully Responsive UI** built with Tailwind CSS.  

## Tech Stack
- **Frontend:** React.js, React DnD, Tailwind CSS
- **State Management:** React `useState`
- **Local Storage:** To store tasks persistently

## Installation

1. **Clone the Repository:**
```sh
   git clone https://github.com/your-repo/task-manager.git
   cd task-manager
```

2. **Install Dependencies:**
```sh
   npm install
```

3. **Run the Application:**
```sh
   npm start
```

## Folder Structure
```
/task-manager
│── /src
│   ├── /components
│   │   ├── TaskManager.jsx  # Main component handling task state
│   │   ├── TaskBoard.jsx    # Handles drag and drop board
│   │   ├── TaskColumn.jsx   # Column component for tasks
│   │   ├── TaskCard.jsx     # Individual task cards
│   ├── /register
|   |   ├── form.jsx     # Connection of login and signup page 
│   │   ├── Login.jsx    # Create a login page 
│   │   ├── SignUp.jsx   # Create a SignUp page 
│   ├── /pages
|   |   ├── Header.jsx     # Main heading page
│   ├── App.jsx              # Main entry point
│   ├── index.js             # React DOM rendering
│── /public
│── package.json
│── README.md
```



Authentication (Sign Up & Login)

Sign Up

1.Users can register by providing:

a.Username

b.Email

c.Password

2.User data is stored in local storage.

3.After registration, users can log in using their credentials.

Login

1.Users log in using their email or username and password.

2.If authentication is successful, users are redirected to the Task Dashboard.

3.The session is managed using local storage, ensuring persistence after refresh.


## Usage
### Adding a Task
1. Enter the task **title, description, and due date**.
2. Click the **"Add Task"** button.
3. The task will appear in the **Pending** column with a random color.

### Editing a Task
1. Click the **edit icon** ✏️ on a task.
2. Modify the **title, description, or due date**.
3. Click the **check icon** ✅ to save changes.

### Deleting a Task
1. Click the **trash icon** 🗑️ to delete a task.
2. Confirm the deletion.

### Dragging Tasks
1. Click and **drag a task card** to another column.
2. Drop it to change its status.

## Dependencies
- **React.js**: UI library
- **React DnD**: Drag and drop functionality
- **Tailwind CSS**: Styling framework
- **Local Storage API**: Data persistence

## Future Improvements
- Add user authentication.
- Implement a backend for database storage.
- Add more status columns (e.g., "In Progress").
- Implement due date reminders.

## License
This project is **open-source** under the MIT License.

## Author
**Your Name**  
[GitHub](https:github.com/Sharthak1705) | [LinkedIn](https:linkedin.com/in/sharthak-jain-b03442225/)

