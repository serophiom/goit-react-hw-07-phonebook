export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

const getVisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

export const getVisibleContactsByName = state => {
  const visibleContacts = getVisibleContacts(state);

  const visibleContactsByName = visibleContacts.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return visibleContactsByName;
};