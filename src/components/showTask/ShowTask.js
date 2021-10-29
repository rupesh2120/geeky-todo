import React from "react";
import "./ShowTask.css";
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
		<div className="list">
			{todos.map((todo) => (
				<div key={todo.id}>
					<div className="small-screen">
						<input
							type="text"
							value={todo.value}
							className={`task-input item-one ${
								todo.completed ? "completed" : ""
							}`}
							onChange={(event) => event.preventDefault()}
						/>
						<button
							className="edit-btn item-two"
							disabled={todo.completed}
							onClick={() => editTodo(todo.id)}
						>
							edit
						</button>
						<button
							className="complete-btn item-three"
							disabled={todo.completed}
							onClick={() => checkTodo(todo)}
						>
							{todo.completed ? "Done" : "Completed?"}
						</button>
						<button
							className="del-btn item-four"
							onClick={() => deleteTodo(todo.id)}
						>
							Delete
						</button>
					</div>
				</div>
			))}
		</div>
	);
}

export default ShowTask;
