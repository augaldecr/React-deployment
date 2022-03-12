import { createStore } from "redux";
import todos from "./reducers/tasksReducer";

const store = createStore(todos)

export default store