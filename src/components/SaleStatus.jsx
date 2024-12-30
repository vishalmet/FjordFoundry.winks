import React, { useEffect, useState } from 'react'
import { FaAngleDown, FaPlay } from 'react-icons/fa'
import FjordLogo from "../assets/image.webp"
import { useAccount, useConnect } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const SaleStatus = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0, hours: 0, minutes: 0, seconds: 0
    });
    const [showTokenModal, setShowTokenModal] = useState(false);
    const [selectedToken, setSelectedToken] = useState('USDT');
    
    const { isConnected } = useAccount();
    
    const tokens = ['USDT', 'ETH', 'BNB', 'MATIC'];

    const handleTokenSelect = (token) => {
        setSelectedToken(token);
        setShowTokenModal(false);
    };

    const handleConnectWallet = () => {
        if (!isConnected) {
            return;
        }
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
        <div className='relative w-[260px] sm:w-[430px] bg-[#30218A]/70 h-fit border-2 border-[#433099] rounded-[25px]'>
            <div className="p-1 sm:p-6">
                <div className="flex justify-between text-[#B4A3F8] text-sm sm:text-base">
                    <p>Sale Status</p>
                    <p>Ends In</p>
                </div>
                <div className="flex justify-between items-baseline sm:pt-2">
                    <p className='flex items-center gap-2 font-medium'>
                        <FaPlay className='text-[#24FF95]' /> Live Now
                    </p>
                    <div className="flex justify-between">
                        <div className="flex gap-2">
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
            </div>

            <div className="bg-gradient-to-b from-[#4027A7] to-[#352194] rounded-[25px] h-fit p-1 sm:p-6 space-y-1 sm:space-y-3">
                <p className='text-xs sm:text-xl'>Buy IOURKFI</p>
                <div className="bg-[#30218A]/70 h-fit rounded-[20px] border-2 border-[#433099] p-1 sm:p-4 text-xs sm:text-base">
                    <p className='text-[#B4A3F8]'>Collateral</p>
                    <div className="flex justify-between">
                        <input type="text" placeholder='0' className='bg-transparent outline-none' />
                        <button 
                            onClick={() => setShowTokenModal(true)}
                            className="font-medium bg-[#6575FF] p-2 sm:px-4 w-fit rounded-full flex gap-1 items-center"
                        >
                            <FaAngleDown className='size-3 sm:size-4' />
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

                <div className="bg-[#30218A]/70 h-fit rounded-[20px] border-2 border-[#433099] p-1 sm:p-4">
                    <div className="text-[#B4A3F8] flex justify-between text-xs sm:text-base">
                        <p>Project Tokens</p>
                        <p>Max</p>
                    </div>
                    <div className="flex justify-between text-xs sm:text-base">
                        <input type="text" disabled placeholder='0' className='bg-transparent outline-none' />
                        <div className="font-semibold pt-2 flex gap-1 items-center">
                            IOURKFI
                            <img src={FjordLogo} className='w-3 h-3 sm:w-8 sm:h-8 rounded-full' alt="" />
                        </div>
                    </div>
                </div>
                {!isConnected ? (
                    <ConnectButton.Custom>
                        {({ openConnectModal }) => (
                            <button onClick={openConnectModal} className='w-full bg-gradient-to-b from-[#665EFF] to-[#8C85FF] border border-[#4E3ABA] p-1 sm:p-3 text-sm sm:text-base rounded-full font-semibold hover:opacity-80 sm:mt-2'>
                                Connect Wallet to Swap
                            </button>
                        )}
                    </ConnectButton.Custom>
                ) : (
                    <button 
                        onClick={handleConnectWallet}
                        className='w-full bg-gradient-to-b from-[#665EFF] to-[#8C85FF] border border-[#4E3ABA] p-1 sm:p-3 text-sm sm:text-base rounded-full font-semibold hover:opacity-80 sm:mt-2'
                    >
                        Swap Tokens
                    </button>
                )}
            </div>
        </div>
    )
}

export default SaleStatus