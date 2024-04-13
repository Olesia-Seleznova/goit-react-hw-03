import PropTypes from "prop-types";
import Contact from "./Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contactsData, onDelete }) {
  return (
    <div className={css.div}>
      <ul className={css.ul}>
        {contactsData.map((contact) => (
          <li className={css.li} key={contact.id}>
            <Contact contact={contact} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}

ContactList.propTypes = {
  contactsData: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
