import React from 'react'
import FjordLogo from "../assets/image.webp"
import { FaPlay } from 'react-icons/fa'
import { MdAutoGraph, MdOutlinePeopleOutline } from 'react-icons/md'
import { BsGraphUpArrow } from 'react-icons/bs'
import { HiUserGroup } from 'react-icons/hi'

const TokenEvents = ({ onViewNow }) => {
    return (
        <div className=' w-[240px] sm:w-[430px] bg-[#1A0E44]/70 h-fit border-2 border-[#2A1F62] rounded-[25px] p-6'>
            <div className=" flex items-center justify-between">
                <div className="">
                    <p className=' text-2xl font-semibold'>ArkeFi</p>
                    <p className=' text-[#B4A3F8]'>$IOURKFI</p>
                </div>
                <img src={FjordLogo} className=' h-16 rounded-full' alt="" />
            </div>
            <div className=" bg-[#150837] w-full h-44 rounded-[25px] mt-6 p-4">
                <div className=" flex justify-between items-center">
                    <div className=" ">
                        <p className=' flex items-center gap-2 font-medium'><FaPlay className=' text-[#24FF95]' /> Live Now</p>
                        <div className=" flex items-center justify-between">
                            <div className=" flex items-center gap-2">
                                <p className=' text-center'>00 <p className=' text-[#B4A3F8]'>days</p></p>
                                <p className=' text-2xl'>/</p>
                                <p className=' text-center'>00 <p className=' text-[#B4A3F8]'>hours</p></p>
                                <p className=' text-center'>00 <p className=' text-[#B4A3F8]'>mins</p></p>
                                <p className=' text-center'>00 <p className=' text-[#B4A3F8]'>secs</p></p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className=" space-y-1 font-semibold">
                            <p className=' flex justify-end items-center text-white/80 gap-1'>94 <MdOutlinePeopleOutline className=' size-6 text-white' /></p>
                            <p className=' flex items-center text-white/80 gap-1'>$509 <MdAutoGraph className=' size-6 font-bold text-white' /></p>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-500/60 my-2"></div>
                <div className=" flex items-center justify-between">
                    <p className=' text-white font-semibold'>Fixed Price</p>
                    <HiUserGroup className=' size-6 text-[#B4A3F8]' />
                </div>
                <button className=' w-full bg-gradient-to-b from-[#665EFF] to-[#8C85FF] p-3 rounded-full font-semibold hover:opacity-80 mt-2' onClick={onViewNow}>View Now</button>
            </div>
        </div>
    )
}

export default TokenEvents