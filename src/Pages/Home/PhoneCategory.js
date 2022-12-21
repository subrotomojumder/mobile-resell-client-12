import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Spinner from '../Shared/Spinner';
import background from '../../assets/image/categoryBG.jpg';

const PhoneCategory = () => {
    const [clicked, setClicked] = useState(false);
    const { data: categories = [], loading} = useQuery({
        queryKey: ['category'],
        queryFn: () => fetch(`${process.env.REACT_APP_SERVER_url}/category`).then(res => res.json())
    })
    if (loading) {
        return <Spinner></Spinner>
    }
    return (
        <div id='category' className='pt-16' style={{ background: `linear-gradient(90deg, rgba(255, 99, 71, 0.1), rgba(0, 0, 0, 0)), url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'}}>
            <h3 className='text-2xl md:text-4xl font-thin text-center'>Our resell product category</h3>
            {
                categories?.map((category, i) => <div key={i} className={`hero shadow-lg min-h-[70vh] md:px-24 py-4 text-center lg:text-left ${i === 1 ? ' py-10' : ' '}`}>
                    <div className={`hero-content flex-col lg:pl-20 ${i !== 1 ? 'lg:flex-row-reverse' : 'lg:flex-row justify-between'}`}>
                        <div>
                            <img
                             data-aos={`${i === 1? "zoom-in-right": "zoom-in-left"}`} src={`${category.image}`} alt='' className="rounded-lg lg:w-[800px]" />
                        </div>
                        <div data-aos={`${i === 1? "zoom-in-left": "zoom-in-right"}`}>
                            <h1 className="text-6xl font-thin">{category.category}</h1>
                            <h2 className="text-2xl font-bold mt-4 text-sky-700">{category.header}</h2>
                            <p className="py-3 text-lg font-medium">{category.details}</p>
                            <Link to={`/category/${category?.category}`}><button data-aos="zoom-in" className={`btn btn-outline bg-green-200 ${clicked && 'rounded-full btn-info'}`} onClick={()=> setClicked(true)}>see all phones <FaArrowRight className='ml-2'/></button></Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default PhoneCategory;