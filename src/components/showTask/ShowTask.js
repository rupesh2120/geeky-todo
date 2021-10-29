import React from "react";

function ShowTask({ todos, deleteTask, checkTask, editTask }) {
	const deleteTodo = (id) => {
		deleteTask(id);
	};

	const checkTodo = (id) => {
		checkTask(id);
	};

	const editTodo = (id) => {
		editTask(id);
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
					<button className="completed" onClick={() => editTodo(todo)}>
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
