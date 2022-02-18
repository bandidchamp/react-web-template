import { UserActionInterface, UserActionType, UserState } from "./types";

const initialState: UserState = {
	users: [],
};

export function userReducer(state = initialState, action: UserActionInterface): UserState {
	switch (action.type) {
		case UserActionType.ADD_USER:
			return { users: [...state.users, action.payload] };
		default:
			return state;
	}
}