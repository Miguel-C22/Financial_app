'use client'

import React, { useEffect, useState } from 'react'
import useFetchFinances from '@/hooks/useFetchFinances'
import FinanceForm from './FinanceForm'
import DisplayFinances from './DisplayFinances'

interface ParentClientComponentProps {
  userId: string
}

function ParentClientComponent({userId}: ParentClientComponentProps) {
    const [openDrawer, setOpenDrawer] = useState<boolean>(false)
    const {financeData, setFinancesData, finances } =  useFetchFinances({userId})
    const [selectedFinanceData, setSelectedFinancesData] = useState<any>();


    useEffect(() => {
        finances()
      }, [])

  return (
    <div className='px-12'>
        <FinanceForm 
          setFinancesData={setFinancesData} 
          selectedFinanceData={selectedFinanceData} 
          setSelectedFinancesData={setSelectedFinancesData}
          openDrawer={openDrawer}
          setOpenDrawer={setOpenDrawer}
        />
        <DisplayFinances 
          financeData={financeData} 
          setFinancesData={setFinancesData} 
          setOpenDrawer={setOpenDrawer}
          setSelectedFinancesData={setSelectedFinancesData}
        />
    </div>
  )
}

export default ParentClientComponent