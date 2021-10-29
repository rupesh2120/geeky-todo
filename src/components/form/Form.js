import React, { useState, useEffect } from "react";
import "./Form.css";
function Form({ todos, setTodoTask, onSave, editTodo, setEditTodo }) {
	const [inputValue, setInputValue] = useState("");

	const maxLengthCheck = (object) => {
		if (object.target.value.length > object.target.maxLength) {
			object.target.value = object.target.value.slice(
				0,
				object.target.maxLength
			);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!editTodo) {
			onSave({
				id: Math.floor(Math.random() * 100),
				value: inputValue,
				completed: false,
			});
			setInputValue("");
		} else {
			updateTask(inputValue, editTodo.id, editTodo.completed);
		}
	};

	const updateTask = (value, id, completed) => {
		const newtask = todos.map((todo) =>
			todo.id === id ? { value, id, completed } : todo
		);
		setTodoTask(newtask);
		setEditTodo("");
	};

	useEffect(() => {
		if (editTodo) {
			setInputValue(editTodo.value);
		} else {
			setInputValue("");
		}
	}, [editTodo, setInputValue]);

	return (
		<div>
			<h3>Geeky ToDo App</h3>
			<form className="form" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Add Task"
					value={inputValue}
					name="text"
					className="task-input"
					onChange={(e) => setInputValue(e.target.value)}
					maxLength="18"
					onInput={maxLengthCheck}
				/>
				<button
					className="add-btn"
					type="submit"
					disabled={inputValue.length < 1}
				>
					{editTodo ? "Save" : "Add"}
				</button>
			</form>
		</div>
	);
}

export default Form;
