import axios from "axios"
import { UPDATE_FINANCE_URL } from "@/consts/urlRouts/routNames";
import { FinanceInfo } from "@/interfaces/Finance";


export const updateFinance = async (financeId: string, updateData: FinanceInfo) => {
    try {
        const response = await axios.patch(`${UPDATE_FINANCE_URL}${financeId}`, updateData);
        return response.data
    } catch (error: any) {
        console.error('Error creating finance record:', error);
        throw error;
    }
}