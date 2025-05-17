import { Finance } from '@/interfaces/Finance'
import { deleteFinance } from '@/utils/apiCalls/deleteFinance'
import { deleteIcon } from '@/utils/icons'
import React from 'react'

interface RemoveFinanceBtnProps {
    financeId: string
    setFinancesData: React.Dispatch<React.SetStateAction<any>>
}

function RemoveFinanceBtn({financeId, setFinancesData}: RemoveFinanceBtnProps) {
   
    const handleDelete = async (e: React.MouseEvent) => {
        e.stopPropagation();
        deleteFinance(financeId)
        setFinancesData((prev: any) => prev.filter((finance: Finance) => finance.id !== financeId))
    }

  return (
    <div>
        <button 
            className="z-1 absolute right-0 -top-2 w-6 h-6 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center text-white"
            onClick={(e) => handleDelete(e)}
        >
            {deleteIcon}
        </button>
    </div>
  )
}

export default RemoveFinanceBtn