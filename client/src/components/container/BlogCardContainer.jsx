import propTypes from 'prop-types';

const BlogCardContainer = ({ Blogs }) => {
  return (
    <div>
      <div className="container">
        <div className="row gy-4">{Blogs}</div>
      </div>
    </div>
  );
};

BlogCardContainer.propTypes = {
  Blogs: propTypes.array.isRequired,
};

export default BlogCardContainer;
