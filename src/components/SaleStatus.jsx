import React, { useEffect, useState } from 'react'
import { FaPlay } from 'react-icons/fa'

const SaleStatus = ({ targetDate }) => {
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
        <div className=' w-[240px] sm:w-[430px] bg-[#30218A]/70 h-fit border-2 border-[#433099] rounded-[25px]'>
            <div className="p-6 ">
                <div className=" flex justify-between text-xl text-[#B4A3F8] ">
                    <p>Sale Status</p>
                    <p>Ends In</p>
                </div>
                <div className=" flex justify-between items-baseline pt-2">
                    <p className='flex items-center gap-2 font-medium'><FaPlay className='text-[#24FF95]' /> Live Now</p>
                    <div className="flex justify-between">
                        <div className="flex gap-2">
                            <p className='text-center'>
                                {String(timeLeft.days).padStart(2, '0')}
                                <p className='text-[#B4A3F8] text-sm'>days</p>
                            </p>
                            <p className='text-base'>/</p>
                            <p className='text-center'>
                                {String(timeLeft.hours).padStart(2, '0')}
                                <p className='text-[#B4A3F8] text-sm'>hours</p>
                            </p>
                            <p className='text-center'>
                                {String(timeLeft.minutes).padStart(2, '0')}
                                <p className='text-[#B4A3F8] text-sm'>mins</p>
                            </p>
                            <p className='text-center'>
                                {String(timeLeft.seconds).padStart(2, '0')}
                                <p className='text-[#B4A3F8] text-sm'>secs</p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-gradient-to-b from-[#4027A7] to-[#352194] rounded-[25px] h-96 p-6">
                <p className=' text-xl'>Buy IOURKFI</p>
            </div>
        </div>
    )
}

export default SaleStatus