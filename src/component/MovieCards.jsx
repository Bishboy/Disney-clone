import React from 'react'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const MovieCards = ({ movies }) => {
  return (
    <>

      <img src={IMAGE_BASE_URL + movies.poster_path} alt="" className='w-[6.5rem] md:w-[16rem]  rounded-lg hover:border-[3px] border-gray-400 hover:scale-110 transition-all ease-in-out duration-500' />
    </>

  )
}

export default MovieCards
