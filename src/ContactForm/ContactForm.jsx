// import { Formik, Form, Field } from "formik";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

export default function ContactForm({ onAddContact }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddContact({
      id: nanoid(),
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    });
    e.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>Name</label>
      <input className={css.input} type="text" name="name"></input>
      <label className={css.label}>Number</label>
      <input className={css.input} type="number" name="number"></input>

      <button className={css.btn} type="submit">
        Add ontact
      </button>
    </form>
    // <Formik
    //   initialValues={{}}
    //   onSubmit={() => {
    //     handleSubmit;
    //   }}
    // >
    //   <Form>
    //     <Field type="text" name="name">
    //       Name
    //     </Field>
    //     <Field type="number" name="number">
    //       Number
    //     </Field>
    //     <button type="submit">Add ontact</button>
    //   </Form>
    // </Formik>
  );
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
