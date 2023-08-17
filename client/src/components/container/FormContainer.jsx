import PropTypes from 'prop-types';

const FormContainer = ({ Form }) => {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-5">
          {Form}
        </div>
      </div>
    </div>
  );
};

FormContainer.propTypes = {
  Form: PropTypes.func.isRequired,
};

export default FormContainer;
