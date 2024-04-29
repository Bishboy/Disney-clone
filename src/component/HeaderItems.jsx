import React from 'react'

const HeaderItems = ({name , Icon, id}) => {
  return (
    <div key={id} className='text-white  flex items-center gap-2 lg:gap-3 text-[0.94rem] font-semibold cursor-pointer hover:underline underline-offset-8 mb-1'>
       <Icon />
       <p className=' text-[0.75rem] lg:text-[1rem]'>{name}</p>
    </div>
  )
}

export default HeaderItems
