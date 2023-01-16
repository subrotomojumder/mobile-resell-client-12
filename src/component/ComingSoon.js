import React from 'react';

const ComingSoon = ({ pageName }) => {
    return (
        <div className="h-[60vh] flex items-center justify-center">
            <div>
                <h2 className='text-center text-blue-400 text-2xl'>{pageName}</h2>
                <div className='flex justify-center items-center'>
                    <h1 className='text-green-400 text-4xl'>C</h1>
                    <div className='w-6 h-6 border-4 mb-[-8px] border-dashed rounded-full animate-spin border-green-400'></div>
                    <h1 className='text-green-400 text-4xl'>ming Soon</h1>
                </div>
                
            </div>
        </div>
    );
};

export default ComingSoon;