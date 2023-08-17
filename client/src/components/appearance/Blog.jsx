import PropTypes from 'prop-types'
const Blog = ({data}) => {
    
    
    return (
        <div>
            <h3 className="fw-bold">{data.title}</h3>
            <p>{data.description}</p>
        </div>
    );
};

Blog.propTypes = {
    data : PropTypes.object.isRequired
}

export default Blog;