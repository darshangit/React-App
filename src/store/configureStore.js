import { createStore } from "redux";
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(reduxImmutableStateInvariant()) // can add comma separted middlewares like hot reloading etc
    );
}