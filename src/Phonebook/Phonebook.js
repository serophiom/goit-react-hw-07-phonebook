import FormAddContacts from '../FormAddContacts/FormAddContacts';
import Contacts from '../Contacts/Contacts';
import Filter from '../Filter/Filter';
import './Phonebook.css';

function Phonebook() {

    return (
        <div className="phonebook">
            <h1>Phonebook</h1>
            <FormAddContacts />
            <h2>Contacts</h2>
            <Filter />
            <Contacts />
        </div>
    );
}

export default Phonebook;