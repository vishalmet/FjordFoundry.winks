import React, { useEffect, useState } from 'react'
import { FaAngleDown, FaPlay } from 'react-icons/fa'
import FjordLogo from "../assets/image.webp"

const SaleStatus = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0, hours: 0, minutes: 0, seconds: 0
    });
    const [showTokenModal, setShowTokenModal] = useState(false);
    const [selectedToken, setSelectedToken] = useState('USDT');
    
    const tokens = ['USDT', 'ETH', 'BNB', 'MATIC'];

    const handleTokenSelect = (token) => {
        setSelectedToken(token);
        setShowTokenModal(false);
    };

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
        <div className='relative w-[240px] sm:w-[430px] bg-[#30218A]/70 h-fit border-2 border-[#433099] rounded-[25px]'>
            <div className="p-6">
                {/* Timer section remains same */}
                <div className="flex justify-between text-[#B4A3F8]">
                    <p>Sale Status</p>
                    <p>Ends In</p>
                </div>
                <div className="flex justify-between items-baseline pt-2">
                    <p className='flex items-center gap-2 font-medium'>
                        <FaPlay className='text-[#24FF95]' /> Live Now
                    </p>
                    <div className="flex justify-between">
                        <div className="flex gap-2">
                            {/* Timer display remains same */}
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

            <div className="bg-gradient-to-b from-[#4027A7] to-[#352194] rounded-[25px] h-fit p-6 space-y-3">
                <p className='text-xl'>Buy IOURKFI</p>
                <div className="bg-[#30218A]/70 h-fit rounded-[20px] border-2 border-[#433099] p-4">
                    <p className='text-[#B4A3F8]'>Collateral</p>
                    <div className="flex justify-between">
                        <input type="text" placeholder='0' className='bg-transparent outline-none' />
                        <button 
                            onClick={() => setShowTokenModal(true)}
                            className="font-medium bg-[#6575FF] p-2 px-4 w-fit rounded-full flex gap-1 items-center"
                        >
                            <FaAngleDown className='size-4' />
                            {selectedToken}
                        </button>
                    </div>
                </div>

                {showTokenModal && (
                    <div className="absolute inset-0 bg-black/50 rounded-[25px] flex items-center justify-center">
                        <div className="bg-[#30218A] w-3/4 rounded-[20px] p-4">
                            {tokens.map((token) => (
                                <div
                                    key={token}
                                    onClick={() => handleTokenSelect(token)}
                                    className="p-3 hover:bg-[#433099] cursor-pointer rounded-lg"
                                >
                                    {token}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="bg-[#30218A]/70 h-fit rounded-[20px] border-2 border-[#433099] p-4">
                    <div className="text-[#B4A3F8] flex justify-between">
                        <p>Project Tokens</p>
                        <p>Max</p>
                    </div>
                    <div className="flex justify-between">
                        <input type="text" disabled placeholder='0' className='bg-transparent outline-none' />
                        <div className="font-semibold pt-2 flex gap-1 items-center">
                            IOURKFI
                            <img src={FjordLogo} className='w-8 h-8 rounded-full' alt="" />
                        </div>
                    </div>
                </div>
                <button className='w-full bg-gradient-to-b from-[#665EFF] to-[#8C85FF] border border-[#4E3ABA] p-3 rounded-full font-semibold opacity-80 mt-2 cursor-not-allowed' disabled>Connect Wallet to Swap</button>
            </div>
        </div>
    )
}

export default SaleStatus