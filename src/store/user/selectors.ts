import { RootState } from "..";

export function getUserState(state: RootState) {
	return state.userReducer.users;
}