import PropTypes from "prop-types";
import { BiSolidUser } from "react-icons/bi";
import { BiSolidPhone } from "react-icons/bi";
import css from "./Contact.module.css";

export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <>
      <div className={css.div}>
        <p>
          <BiSolidUser />
          Name: {name}
        </p>
        <p className={css.p}>
          <BiSolidPhone />
          Number: {number}
        </p>

        <button className={css.btn} onClick={() => onDelete(id)} type="submit">
          Delete
        </button>
      </div>
    </>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func,
};
