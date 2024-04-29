import React, { useEffect, useState, useRef } from 'react'
import GlobalAPI from '../Service/GlobalAPI'
import MovieCards from './MovieCards'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import LargeCardMovie from './LargeCardMovie';

const MovieList = ({ genreId, myIndex }) => {
    const [movieList, setMovieList] = useState([])
    const elementRef = useRef(null);

    const slideRight = (element) => {
        element.scrollLeft += 500;
    }
    const slideLeft = (element) => {
        element.scrollLeft -= 500;
    }

    const getMoviesByGenreId = () => {
        GlobalAPI.getMovieByGenreId(genreId).then(resp => {
            setMovieList(resp.data.results)
        }, [])
    }

    useEffect(() => {
        getMoviesByGenreId()
    },)
    return (
        <div className='relative'>
            <IoChevronBackOutline onClick={() => slideLeft(elementRef.current)} className={`text-[50px] text-white  p-2 z-10 cursor-pointer hidden md:block absolute ${myIndex% 3 === 0? 'top-[5rem]': 'top-[10rem]'}  `} />
            <div ref={elementRef} className='text-white scroll-smooth flex overflow-x-auto gap-4 md:gap-8 scrollbar-hide py-5 px-3 cursor-pointer'>
                {movieList.map((items, index) => (
                    <>
                       {myIndex % 3 === 0? <LargeCardMovie key={index} items={items} /> : <MovieCards movies={items} key={index} /> }   
                    </>
                ))}
            </div>
            <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}className={`text-[50px] text-white hidden md:block p-2 cursor-pointer z-10  absolute ${myIndex% 3 === 0? 'top-[5rem]': 'top-[10rem]'} right-0 `}/>
        </div>
    )
}

export default MovieList
