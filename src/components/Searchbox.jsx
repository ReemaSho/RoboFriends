const Searchbox = ({ searchChange }) => {
  return (
    <div className="Pa2 ma3">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default Searchbox;
