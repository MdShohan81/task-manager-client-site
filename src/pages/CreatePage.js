import React, { lazy, Suspense } from 'react';
import LazyLoader from '../components/MasterLayout/LazyLoader';
import MasterLayout from '../components/MasterLayout/MasterLayout';
const  Create =lazy(() => import('../components/Create/Create'))

const CreatePage = () => {
    return (
        <div>
           <MasterLayout>
           <Suspense fallback={<LazyLoader/>}>
            <Create></Create>
           </Suspense>
           </MasterLayout>
        </div>
    );
};

export default CreatePage;