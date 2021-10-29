import React from "react";

function ShowTask({ todos, deleteTask }) {
	const deleteTodo = (id) => {
		deleteTask(id);
	};

	return (
		<div>
			{todos.map((todo) => (
				<li className="list" key={todo.id}>
					<input
						type="text"
						value={todo.value}
						className="task-list"
						onChange={(event) => event.preventDefault()}
					/>
					<button className="completed" value="Not completed">
						completed?
					</button>
					<button
						className="completed"
						value="Not completed"
						onClick={() => deleteTodo(todo.id)}
					>
						Delete
					</button>
				</li>
			))}
		</div>
	);
}

export default ShowTask;
