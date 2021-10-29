import React, { useState } from "react";
import "./App.css";
import Form from "./components/form/Form";
import ShowTask from "./components/showTask/ShowTask";

function App() {
	const [todoTask, setTodoTask] = useState([]);

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

	return (
		<div className="App">
			<Form onSave={addTask} />
			<div>
				<ShowTask todos={todoTask} deleteTask={deleteTask} />
			</div>
		</div>
	);
}

export default App;
