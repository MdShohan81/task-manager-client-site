import React, { lazy, Suspense } from 'react';
import LazyLoader from '../components/MasterLayout/LazyLoader';
import MasterLayout from '../components/MasterLayout/MasterLayout';
const  New =lazy(() => import('../components/New/New'))

const NewPage = () => {
    return (
        <div>
            <MasterLayout>
            <Suspense fallback={<LazyLoader/>}>
            <New></New>
            </Suspense>
            </MasterLayout>
        </div>
    );
};

export default NewPage;