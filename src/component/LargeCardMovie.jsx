import React from 'react'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const LargeCardMovie = ({ items }) => {
  return (
 
      <section className='  hover:scale-110 transition-all 
      ease-in-out duration-500' >
        <img src={IMAGE_BASE_URL + items.backdrop_path} alt="" className='w-[110px] md:w-[260px] rounded-lg
         hover:border-[3px] cursor-pointer border-gray-400  ' />
         <h2 className='w-[110px] md:w-[260px] mt-2'>{items.title}</h2>
      </section>
    
  )
}

export default LargeCardMovie
