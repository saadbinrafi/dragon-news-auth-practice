import React from 'react';
import Header from '../Shared/Header/Header';
import NavBar from '../Shared/NavBar/NavBar';
import LeftSiteNave from '../Shared/LeftSiteNave/LeftSiteNave';
import RightSiteNave from '../Shared/RightSiteNave/RightSiteNave';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const Home = () => {
    const news = useLoaderData();
    console.log(news)
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>

            <div className='grid grid-cols-1 lg:grid-cols-4   gap-6'>

                <div>
                    <LeftSiteNave></LeftSiteNave>
                </div>
                {/* {news coming soon} */}
                <div className='md:col-span-2'>

                    {
                        news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
                    }

                </div>

                <div>
                    <RightSiteNave></RightSiteNave>
                </div>
            </div>
        </div>
    );
};

export default Home;