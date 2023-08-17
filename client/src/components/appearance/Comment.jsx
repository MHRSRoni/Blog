import PropTypes from 'prop-types'

const Comment = ({data}) => {
  return (
    <div className="card">
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>
           {data}
          </p>
          <footer className="blockquote-footer">
           Roni
          </footer>
        </blockquote>
      </div>
    </div>
  );
};


Comment.propTypes = {
    data : PropTypes.string,
}




export default Comment;
