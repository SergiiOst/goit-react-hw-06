import { FaPhone, FaUser } from "react-icons/fa6";
import s from "./Contact.module.css";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <div className={s.container}>
      <div>
        <p className={s.name}>
          <span className={s.icon}>
            <FaUser size={15} />
          </span>
          {name}
        </p>
        <p className={s.number}>
          <span className={s.icon}>
            <FaPhone size={15} />
          </span>
          {number}
        </p>
      </div>
      <button className={s.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
