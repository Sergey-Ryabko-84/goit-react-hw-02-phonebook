import PropTypes from 'prop-types';

export const Contact = ({ contact, deleteHandler }) => (
  <li>
    <p>{contact.name}:</p>
    <p>{contact.number}</p>
    <button type="button" id={contact.id} onClick={deleteHandler}>
      Delete
    </button>
  </li>
);

Contact.propTypes = {
  contact: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
};