import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Spinner from '../Shared/Spinner';

const PhoneCategory = () => {
    const { data: categories = [], loading} = useQuery({
        queryKey: ['category'],
        queryFn: () => fetch('http://localhost:5000/category').then(res => res.json())
    })
    if (loading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='bg-slate-50 pt-16'>
            <h3 className='text-3xl font-thin text-center'>Our resell product category</h3>
            
            {
                categories?.map((category, i) => <div key={i} className={`hero shadow-lg min-h-[70vh] md:px-24 py-4 text-center lg:text-left ${i === 1 ? 'bg-sky-100' : ' '}`}>
                    <div className={`hero-content flex-col ${i !== 1 ? 'lg:flex-row-reverse' : 'lg:flex-row justify-between'}`}>
                        <div>
                            <img src={`${category.image}`} alt='' className="rounded-lg lg:w-[800px]" />
                        </div>
                        <div>
                            <h1 className="text-6xl font-thin">{category.category}</h1>
                            <h2 className="text-2xl font-bold mt-4 text-sky-700">{category.header}</h2>
                            <p className="py-3 text-lg font-medium">{category.details}</p>
                            <Link to={`/category/${category?.category}`}><button className="btn btn-outline bg-green-200">see all phones <FaArrowRight className='ml-2'/></button></Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default PhoneCategory;