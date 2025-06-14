"use client";

import React, { useEffect } from "react";
import { FinanceInfo } from "@/interfaces/Finance";
import { monthlyPayments } from "@/utils/monthlyPaymentOptions";

interface FormInputsProps {
  formData: FinanceInfo;
  setFormData: React.Dispatch<React.SetStateAction<FinanceInfo>>;
}

function FormInputs({ formData, setFormData }: FormInputsProps) {
  const paymentOptions = () => {
    return monthlyPayments.map((payment) => (
      <option key={payment} value={payment}>
        {payment}
      </option>
    ));
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className="flex flex-col gap-4 mt-10">
      <input
        type="text"
        className="input input-bordered w-full"
        placeholder="Subscription"
        list="browsers"
        value={formData.payment_name}
        onChange={(e) =>
          setFormData({ ...formData, payment_name: e.target.value })
        }
      />
      <datalist id="browsers">{paymentOptions()}</datalist>

      <input
        type="number"
        className="input input-bordered w-full"
        required
        placeholder="Price"
        min="1"
        max="1000000"
        title="Price"
        value={formData.price === 0 ? "" : `${formData.price}`}
        onChange={(e) =>
          setFormData({ ...formData, price: Number(e.target.value) })
        }
      />

      <input
        type="date"
        className="input input-bordered w-full"
        value={formData.payment_day}
        onChange={(e) =>
          setFormData({ ...formData, payment_day: e.target.value })
        }
      />

      <textarea
        className="textarea textarea-bordered w-full"
        placeholder="Additional Info about this payment..."
        value={formData.info}
        onChange={(e) => setFormData({ ...formData, info: e.target.value })}
      />
    </div>
  );
}

export default FormInputs;
