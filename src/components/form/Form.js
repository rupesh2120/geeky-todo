import React, { useState } from "react";

function Form({ onSave }) {
	const [inputValue, setInputValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onSave({
			id: Math.floor(Math.random() * 100),
			value: inputValue,
			completed: false,
		});
		setInputValue("");
	};

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
				/>
				<button className="add-btn" type="submit">
					+
				</button>
			</form>
		</div>
	);
}

export default Form;
