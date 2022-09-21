import React, { lazy, Suspense } from 'react';
import LazyLoader from '../components/MasterLayout/LazyLoader';
const  Registration =lazy(() => import('../components/Registration/Registration'))

const RegistrationPage = () => {
    return (
        <div>
            
            <Suspense fallback={<LazyLoader/>}>
            <Registration></Registration>
            </Suspense>
           
        </div>
    );
};

export default RegistrationPage;