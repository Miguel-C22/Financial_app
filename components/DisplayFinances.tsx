'use client'

import { Finance } from '@/interfaces/Finance'
import { nextPayDay } from '@/utils/daysUntilPayment'

import React from 'react'
import RemoveFinanceBtn from './RemoveFinanceBtn'

interface DisplayFinancesProps {
    financeData: Finance[]
    setFinancesData: React.Dispatch<React.SetStateAction<Finance[]>>;
}

function DisplayFinances({financeData, setFinancesData}: DisplayFinancesProps) {

    const renderFinances = () => {
        return financeData.map((finance) => (
            <div key={finance.id} className="relative pb-4">
              <div className="collapse bg-white border border-gray-200 rounded-lg shadow-sm">
                <input type="radio" name="finance-accordion" defaultChecked />
                
                <div className="relative collapse-title flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-4">
                  <div>
                    <p className="text-lg font-semibold text-gray-800">{finance.payment_name}</p>
                    <p className="text-sm text-gray-500">${(finance.price  / 100).toFixed(2)}</p>
                  </div>
                  <div className="text-sm pb-4">{nextPayDay(finance.payment_day)} </div>
                </div>
          
                <div className="collapse-content px-4 pb-4 text-gray-700 text-sm">
                  {finance.info.length > 0 ? finance.info : `No extra info for ${finance.payment_name}`}
                </div>
              </div>
              <RemoveFinanceBtn setFinancesData={setFinancesData} financeId={finance.id}/>
            </div>
        ));
    }

  return (
    <div className="z-0 w-full h-[calc(100vh-180px)] overflow-y-auto pt-2">
       {financeData.length > 0 ? renderFinances() : "No finances found"}
    </div>
  )
}

export default DisplayFinances