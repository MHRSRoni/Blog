import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import SubmitButton from '../SubmitButton';
import PasswordInput from '../passwordInput';
import TextInput from '../textInput';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    cpassword: '',
  };
  let message = ""
  let type = "error"
  let navigate = useNavigate()
  const validationSchema = Yup.object({
    name: Yup.string().required('enter name').min(3,"min 3 charecter"),
    email: Yup.string()
      .email('enter a valid email')
      .required('enter email'),
    password: Yup.string().min(8, 'min 8').required('enter password'),
    cpassword: Yup.string()
      .oneOf([Yup.ref('password'), null], "password didn't match")
      .required('repeat password here'),
  });
  const onSubmit = async (value) => {
    try {
      const res = await axios.post(
        'http://localhost:5001/api/v1/user/signup',
        value
      );
      message = res.data.data
      type = "success"
      navigate("/login")
    } catch (error) {
      message = error.response.data.data
      type = "error"
    }
    toast[type](message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

    
    
  };
 
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
    


      <form className="form" onSubmit={formik.handleSubmit}>
        <TextInput
          label="Name"
          placeholder="Enter your name..."
          value={formik.values.name}
          onChange={formik.handleChange('name')}
          error={formik.errors.name}
        />

        <TextInput
          type="email"
          label="Email"
          placeholder="Enter your email..."
          value={formik.values.email}
          onChange={formik.handleChange('email')}
          error={formik.errors.email}
        />

        <PasswordInput
          label="Password"
          placeholder="Enter your password..."
          value={formik.values.password}
          onChange={formik.handleChange('password')}
          error={formik.errors.password}
        />

        <PasswordInput
          label="Confirm Password"
          placeholder="Repeat your password..."
          value={formik.values.cpassword}
          onChange={formik.handleChange('cpassword')}
          error={formik.errors.cpassword}
        />
        <SubmitButton name="Signup" error={formik.errors} />
        
      </form>
      
    </>
  );
};

export default Signup;
