import React from 'react'

const TokenEvents = ({ onViewNow }) => {
    return (
      <div className=' w-[240px] sm:w-[430px] bg-[#1A0E44]/60 h-96 border-2 border-[#2A1F62] rounded-xl'>
        <button onClick={onViewNow}>View Now</button>
      </div>
    )
  }

export default TokenEvents