import PropTypes from "prop-types"

const BlogContainer = ({Blog}) => {
    return (
        <div className="container">
            <div className="row">
                {Blog}
            </div>
        </div>
    );
};

BlogContainer.propTypes = {
    Blog : PropTypes.object.isRequired
}


export default BlogContainer;