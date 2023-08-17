import PropTypes from 'prop-types'

const CommentList = ({Comment}) => {


    return (
        <div>
            {Comment}
            
        </div>
    );
};

CommentList.propTypes = {
    Comment : PropTypes.array
}

export default CommentList;