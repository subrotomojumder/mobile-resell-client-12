import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { FaArrowRight } from 'react-icons/fa';

const PhoneCategory = () => {
    const { data: categories = [], } = useQuery({
        queryKey: ['category'],
        queryFn: () => fetch('http://localhost:5000/category').then(res => res.json())
    })

    return (
        <div className='bg-slate-50 pt-16'>
            <h3 className='text-3xl font-thin text-center'>Our resell product category</h3>
            
            {
                categories?.map((category, i) => <div className={`hero shadow-lg min-h-[70vh] md:px-32 py-4 text-center lg:text-left ${i === 1 ? 'bg-sky-100' : ' '}`}>
                    <div className={`hero-content flex-col lg:flex-row${i !== 1 ? '-reverse' : ' '}`}>
                        <div>
                            <img src={`${category.image}`} alt='' className="rounded-lg lg:w-[800px]" />
                        </div>
                        <div>
                            <h1 className="text-6xl font-thin">{category.category}</h1>
                            <h2 className="text-2xl font-bold mt-4">{category.header}</h2>
                            <p className="py-3 text-lg font-medium">{category.details}</p>
                            <button className="btn btn-ghost btn-outline">see all phones <FaArrowRight className='ml-2'/></button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default PhoneCategory;