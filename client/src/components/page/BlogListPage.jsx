import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import BlogCard from '../appearance/BlogCard';
import BlogCardContainer from '../container/BlogCardContainer';

const BlogListPage = () => {
  const [update, setUpdate] = useState("")
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          'http://localhost:5001/api/v1/blog'
        );
        setData(res.data.data);
      } catch (error) {
        toast(error.response.data.data, {
          type: 'warning',
          icon: true,
        });
      }
    })();
  }, [update]);

  const onClick = (id) => {
    try {
      navigate(`/blog/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const like =async (id) =>{
    try {
      const res = await axios.post("http://localhost:5001/api/v1/blog/like", {id})
      setUpdate(new Date())
      console.log(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  const edit= async (id)=>{
    try {
      const res = await axios.post("http://localhost:5001/v1/blog/update/" + id,)
    } catch (error) {
      
    }
  }

  return (
    <div>
      <BlogCardContainer
        Blogs={
          data &&
          data.map((item) => (
            <BlogCard
              id={item._id}
              title={item.title}
              description={item.description}
              key={item._id}
              author={item.author}
              time={new Date(item.createdAt).toLocaleString()}
              onClick={() => onClick(item._id)}
              onLike={like}
              likes={item.likesCount}
              views={item.viewsCount}
              liked={item.liked}
            />
          ))
        }
      />
    </div>
  );
};

export default BlogListPage;
