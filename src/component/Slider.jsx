import React, { useEffect, useState } from 'react';
import GlobalAPI from '../Service/GlobalAPI';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth=window.innerWidth;
const Slider = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        getTrendingMovies();
    }, [])

    const getTrendingMovies = () => {
        GlobalAPI.getTrendingVideos.then(resp => {
            console.log(resp.data.results)
            setMovies(resp.data.results)
        })

    }
    const scrollToLeft = () => {
        const slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + screenWidth - 110
    }
    const scrollToRight = () => {
        const slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - screenWidth - 110
    }

    return (
        <div>
            <HiChevronLeft onClick={scrollToLeft} className=' hidden md:block text-white  text-[30px] absolute top-[18rem] mx-8 bg-slate-800 rounded-full cursor-pointer' />
            <HiChevronRight onClick={scrollToRight} className='hidden md:block text-white text-[30px] absolute top-[18rem] right-[2.5rem] bg-slate-800 rounded-full cursor-pointer ' />
            <div id='slider' className='flex overflow-x-auto scrollbar-hide w-full px-16  py-4 scroll-smooth '>
                {movies.map((item, index) => (
                    <img key={index} src={IMAGE_BASE_URL + item.backdrop_path}
                        className='min-w-full  md:h-[380px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in' />
                )

                )}
            </div>
        </div>
    )
}

export default Slider
