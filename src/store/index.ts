import { createStore, combineReducers } from "redux";

import { todoReducer } from "./todo/reducers";
import { userReducer } from "./user/reducers";

const rootReducer = combineReducers({
	todoReducer,
    userReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
	const store = createStore(rootReducer, 
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    );

	return store;
}