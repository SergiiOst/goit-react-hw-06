import s from "./SearchBox.module.css";

const SearchBox = ({ value, onSearch }) => {
  return (
    <div className={s.container}>
      <p>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        value={value}
        placeholder="Enter contact name..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
