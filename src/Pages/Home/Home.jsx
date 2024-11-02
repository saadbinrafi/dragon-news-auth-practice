import React from 'react';
import Header from '../Shared/Header/Header';
import NavBar from '../Shared/NavBar/NavBar';
import LeftSiteNave from '../Shared/LeftSiteNave/LeftSiteNave';
import RightSiteNave from '../Shared/RightSiteNave/RightSiteNave';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <h2 className='text-2xl font-poppins font-bold'>this is home </h2>
            <div className='grid grid-cols-1 lg:grid-cols-4   gap-6'>

                <div>
                    <LeftSiteNave></LeftSiteNave>
                </div>

                <div className='md:col-span-2'>
                    <h2 className="text-4xl">news coming soon</h2>

                </div>

                <div>
                    <RightSiteNave></RightSiteNave>
                </div>
            </div>
        </div>
    );
};

export default Home;