'use client'

import useFetchFinances from '@/hooks/useFetchFinances'
import React, { useEffect } from 'react'
import AddFinance from './AddFinance'
import DisplayFinances from './DisplayFinances'

interface ParentClientComponentProps {
  userId: string
}

function ParentClientComponent({userId}: ParentClientComponentProps) {
    const {financeData, setFinancesData, finances } =  useFetchFinances({userId})

    useEffect(() => {
        finances()
      }, [])

  return (
    <div>
        <AddFinance setFinancesData={setFinancesData}/>
        <DisplayFinances financeData={financeData} setFinancesData={setFinancesData}/>
    </div>
  )
}

export default ParentClientComponent