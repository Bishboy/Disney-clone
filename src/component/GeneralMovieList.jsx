import React from 'react'
import General from './constant/General'
import MovieList from './MovieList'

const GeneralMovieList = () => {
  return (
    <div>
      {General.general.map((items, index)=> index <= 4 &&(
        <div key={items.id  } className='py-8 px-8 md:px-16'>
            <h2 className='text-white font-bold text-[1.3rem]'>{items.name}</h2>
          <MovieList genreId={items.id} myIndex={index} />
        </div>
      ))}
    </div>
  )
}

export default GeneralMovieList
