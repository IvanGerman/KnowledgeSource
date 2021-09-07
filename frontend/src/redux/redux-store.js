import { applyMiddleware, createStore, combineReducers }  from "redux" ;
import thunkMiddleware from "redux-thunk"; 
import contentBlockReducer from "./contentBlockReducer";
import idForMapingReducer from "./idForMapingReducer";
import subtopicReducer from "./subtopicReducer";
import topicReducer from "./topicReducer";



let reducers = combineReducers( {
    topics: topicReducer,
    subtopics: subtopicReducer,
    contentBlocks: contentBlockReducer,
    idForMaping: idForMapingReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;