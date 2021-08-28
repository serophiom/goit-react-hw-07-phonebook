import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../redux/contacts-actions';
import './Filter.css';

const Filter = () => {
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.contacts.filter);
    const dispatch = useDispatch();


    function getFilteredName (event) {
        const { value } = event.currentTarget;
        handleFilter(value);
    }

    const handleFilter = value => {
        dispatch(changeFilter(value))
    };

    return contacts.length !== 0 ? (
        <div>
        <label>
            Find contacts by Name<input
            className="filter-input"
            type="text"
            name="filter"
            value={filter}
            onChange={getFilteredName}
        />
        </label>
        
        </div>
        ) : (
        <p>There is no contacts in your Phonebook</p>
    )
};

export default Filter;