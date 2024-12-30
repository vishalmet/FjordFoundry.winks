import React, { useState } from 'react'
import TokenEvents from './components/TokenEvents'
import SaleStatus from './components/SaleStatus'

const App = () => {
  const [currentComponent, setCurrentComponent] = useState('tokenEvents')

  const handleViewNow = () => {
    setCurrentComponent('saleStatus')
  }

  return (
    <div className=' bg-custom-bg min-h-screen flex justify-center items-center bg-contain bg-center bg-[#150836] text-white space-grotesk'>
      {currentComponent === 'tokenEvents' ? (
        <TokenEvents onViewNow={handleViewNow} />
      ) : (
        <SaleStatus />
      )}
    </div>
  )
}

export default App