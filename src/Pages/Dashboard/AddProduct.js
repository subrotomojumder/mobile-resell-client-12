import React from 'react';

const AddProduct = () => {
    return (
        <div>
            <div className='space-y-1 text-sm'>
              <label htmlFor='location' className='block text-gray-600'>
                Location
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50'
                name='location'
                id='location'
                type='text'
                placeholder='Location'
                required
              />
            </div>
        </div>
    );
};

export default AddProduct;