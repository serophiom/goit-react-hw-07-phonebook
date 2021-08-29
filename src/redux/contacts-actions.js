import { createAction } from '@reduxjs/toolkit';

// fetch pending
export const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
// fetch fulfilled
export const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
// fetch rejected
export const fetchContactsError = createAction('contacts/fetchContactsError');

// add pending
export const addContactRequest = createAction('contacts/addContactRequest');
// add fulfilled
export const addContactSuccess = createAction('contacts/addContactSuccess');
// add rejected
export const addContactError = createAction('contacts/addContactError');

// delete pending
export const deleteContactRequest = createAction('contacts/deleteContactRequest');
// delete fulfilled
export const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
// delete rejected
export const deleteContactError = createAction('contacts/deleteContactError');


export const changeFilter = createAction('contacts/changeFilter');