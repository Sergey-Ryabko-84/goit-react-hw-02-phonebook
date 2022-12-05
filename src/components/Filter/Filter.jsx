import PropTypes from 'prop-types';

export const Filter = ({ handleFilter, value }) => (
  <>
    <label htmlFor="filter">
      Find contacts by name
      <input type="text" name="filter" onChange={handleFilter} value={value} />
    </label>
  </>
);

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  value: PropTypes.string,
};
