import PropTypes from 'prop-types'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import SubmitButton from '../SubmitButton';
import TextAreaInput from '../TextAreaInput';
import axios from 'axios';
import { toast } from 'react-toastify';

const CreateComment = ({id,update}) => {
  const initialValues = { comment: '' };
  const validationSchema = Yup.object({
    comment: Yup.string().required('enter something'),
  });
  const onSubmit =async (value) =>{
    try {
      const res = await axios.post("http://localhost:5001/api/v1/blog/"+id+"/create-comment", {...value,authorId : "123456789124"})
      toast(res.data.data,{
        type : "success",
        icon : true
      })
      formik.values.comment  = ""
      update(new Date())
    } catch (error) {
      console.log(error)
    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div>
      <div className="container">
        <div className="row">
          <form onSubmit={formik.handleSubmit}>
            <TextAreaInput
              label="Comment"
              placeholder="enter your comment....."
              value={formik.values.comment}
              onChange={formik.handleChange('comment')}
              error={formik.errors.comment}
              touched={formik.touched.comment}
              rows="4"
            />
            <SubmitButton name="post" />
          </form>
        </div>
      </div>
    </div>
  );
};

CreateComment.propTypes = {
  id : PropTypes.string.isRequired,
  update : PropTypes.func.isRequired
}

export default CreateComment;
