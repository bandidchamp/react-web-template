import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "store/todo/actions";

const Todo = () => {
	const [todoMessage, setTodoMessage] = React.useState("");
	const dispatch = useDispatch();

	const handleButtonClick = () => {
		const todo = { todo: todoMessage, isCheck: false };
		dispatch(addTodo(todo));
		setTodoMessage("");
	};

	const handeOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTodoMessage(event.target.value);
	};

	return (
		<section className="hero is-dark">
			<div className="hero-body">
				<div className="container">
					<h1 className="title">Todos</h1>
					<div className="field">
						<div className="control">
							<input
								className="input is-large"
								type="text"
								placeholder="Input Todo..."
								onChange={handeOnChange}
								value={todoMessage}
							/>
						</div>
					</div>
					<button className="button is-medium is-fullwidth" onClick={handleButtonClick}>
						Add Todo
					</button>
				</div>
			</div>
		</section>
	);
};

export default Todo;