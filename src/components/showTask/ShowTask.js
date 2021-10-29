import React from "react";

function ShowTask({ todos, deleteTask, checkTask, setEditTodo }) {
	const deleteTodo = (id) => {
		deleteTask(id);
	};

	const checkTodo = (todo) => {
		checkTask(todo);
	};

	const editTodo = (id) => {
		const selectTaskToEdit = todos.find((todo) => todo.id === id);
		setEditTodo(selectTaskToEdit);
	};

	return (
		<div>
			{todos.map((todo) => (
				<div className="list" key={todo.id}>
					<input
						type="text"
						value={todo.value}
						className="task-list"
						onChange={(event) => event.preventDefault()}
					/>
					<button className="completed" onClick={() => editTodo(todo.id)}>
						edit
					</button>
					<button className="completed" onClick={() => checkTodo(todo)}>
						completed?
					</button>
					<button className="delete" onClick={() => deleteTodo(todo.id)}>
						Delete
					</button>
				</div>
			))}
		</div>
	);
}

export default ShowTask;
