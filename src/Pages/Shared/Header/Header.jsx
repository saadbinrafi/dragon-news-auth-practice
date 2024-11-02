import React from 'react';

import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center my-6 '> 
            <img  className='' src={logo} alt="" />
            <p className='mt-5'>Journalism WIthout fear of Favour</p>
            <p className='text-xl text-center mt-5'>{moment().format("dddd, MMMM Do YYYY, h:m: a")};</p>
        </div>
    );
};

export default Header;