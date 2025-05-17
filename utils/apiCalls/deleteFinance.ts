import axios from 'axios';
import { DELETE_FINANCE_URL } from '@/consts/urlRouts/routNames';

export const deleteFinance = async (financeId: string) => {
    try {
        const response = await axios.delete(`${DELETE_FINANCE_URL}${financeId}`);
        return response.data;
      } catch (error: any) {
        console.error('Error creating finance record:', error);
        throw error;
    }
}