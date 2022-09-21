import React, { lazy, Suspense } from 'react';
import LazyLoader from '../components/MasterLayout/LazyLoader';
import MasterLayout from '../components/MasterLayout/MasterLayout';
const  Profile =lazy(() => import('../components/Profile/Profile'))

const ProfilePage = () => {
    return (
        <div>
            <MasterLayout>
            <Suspense fallback={<LazyLoader/>}>
            <Profile></Profile>
            </Suspense>
            </MasterLayout>
        </div>
    );
};

export default ProfilePage;