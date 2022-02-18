import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoState } from "store/todo/selectors";
import { checkTodo, deleteTodo } from "store/todo/actions";
const TodoTable = () => {
	const todos = useSelector(getTodoState);
	const dispatch = useDispatch();

	const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
		const index = +event.target.value;
		dispatch(checkTodo(index));
	};

	const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const index = +event.currentTarget.value;
		dispatch(deleteTodo(index));
	};
	return (
		<div className="container">
			<table className="table is-fullwidth is-hoverable">
				<thead>
					<tr>
						<th>#</th>
						<th>Todo</th>

						<th>Check</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{todos.map((todo, key) => {
						return (
							<tr key={key}>
								<td>{key + 1}</td>
								<td>{todo.isCheck ? <del> {todo.todo} </del> : todo.todo}</td>
								<td>
									<p>{todo.isCheck}</p>
									<label className="checkbox">
										<input
											type="checkbox"
											checked={todo.isCheck}
											onChange={handleCheck}
											value={key}
										/>
									</label>
								</td>
								<td>
									<button className="button is-danger" value={key} onClick={handleClick}>
										delete
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default TodoTable;