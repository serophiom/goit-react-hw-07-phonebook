import axios from 'axios';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:7777';

export const fetchContacts = () => async dispatch => {
    dispatch(fetchContactsRequest());
  
    try {
      const { data } = await axios.get('/contacts');
      dispatch(fetchContactsSuccess(data));
    } catch (error) {
      dispatch(fetchContactsError(error));
    }
  };
  
  export const addContact = (name, number) => async dispatch => {
    const contact = {
      name,
      number,
    };
  
    dispatch(addContactRequest());
  
    try {
      const { data } = await axios.post('/contacts', contact);
      dispatch(addContactSuccess(data));
    } catch (error) {
      dispatch(addContactError(error));
    }
  };
  
  export const deleteContact = contactId => dispatch => {
    dispatch(deleteContactRequest());
  
    axios
      .delete(`/contacts/${contactId}`)
      .then(() => dispatch(deleteContactSuccess(contactId)))
      .catch(error => dispatch(deleteContactError(error)));
  };

