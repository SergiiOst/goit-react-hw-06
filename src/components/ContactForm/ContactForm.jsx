import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      ...values,
    };
    onAddContact(newContact);
    resetForm();
  };

  const ContactFormSchema = Yup.object({
    name: Yup.string()
      .required("This field is required!")
      .min(3, "Too short!")
      .max(50, "Too long!"),
    number: Yup.string()
      .required("This field is required!")
      .min(3, "Too short!")
      .max(50, "Too long!"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}>
      <Form className={s.form}>
        <label className={s.title}>Name</label>
        <Field
          type="text"
          name="name"
          className={s.field}
          placeholder="Enter new contact name"
        />
        <ErrorMessage name="name" component="span" className={s.error} />
        <label className={s.title}>Number</label>
        <Field
          type="text"
          name="number"
          className={s.field}
          placeholder="Enter new contact phone"
        />
        <ErrorMessage name="number" component="span" className={s.error} />
        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
