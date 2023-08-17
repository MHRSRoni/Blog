import FormContainer from '../container/FormContainer';
import Signup from '../form/signup/Signup';

const SignupPage = () => {
    return (
        <div>
            <FormContainer Form={<Signup/>} />
                
        </div>
    );
};

export default SignupPage;