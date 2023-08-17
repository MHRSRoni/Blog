import FormContainer from "../container/FormContainer";
import CreateBlog from "../form/blog/CreateBlog";

const CreateBlogPage = () => {
    return (
        <div>
            <FormContainer Form={CreateBlog} />
        </div>
    );
};

export default CreateBlogPage;