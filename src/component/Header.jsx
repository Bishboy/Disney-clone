import React, { useState } from 'react'
import logo from '../images/logo.png'
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItems from './HeaderItems';
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";

const Header = () => {

    const [show, setShow] = useState(false)

    
    const menu = [
        {
            name: 'HOME',
            icon: HiHome,
            id: 1
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass,
            id:2
        },
        {
            name: 'WATCH LIST',
            icon: HiPlus,
            id:3
        },
        {
            name: 'ORIGINALS',
            icon: HiStar,
            id:4
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle,
            id:5
        },
        {
            name: 'SERIES',
            icon: HiTv,
            id:6
        }
    ]
    

    return (
        <div className='flex items-center justify-between p-5'>
            <div className='flex gap-8 items-center'>
                <img src={logo} alt="logo" className='w-[5rem] md:w-[7.2rem] object-cover' />
                <div className=' md:flex hidden items-center gap-5 lg:gap-8'>
                    {menu.map((items) => (
                        <HeaderItems key={items.id} name={items.name} Icon={items.icon} />
                    ))}
                </div>
                <div  className='flex items-center md:hidden   gap-3 sm:gap-5'>
                    {menu.map((items, index) => index < 3 && (
                        <HeaderItems key={items.id} name={''} Icon={items.icon} />
                    ))}
                     
                    <div className='md:hidden' onClick={()=>setShow(!show)} >
                        <HeaderItems name={''} Icon={HiDotsVertical}  />
                        {show?  <div className='absolute mt-3  left-[10rem] sm:left-[16rem] bg-[#121212]  py-3 px-5 border-[1px] border-gray-700'>
                            {menu.map((items, index) => index > 2 && (
                                <HeaderItems key={items.id} name={items.name} Icon={items.icon} />
                            ))}
                        </div>: null}
                        
                    </div>

                </div>
            </div>
            <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                className='w-[40px] rounded-full' />
        </div>
    )
}

export default Header
