import React, { useState } from 'react'
import TokenEvents from './components/TokenEvents'
import SaleStatus from './components/SaleStatus'

const App = () => {
  const [currentComponent, setCurrentComponent] = useState('tokenEvents')

  const handleViewNow = () => {
    setCurrentComponent('saleStatus')
  }

  const targetDate = "2025-5-31"

  return (
    <div className=' bg-custom-bg min-h-screen flex justify-center items-center bg-contain bg-center bg-[#150836] text-white space-grotesk'>
      {currentComponent === 'tokenEvents' ? (
        <TokenEvents targetDate={targetDate} onViewNow={handleViewNow} />
      ) : (
        <SaleStatus targetDate={targetDate} />
      )}
    </div>
  )
}

export default App