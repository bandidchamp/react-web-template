export interface User {
    user: string;
}

export interface UserState {
    users: User[];
}

export enum UserActionType {
    ADD_USER = "ADD_USER",
}
export type UserAction = UserActionType;

export interface UserActionInterface {
    type: UserAction;
    payload: any;
}