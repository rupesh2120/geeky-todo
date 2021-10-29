import React, { useState } from "react";
import "./App.css";
import Form from "./components/form/Form";
import ShowTask from "./components/showTask/ShowTask";

function App() {
	const [todoTask, setTodoTask] = useState([]);
	const [editTodo, setEditTodo] = useState("");

	const addTask = (todo) => {
		if (!todo.value) {
			return;
		}
		const newTask = [todo, ...todoTask];

		setTodoTask(newTask);
	};

	const deleteTask = (id) => {
		setTodoTask(todoTask.filter((todo) => todo.id !== id));
	};

	const checkTask = (todo) => {
		setTodoTask(
			todoTask.map((item) => {
				if (item.id === todo.id) {
					return { ...item, completed: !todo.completed };
				} else {
					return item;
				}
			})
		);
		console.log(todoTask);
	};

	const editTask = (id) => {
		setTodoTask(todoTask.filter((todo) => todo.id !== id));
	};

	return (
		<div className="App">
			<Form
				onSave={addTask}
				todos={todoTask}
				setTodoTask={setTodoTask}
				editTodo={editTodo}
				setEditTodo={setEditTodo}
			/>
			<div>
				<ShowTask
					todos={todoTask}
					deleteTask={deleteTask}
					checkTask={checkTask}
					editTask={editTask}
					setEditTodo={setEditTodo}
				/>
			</div>
		</div>
	);
}

export default App;
