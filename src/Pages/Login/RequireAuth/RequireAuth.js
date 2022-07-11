import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';


const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    if (loading) {
        return <Loading></Loading>;
    }
    if (!user) {
        return <Navigate to='/login' state={{ form: location }} replace />
    }
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div>
            <h3 className='text-danger'>Your email is not verified !!!</h3>
            <h3 className='text-sucess'>Please verified your email !!!</h3>
            <button className='btn btn-primary'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >
               Send Verification email again
            </button>
            <ToastContainer/>
        </div>
    }
    return children;
};

export default RequireAuth;
