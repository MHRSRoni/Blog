import PropTypes from 'prop-types';
import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

/**
 *
 * @param {{
 * label : "html label propery (optional)",
 * placeholder : "html placeholder(default enter a value) "
 * value : "state value of the field *",
 * onChange : "update the state value *",
 * error : "validated error message (optional)",
 * }} props - set attribute of the field
 * @returns
 */

const PasswordInput = ({
  label,
  placeholder,
  value,
  onChange,
  error,
}) => {

  //state for toggleing password field to text field
  const [shown, setShown] = useState(false);


  return (
    <div className="form-group my-3">

      {/* label if exist */}
      {label && <label htmlFor={label}>{label}</label>}

      {/* input filed  */}
      <div className=" position-relative">
        <div className="input-group ">
            <input
              border="0px"
              name={label}
              type={`${shown ? 'text' : 'password'}`}
              className={`form-control p-2 ${
                error ? 'is-invalid' : ''
              }`}
              id={label}
              placeholder={placeholder}
              onChange={onChange}
              value={value}
            />

       {/* filed toggleing button  */}
          <div
            className="position-absolute top-50 translate-middle end-0 mx-1"
            onClick={() => setShown(!shown)}
          >
            {shown ? <FiEyeOff type="btn" /> : <FiEye />}
          </div>

        </div>
        {/* error if exist  */}
        {<p className="invalid-feedback">{error}</p>}
      </div>
    </div>
  );
};

//prop types 

PasswordInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  rows: PropTypes.string,
  cols: PropTypes.string,
};


//default prop types
PasswordInput.defaultProps = {
  placeholder: 'Enter your password...',
};

export default PasswordInput;
