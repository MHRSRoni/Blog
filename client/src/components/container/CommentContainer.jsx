import PropTypes from 'prop-types'

const CommentContainer = ({Comment}) => {
  return (
    <div className="container">
      <div className="row">{Comment}</div>
    </div>
  );
};

CommentContainer.propTypes = {
    Comment : PropTypes.object.isRequired
}

export default CommentContainer;
