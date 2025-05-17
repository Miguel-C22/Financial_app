import axios from 'axios';
import { GET_FINANCES_URL } from '@/consts/urlRouts/routNames';

export const getFinances = async (userId: string) => {
    try {
        const response = await axios.get(`${GET_FINANCES_URL}${userId}`);
        return response.data;
      } catch (error: any) {
        console.error('Error creating finance record:', error);
        throw error;
    }
}