import { useFormik } from 'formik';
import * as Yup from 'yup';
import PasswordInput from '../passwordInput';
import TextInput from '../textInput';
import SubmitButton from '../SubmitButton';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('enter valid email')
      .required('enter a email'),
    password: Yup.string()
      .min(8, 'at least 8 charecter')
      .required('enter password'),
  });
  let navigate = useNavigate()
  let message , type

  const onSubmit = async (value) => {
    try {
      const res = await axios.post("http://localhost:5001/api/v1/user/login", value)
      message = res.data.data
      type = "success"
      navigate("/blog")

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
          type="email"
          label="Email"
          placeholder="example@mail.com"
          value={formik.values.email}
          onChange={formik.handleChange('email')}
          error={formik.errors.email}
        />

        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          value={formik.values.password}
          onChange={formik.handleChange('password')}
          error={formik.errors.password}
        />

        <SubmitButton name="Login" error={formik.errors} />
      </form>
    </div>
  );
};

export default Login;
