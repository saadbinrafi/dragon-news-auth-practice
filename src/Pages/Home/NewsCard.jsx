import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { title, image_url, details } = news
    return (
        <div className="card bg-base-100 shadow-xl mb-16">
            <figure>
                <img
                    src={image_url}
                    alt="Shoes" />
            </figure>
            <div className="card-body  ">
                <h2 className="card-title">{title}</h2>

                {
                    details.lenght > 200
                        ? <p>{details.slice(0, 200)} <Link className='text-blue-600'>Read More...</Link></p>
                        : <p>{details}</p>
                }


            </div>
        </div>
    );
};

export default NewsCard;