import React from 'react';
import Header from '../Shared/Header/Header';
import NavBar from '../Shared/NavBar/NavBar';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
           <h2 className='text-2xl font-poppins font-bold'>this is home </h2>
        </div>
    );
};

export default Home;