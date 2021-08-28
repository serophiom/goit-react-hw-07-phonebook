import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contacts-actions';
import './Contacts.css';

const Contacts = () => {
    const contacts = useSelector(state => state.contacts.items);
    const dispatch = useDispatch();
    const filter = useSelector(state => state.contacts.filter);

    const toLowerCase = filter.toLowerCase();
    const showContacts = contacts.filter(contact =>
         contact.name.toLowerCase().includes(toLowerCase)
    );

    const onDeleteContact = (contactId) => {
        dispatch(deleteContact(contactId))
    };

    return contacts && (
        <ul>
            {showContacts.map(({ id, name, number }) => (
                <li key={id} className="contacts__item">
                    <p className="contacts__text">{name}: {number}</p>
                    <button onClick={() => onDeleteContact(id)}>delete</button>
                </li>
            ))}
        </ul>
    )
    
};

export default Contacts;