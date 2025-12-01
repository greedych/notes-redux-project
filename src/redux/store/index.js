import { createStore } from "redux";
import notesReduser from "../reducers";

const store = createStore(notesReduser);

export default store;
