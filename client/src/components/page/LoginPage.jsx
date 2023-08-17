import FormContainer from '../container/FormContainer';
import Login from '../form/login/Login';

const LoginPage = () => {
    return (
        <div>
            <FormContainer Form={<Login />} />
        </div>
    );
};

export default LoginPage;