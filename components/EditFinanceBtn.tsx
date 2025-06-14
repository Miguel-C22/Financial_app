import React from "react";
import { Finance } from "@/interfaces/Finance";
import { editIcon } from "@/utils/icons";

interface EditFinanceBtnProps {
  financeData: any;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedFinancesData: React.Dispatch<React.SetStateAction<Finance[]>>;
}

function EditFinanceBtn({
  financeData,
  setOpenDrawer,
  setSelectedFinancesData,
}: EditFinanceBtnProps) {
  const handleEdit = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedFinancesData(financeData);
    setOpenDrawer(true);
  };

  return (
    <div>
      <button
        className="z-1 absolute right-8 -top-2 w-6 h-6 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center text-white"
        onClick={(e) => handleEdit(e)}
      >
        {editIcon}
      </button>
    </div>
  );
}
export default EditFinanceBtn;
