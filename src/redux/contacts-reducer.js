import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, changeFilter } from './contacts-actions';

const itemReducer = createReducer([], {
    [addContact]: (state, action) => [...state, action.payload],
    [deleteContact]: (state, action) => state.filter(contact => contact.id !== action.payload),
});

const filterReducer = createReducer('', {
    [changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
    items: itemReducer,
    filter: filterReducer,
});