import { createStore,applyMiddleware } from "redux";
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, reduxImmutableStateInvariant()) // can add comma separted middlewares like hot reloading etc
    );
}