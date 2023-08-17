import PropTypes from 'prop-types';

/**
 *
 * @param {{
 * label : "html label propery (optional)",
 * type : "html type propery (default text)",
 * placeholder : "html placeholder(default enter a value) "
 * rows : "rows to expand the field",
 * value : "state value of the field *",
 * onChange : "update the state value *",
 * error : "validated error message (optional)",
 * }} props - set attribute of the field
 * @returns
 */
const TextAreaInput = ({
  label,
  value,
  error,
  onChange,
  placeholder,
  rows,
}) => {
  return (
    <div className="form-group my-3">

      {/* label if exist  */}
      {label && <label htmlFor={label}>{label}</label>}

      {/* text area field  */}
      <textarea
        name={label}
        className={`form-control ${error ? 'is-invalid' : ''}`}
        id={label}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        rows={rows}
      />

      {/* error if exist  */}
      {error && <p className="invalid-feedback">{error}</p>}
    </div>
  );
};


//prop types
TextAreaInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  rows: PropTypes.string,
};

//default prop
TextAreaInput.defaultProps = {
  placeholder: 'enter your text here',
};

export default TextAreaInput;
