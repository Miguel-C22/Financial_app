"use client";

import React, { useEffect, useState } from "react";
import { plusIcon } from "@/utils/icons";
import { createFinance } from "@/utils/apiCalls/createFinance";
import { Finance, FinanceInfo } from "@/interfaces/Finance";
import FormInputs from "./FormInputs";
import { updateFinance } from "@/utils/apiCalls/updateFinance";

interface FinanceFormProps {
  setFinancesData: React.Dispatch<React.SetStateAction<Finance[]>>;
  selectedFinanceData: any;
  setSelectedFinancesData: React.Dispatch<React.SetStateAction<Finance[]>>;
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

function FinanceForm({
  setFinancesData,
  selectedFinanceData,
  setSelectedFinancesData,
  openDrawer,
  setOpenDrawer,
}: FinanceFormProps) {
  const [formData, setFormData] = useState<FinanceInfo>({
    payment_name: "",
    price: 0,
    payment_day: "",
    info: "",
  });

  const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const priceInCents = Math.round(formData.price * 100);
    const formSubmissionData = {
      ...formData,
      price: priceInCents,
    };
    const created = await createFinance(formSubmissionData);
    setFinancesData((prev) => [...prev, created]);
    setOpenDrawer(false);
    setSelectedFinancesData([]);
  };

  const handleUpdate = async () => {
    const priceInCents = Math.round(formData.price * 100);

    const updatedFinance = {
      id: selectedFinanceData.id,
      user_id: selectedFinanceData.user_id,
      payment_name: formData.payment_name,
      price: priceInCents,
      payment_day: formData.payment_day,
      info: formData.info,
    };

    await updateFinance(selectedFinanceData.id, updatedFinance);

    setFinancesData((prev) =>
      prev.map((finance) =>
        finance.id === selectedFinanceData.id ? updatedFinance : finance
      )
    );

    setOpenDrawer(false);
    setSelectedFinancesData([]);
  };

  useEffect(() => {
    setFormData({
      payment_name: selectedFinanceData?.payment_name || "",
      price:
        typeof selectedFinanceData?.price === "number"
          ? selectedFinanceData?.price / 100
          : 0,
      payment_day: selectedFinanceData?.payment_day || "",
      info: selectedFinanceData?.info ?? "",
    });
  }, [selectedFinanceData]);

  return (
    <div className="drawer drawer-end z-2">
      <input
        id="my-drawer-4"
        type="checkbox"
        checked={openDrawer}
        className="drawer-toggle"
        onChange={(e) => setOpenDrawer(!e.target.checked)}
      />
      <div className="drawer-content relative">
        <label
          htmlFor="my-drawer-4"
          className="drawer-button btn btn-success w-12 h-12 rounded-full p-0 flex items-center justify-center fixed bottom-6 right-6 text-white shadow-lg"
          onClick={() => {
            setSelectedFinancesData([]);
            setOpenDrawer(true);
          }}
        >
          {plusIcon}
        </label>
      </div>

      {/* Drawer Side */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg h-full bg-white p-6 overflow-y-auto rounded-tl-md rounded-bl-md shadow-[-6px_0_12px_rgba(1,1,1,0.3)]">
          <h4 className="text-2xl font-bold text-center mt-4">
            {selectedFinanceData?.id ? "Update Finance" : "Add Finance"}
          </h4>
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
              onClick={() => {
                const drawer = document.getElementById(
                  "my-drawer-4"
                ) as HTMLInputElement;
                if (drawer) drawer.checked = false;
                setOpenDrawer(false);
                setSelectedFinancesData([]);
              }}
            >
              ✕
            </button>
          </form>

          {/* Drawer Content */}
          <FormInputs formData={formData} setFormData={setFormData} />
          {selectedFinanceData?.id ? (
            <button
              onClick={handleUpdate}
              className="btn btn-success w-full mt-4"
            >
              Update
            </button>
          ) : (
            <button
              onClick={(e) =>
                handleCreate(e as unknown as React.FormEvent<HTMLFormElement>)
              }
              className="btn btn-primary w-full mt-4"
            >
              Create
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default FinanceForm;
