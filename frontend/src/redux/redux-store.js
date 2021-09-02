import { applyMiddleware, createStore, combineReducers }  from "redux" ;
import thunkMiddleware from "redux-thunk"; 
import subtopicReducer from "./subtopicReducer";
import topicReducer from "./topicReducer";



let reducers = combineReducers( {
    topics: topicReducer,
    subtopics: subtopicReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;