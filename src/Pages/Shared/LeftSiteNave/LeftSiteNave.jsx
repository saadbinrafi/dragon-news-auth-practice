import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSiteNave = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='space-y-5 py-2  ' >
            <h2 className='text-2xl px-4'>Category of NEWS </h2>
            <div className='space-y-5  p-4'>
                {
                    categories.map(category => <Link className='block text-2xl  py-4'
                        key={category.id}>
                        {category.name}</Link>)
                }
            </div>
        </div>
    );
};

export default LeftSiteNave;