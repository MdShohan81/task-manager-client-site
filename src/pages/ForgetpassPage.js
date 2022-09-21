import React, { lazy, Suspense } from 'react';
import LazyLoader from '../components/MasterLayout/LazyLoader';
import MasterLayout from '../components/MasterLayout/MasterLayout';
const  ForgetsPass =lazy(() => import('../components/ForgetsPass/ForgetsPass'))
const ForgetpassPage = () => {
    return (
        <div>
            <MasterLayout>
            <Suspense fallback={<LazyLoader/>}>

            <ForgetsPass></ForgetsPass>

            </Suspense>
            </MasterLayout>
        </div>
    );
};

export default ForgetpassPage;