import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Spinner from '../Shared/Spinner';
import background from '../../assets/image/categoryBG.jpg';

const PhoneCategory = () => {
    const [clicked, setClicked] = useState(false);
    const { data: categories = [], loading } = useQuery({
        queryKey: ['category'],
        queryFn: () => fetch(`${process.env.REACT_APP_SERVER_url}/category`).then(res => res.json())
    })
    if (loading) {
        return <Spinner></Spinner>
    }
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <></>,
        prevArrow: <></>,
    };
    return (
        <div id='category' className='pt-16 relative' style={{ background: `linear-gradient(90deg, rgba(255, 99, 71, 0.1), rgba(0, 0, 0, 0)), url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
            <h3 className='text-2xl md:text-4xl font-thin text-center'>Our resell product category</h3>
            {
                categories?.map((category, i) => <div key={i} className={`hero shadow-lg min-h-[70vh] md:px-24 py-4 text-center lg:text-left ${i === 1 ? ' py-10' : ' '}`}>
                    <div className={`hero-content flex-col lg:pl-20 ${i !== 1 ? 'lg:flex-row-reverse' : 'lg:flex-row justify-between'}`}>
                        <div>
                            <img
                                data-aos={`${i === 1 ? "zoom-in-right" : "zoom-in-left"}`} src={`${category.image}`} alt='' className="rounded-lg lg:w-[800px]" />
                        </div>
                        <div data-aos={`${i === 1 ? "zoom-in-left" : "zoom-in-right"}`}>
                            <h1 className="text-6xl font-thin">{category.category}</h1>
                            <h2 className="text-2xl font-bold mt-4 text-sky-700">{category.header}</h2>
                            <p className="py-3 text-lg font-medium">{category.details}</p>
                            <Link to={`/category/${category?.category}`}><button data-aos="zoom-in" className={`btn btn-outline bg-green-200 ${clicked && 'rounded-full btn-info'}`} onClick={() => setClicked(true)}>see all phones <FaArrowRight className='ml-2' /></button></Link>
                        </div>
                    </div>
                </div>)
            }
            <a href="https://facebook.com/subrotomojumder.14" target="-blank" className='hidden md:block w-40 absolute top-4 left-1 bg-white text-center'>
                <Slider {...sliderSettings}>
                    {
                        [
                            {
                                name: "Micro headphone",
                                image: "https://www.cloud.ryanscomputers.com/cdn/products/main/microlab-mogul-bluetooth-brown-11544330555.webp"
                            },
                            {
                                name: "LED headphone",
                                image: "https://static-01.daraz.com.bd/p/2b40c2a5e58aad50c89324819f98f9de.jpg"
                            },
                            {
                                name: "Call headphone",
                                image: "https://www.bdshop.com/pub/media/catalog/product/cache/a762498fd6e92192d841c2d6c87195e8/s/t/stylish_stereo_headset_by_logitech_h_111_.jpg"
                            }
                        ].map((item, i) => <div key={i}>
                            <img src={item?.image} alt="" />
                            <h3 className='text-orange-300 text-lg'>{item?.name}</h3>
                        </div>)
                    }
                </Slider>
            </a>
        </div>
    );
};

export default PhoneCategory;