import { Finance } from '@/interfaces/Finance'
import { getFinances } from '@/utils/apiCalls/getFinances'
import React, { useState } from 'react'

interface UseFetchNewDataProps {
    userId: string
}

function useFetchFinances({userId}: UseFetchNewDataProps) {
    const [financeData, setFinancesData] = useState<Finance[]>([])

    const finances = async () => {
        try {
            const fetchFinances = await getFinances(userId)
            setFinancesData(fetchFinances)
        } catch (error) {
            console.error('Error fetching finances:', error)
        }
    }

    return {financeData, finances, setFinancesData}
}

export default useFetchFinances