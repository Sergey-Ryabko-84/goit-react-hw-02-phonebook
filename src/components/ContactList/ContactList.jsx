import PropTypes from 'prop-types';
import { Contact } from './Contact';

export const ContactList = ({ contactList, deleteHandler }) => (
  <ul>
    {contactList.map(contact => (
      <Contact
        key={contact.id}
        contact={contact}
        deleteHandler={deleteHandler}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteHandler: PropTypes.func.isRequired,
};
