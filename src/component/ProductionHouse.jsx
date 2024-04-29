import React from 'react'
import disney from '../images/disney.png'
import marvel from '../images/marvel.png'
import nationalG from '../images/nationalG.png'
import pixar from '../images/pixar.png'
import starwar from '../images/starwar.png'
import starwarV from '../Videos/star-wars.mp4'
import disneyV from '../Videos/disney.mp4'
import marvelV from '../Videos/marvel.mp4'
import nationalGeographicV from '../Videos/national-geographic.mp4'
import  pixarV from '../Videos/pixar.mp4'

const ProductionHouse = () => {

    const productionHouseList=[
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:pixar,
            video:pixarV
        },
        {
            id:3,
            image:marvel,
            video:marvelV
        },
        {
            id:4,
            image:starwar,
            video:starwarV
        },
        {
            id:5,
            image:nationalG,
            video:nationalGeographicV
        },

    ]

  return (
    <div >
      <div className='flex  gap-2 md:gap-5 px-5 md:px-16 py-2 '>
        {productionHouseList.map((items)=>(
            <div key={items.id} className='border-2 relative border-gray-800 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer shadow-lg shadow-gray-800'> 
                <img src={items.image} alt="image" className='w-full z-[1]' />
                <video src={items.video}  autoPlay loop muted  className='absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50' />
            </div>
        ))}
      </div>
    </div>
  )
}

export default ProductionHouse
