import PropTypes from "prop-types";
import css from "./SearchBox.module.css";

export default function SearchBox({ value, onSearch }) {
  return (
    <div>
      <p className={css.p}>Find contact by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
