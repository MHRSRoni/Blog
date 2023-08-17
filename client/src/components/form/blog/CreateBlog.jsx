import axios from 'axios';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import SubmitButton from '../SubmitButton';
import TextAreaInput from '../TextAreaInput';
import TextInput from '../textInput';

const CreateBlog = ({edit}) => {
    const {id} = useParams()
    let type, message, navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [data, setData] = useState({})

    useEffect(()=>{
      try {
        (async()=>{
          const res = await axios.get("http://localhost:5001/api/v1/blog/"+ id)
          const obj = res.data.data[0]
          setData = 
          setTitle(obj.titile)

        })()
      } catch (error) {
        console.log(error)
      }
    },[])

  const initialValues = data
  console.log(initialValues)
  const validationSchema = Yup.object({
    title: Yup.string().required("enter a title"),
    description: Yup.string().required('this field is required'),
  });
  const onSubmit =async (value) =>{
    try {
        const res = await axios.post("http://localhost:5001/api/v1/blog/create", value)
        message = res.data.data
        type = "success"
        navigate("/blog")
        
    } catch (error) {
        message = error.response.data.data
        type = "error"
    }

    toast(message,{
        type,
        icon : true
    })

  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });


  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextInput
          label="Title"
          placeholder="Untitled"
          value={formik.values.title}
          onChange={formik.handleChange('title')}
          error={formik.errors.title}
        />

        <TextAreaInput
          label="Content"
          placeholder="Write your content here....."
          value={formik.values.description}
          onChange={formik.handleChange("description")}
          error={formik.errors.description}
          rows="5"
        />

        <SubmitButton name={edit ? "Update" : "Post"} error={formik.errors} />
      </form>
    </div>
  );
};

export default CreateBlog;
