import PropTypes from 'prop-types'

const BlogCard = ({title, description,author,time, onClick,onLike,onEdit,id,likes,views, liked}) => {

  return (
    <div className="col" >
      <div className="card" style={{width : "18rem"}} >
        <div className="card-body">
          <h5 className="card-title" style={{cursor : "pointer"}} onClick={()=>{onClick()}}>{title}</h5>
          <p className="card-text">
            {description}
          </p>
          <button className='btn btn-success' onClick={()=>onLike(id)}>{liked ? "liked" : "like"}</button>
          <button className='btn btn-info' onClick={()=>onEdit(id)} />
        </div>
        <div className='card-footer'>
          <p className='text-secondary'>{author}</p>
          <p>{time}</p>
          <p>like : {likes}</p>
          <p>views : {views}</p>
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
    title : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    author : PropTypes.string,
    time : PropTypes.string,
    onClick : PropTypes.func,
}

export default BlogCard;
