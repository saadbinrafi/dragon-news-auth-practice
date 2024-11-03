import React from 'react';
import { FaGoogle, FaGithub, FaFacebookF, FaInstagram    } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import QZone1 from '../../../assets/swimming.png' 
import QZone2 from '../../../assets/playground.png' 
import QZone3 from '../../../assets/class.png' 


const RightSiteNave = () => {
    return (
        <div>
            <div className='space-y-3 p-4'>

                <button className="btn btn-outline w-full ">
                <FaGoogle />
                Login with Google
                </button>
                <button className="btn btn-outline w-full ">
                <FaGithub />
                Login with Github
                </button>
                

            </div>
            <div className='p-4'>
                <h2 className='text-3xl  my-5'>
                    Find Us On
                </h2>
                <a className='flex gap-2 p-4 items-center text-xl border rounded-t-lg hover:bg-purple-600 ' href=""><FaFacebookF /><span>Facebook</span>
                </a>
                <a className='flex gap-2 p-4 items-center text-xl border-x hover:bg-purple-600' href=""><RiTwitterXFill />
                <span>Twitter</span>
                </a>
                <a className='flex gap-2 p-4 items-center text-xl border rounded-b-lg hover:bg-purple-600' href=""><FaInstagram /><span>Instagram</span>
                </a>

            </div>

            {/* { Q zone } */}
            <div className='space-y-3 p-4'>

                <h2 className='text-3xl'>Q Zone</h2>
                <img src={QZone1} alt="" />
                <img src={QZone2} alt="" />
                <img src={QZone3} alt="" />

            </div>
        </div>
    );
};

export default RightSiteNave;