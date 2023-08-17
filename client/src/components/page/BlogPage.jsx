import { useParams } from "react-router-dom";
import Blog from "../appearance/Blog";
import Comment from "../appearance/Comment";
import CommentList from "../appearance/CommentList";
import BlogContainer from "../container/BlogContainer";
import CommentContainer from "../container/CommentContainer";
import CreateComment from "../form/comment/CreateComment";
import { useEffect, useState } from "react";
import axios from "axios";

const BlogPage = () => {
    const [comment, setComment] = useState(false)
    const [data, setData] = useState({})
    const [update, setUpdate] = useState()

    const {id} = useParams()


  

    useEffect(()=>{
    const fetchData = async()=>{
            try {
                const res = await axios.get("http://localhost:5001/api/v1/blog/"+ id)
                setData(res.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()

    },[update])


    return (
        <div className="container">
            <BlogContainer Blog={<Blog data={data} />} />
            <CommentContainer Comment={<CommentList Comment={data.comments && data.comments.map((item,id)=><Comment key={id} data={item.comment} />)}      />}      />
            <button onClick={()=>setComment(!comment)} className="btn btn-dark" >Write Comment</button>
            {comment && <CreateComment id={id} update={setUpdate} />}

        </div>
    );
};

export default BlogPage;