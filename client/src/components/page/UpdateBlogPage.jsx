import BlogContainer from "../container/BlogContainer";
import CreateBlog from "../form/blog/CreateBlog";

const UpdateBlogPage = () => {
    return (
        <div>
            <BlogContainer Blog={<CreateBlog edit={true} />} />
        </div>
    );
};

export default UpdateBlogPage;