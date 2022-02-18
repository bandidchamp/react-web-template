import { User, UserActionType, UserActionInterface } from "./types";

export function addTodo(todo: User): UserActionInterface {
	return {
		type: UserActionType.ADD_USER,
		payload: todo,
	};
}