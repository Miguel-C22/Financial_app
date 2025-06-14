import axios from "axios";
import { FinanceInfo } from "@/interfaces/Finance";
import { POST_FINANCE_URL } from "../../consts/urlRouts/routNames";

export const createFinance = async (data: FinanceInfo) => {
  try {
    const response = await axios.post(POST_FINANCE_URL, data);
    return response.data;
  } catch (error: any) {
    console.error("Error creating finance record:", error);
    throw error;
  }
};
