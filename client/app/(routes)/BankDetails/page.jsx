import React from 'react'

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-[400px] gap-28 py-28">
      <h1 className="text-5xl font-extrabold tracking-tighter md:text-6xl">Bank Details</h1>
      <div className="flex flex-col gap-4 text-xl font-medium">
        <h1>Bank Name:- Central Bank Of World</h1>
        <h1>Branch:- Central Park Branch</h1>
        <h1>Account Number:- 9876543210</h1>
        <h1>IFSC Code:- KKBK0000123</h1>
        <h1>Account Holder Name:- ABC</h1>
        <h1>Account Type:- Savings</h1>
      </div>
    </div >
  )
}