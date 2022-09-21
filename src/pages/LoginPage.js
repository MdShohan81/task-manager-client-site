import React, { lazy, Suspense } from 'react';
import LazyLoader from '../components/MasterLayout/LazyLoader';

const  Login =lazy(() => import('../components/Login/Login'))
const LoginPage = () => {
    return (
        <div>
            
            <Suspense fallback={<LazyLoader/>}>
                <Login></Login>
                </Suspense>
            
        </div>
    );
};

export default LoginPage;