import PropTypes from 'prop-types';

/**
 *
 * @param {{
 * label : "html label propery (optional)",
 * placeholder : "html placeholder(default enter a value) "
 * type : "html type (default text)"
 * value : "state value of the field *",
 * onChange : "update the state value *",
 * error : "validated error message (optional)",
 * }} props - set attribute of the field
 * @returns
 */

const TextInput = ({
  type,
  label,
  value,
  error,
  onChange,
  placeholder,
}) => {
  return (
    <div className="form-group my-3">

      {/* label if exist */}
      {label && <label htmlFor={label}>{label}</label>}

      {/* input filed  */}
      <input
        name={label}
        type={type}
        className={`form-control ${error ? 'is-invalid' : ''}`}
        id={label}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />

      {/* error if exist  */}
      {error && <p className="invalid-feedback">{error}</p>}
    </div>
  );
};


//prop type
TextInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};


//default prop 
TextInput.defaultProps = {
  type: 'text',
  placeholder: 'enter your text here',
};

export default TextInput;
