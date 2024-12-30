import React, { useState, useEffect } from 'react'
import FjordLogo from "../assets/image.webp"
import { FaPlay } from 'react-icons/fa'
import { MdAutoGraph, MdOutlinePeopleOutline } from 'react-icons/md'
import { BsGraphUpArrow } from 'react-icons/bs'
import { HiUserGroup } from 'react-icons/hi'

const TokenEvents = ({ onViewNow, targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const target = new Date(targetDate).getTime();
            const now = new Date().getTime();
            const difference = target - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className='w-[260px] sm:w-[430px] bg-[#1A0E44]/70 h-fit border-2 border-[#2A1F62] rounded-[25px] p-1 sm:p-6'>
            <div className="flex items-center justify-between">
                <div className="">
                    <p className='text-base sm:text-2xl font-semibold'>ArkeFi</p>
                    <p className='text-sm sm:text-base text-[#B4A3F8]'>$IOURKFI</p>
                </div>
                <img src={FjordLogo} className='h-10 sm:h-16 rounded-full' alt="" />
            </div>
            <div className="bg-[#150837] w-full h-fit rounded-[25px] mt-6 p-4">
                <div className="flex justify-between items-center">
                    <div className="">
                        <p className='flex items-center gap-2 font-medium text-sm sm:text-base'><FaPlay className='text-[#24FF95]' /> Live Now</p>
                        <div className="flex items-center justify-between">
                            <div className="flex gap-0 sm:gap-2">
                                <p className='text-center text-xs sm:text-base'>
                                    {String(timeLeft.days).padStart(2, '0')} 
                                    <p className='text-[#B4A3F8] text-xs sm:text-sm'>days</p>
                                </p>
                                <p className='text-base'>/</p>
                                <p className='text-center text-xs sm:text-base'>
                                    {String(timeLeft.hours).padStart(2, '0')} 
                                    <p className='text-[#B4A3F8] text-xs sm:text-sm'>hours</p>
                                </p>
                                <p className='text-center text-xs sm:text-base'>
                                    {String(timeLeft.minutes).padStart(2, '0')} 
                                    <p className='text-[#B4A3F8] text-xs sm:text-sm'>mins</p>
                                </p>
                                <p className='text-center text-xs sm:text-base'>
                                    {String(timeLeft.seconds).padStart(2, '0')} 
                                    <p className='text-[#B4A3F8] text-xs sm:text-sm'>secs</p>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="space-y-1 font-semibold text-xs sm:text-base">
                            <p className='flex justify-end items-center text-white/80 gap-0 sm:gap-1'>94 <MdOutlinePeopleOutline className='size-3 sm:size-6 text-white' /></p>
                            <p className='flex items-center text-white/80 gap-0 sm:gap-1'>$509 <MdAutoGraph className='size-3 sm:size-6 font-bold text-white' /></p>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-500/60 my-2"></div>
                <div className="flex items-center justify-between">
                    <p className='text-white font-semibold text-sm sm:text-base'>Fixed Price</p>
                    <HiUserGroup className='size-3 sm:size-6 text-[#B4A3F8]' />
                </div>
            </div>
                <button className='w-full bg-gradient-to-b from-[#665EFF] to-[#8C85FF] border border-[#4E3ABA] text-sm sm:text-base p-1 sm:p-3 rounded-full font-semibold hover:opacity-80 mt-1 sm:mt-2' onClick={onViewNow}>View Now</button>
        </div>
    )
}

export default TokenEvents