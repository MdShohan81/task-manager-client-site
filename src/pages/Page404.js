import React, { lazy, Suspense } from 'react';
import LazyLoader from '../components/MasterLayout/LazyLoader';
import MasterLayout from '../components/MasterLayout/MasterLayout';
const  NotFound =lazy(() => import('../components/NotFound/NotFound'))

const Page404 = () => {
    return (
        <div>
            <MasterLayout>
            <Suspense fallback={<LazyLoader/>}>
            <NotFound></NotFound>
            </Suspense>
            </MasterLayout>
        </div>
    );
};

export default Page404;