import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from '../redux/contacts-operations';
import { getContacts, getShowContacts } from '../redux/contacts-selectors'
import './Contacts.css';

const Contacts = () => {
    const contacts = useSelector(getContacts);
    const showContacts = useSelector(getShowContacts);
    const dispatch = useDispatch();
    
    useEffect(() => dispatch(fetchContacts()), [dispatch]);

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