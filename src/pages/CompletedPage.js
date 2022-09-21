import React, { lazy, Suspense } from 'react';
import LazyLoader from '../components/MasterLayout/LazyLoader';
import MasterLayout from '../components/MasterLayout/MasterLayout';
const  Completed =lazy(() => import('../components/Completed/Completed'))

const CompletedPage = () => {
    return (
        <div>
            <MasterLayout>
            <Suspense fallback={<LazyLoader/>}>
                <Completed></Completed>
                </Suspense>
            </MasterLayout>
        </div>
    );
};

export default CompletedPage;