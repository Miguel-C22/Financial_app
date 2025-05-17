'use client'

import React, { useRef, useState } from 'react'
import { plusIcon } from '@/utils/icons'
import { monthlyPayments } from '@/utils/monthlyPaymentOptions'
import { createFinance } from '@/utils/apiCalls/createFinance'
import { Finance, FinanceInfo } from "@/interfaces/Finance";

interface AddFinanceProps {
  setFinancesData: React.Dispatch<React.SetStateAction<Finance[]>>;
}

function AddFinance({setFinancesData}: AddFinanceProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [formData, setFormData] = useState<FinanceInfo>({
    payment_name: '',
    price: 0,
    payment_day: '',
    info: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const priceInCents = Math.round(formData.price * 100);
    const formSubmissionData = {
      ...formData,
      price: priceInCents,
    }
    const created = await createFinance(formSubmissionData);
    setFinancesData((prev) => [...prev, created]);
    dialogRef.current?.close();
    setFormData({
      payment_name: '',
      price: 1,
      payment_day: '',
      info: ''
    })  
  }

  const paymentOptions = () => {
    return monthlyPayments.map((payment) => (
      <option key={payment} value={payment}>
        {payment}
      </option>
    ))
  }

  return (
    <div>
        <button 
            className="btn btn-success w-12 h-12 rounded-full p-0 flex items-center justify-center absolute bottom-22 right-12 text-white"
            onClick={() => (document.getElementById('my_modal_3') as HTMLDialogElement)?.showModal()}>
            {plusIcon}
        </button>
        <dialog  ref={dialogRef} id="my_modal_3" className="modal">
          <div className="modal-box px-12">
            <div className='flex flex-col gap-4'>
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              </form>
              <h4 className="text-2xl font-bold text-center">Add Finance</h4>

              <input 
                type="text" 
                className="input w-full" 
                placeholder="Subscription" 
                list="browsers" 
                value={formData.payment_name}
                onChange={(e) => setFormData({ ...formData, payment_name: e.target.value })}
              />
              <datalist id="browsers">
                {paymentOptions()}
              </datalist>

              <input
                type="number"
                className="input w-full"
                required
                placeholder="Price"
                min="1"
                max="1000000"
                title="Price"
                value={formData.price === 0 ? '' : `${formData.price}`}
                onChange={(e) => setFormData({ ...formData, price: Number(e.target.value)})}
              />

              <input 
                type="date" 
                className="input w-full" 
                value={formData.payment_day}
                onChange={((e) => setFormData({...formData, payment_day: e.target.value }))}
              />

              <textarea 
                className="textarea w-full" 
                placeholder="Additional Info about this payment..."
                value={formData.info}
                onChange={(e) => setFormData({ ...formData,  info: e.target.value })}
              >
              </textarea>
              
              <button onClick={(e) => handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>)} className="btn btn-primary">Create</button>

            </div>
          </div>
        </dialog>
    </div>
  )
}

export default AddFinance