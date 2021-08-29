import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getShowContacts = createSelector(
    [getContacts, getFilter], (contacts, filter) => {
        const toLowerCase = filter.toLowerCase();
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(toLowerCase));
    }
);