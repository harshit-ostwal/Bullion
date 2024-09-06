import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import React from 'react'

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-28 py-28">
      <h1 className="text-5xl font-extrabold tracking-tighter md:text-6xl">KYC</h1>
      <form className="grid items-center justify-center grid-cols-1 gap-5 lg:grid-cols-2">
        <h1 className="w-full max-w-5xl text-3xl font-bold lg:col-span-2 place-content-start">Company Details</h1>
        <Input type={"text"} labelValue={"Full Name"} required={true} placeholder={"John Doe"} />
        <Input type={"text"} labelValue={"Company Name"} required={true} placeholder={"Acme Corp"} />
        <Input type={"email"} labelValue={"Email"} required={true} placeholder={"john.doe@example.com"} />
        <Input type={"text"} labelValue={"Mobile No"} required={true} placeholder={"+91 98765 43210"} />
        <Input type={"text"} labelValue={"Address"} required={true} placeholder={"456 Elm St, Apt 12A, Springfield, IL 62702, USA"} />
        <Input type={"text"} labelValue={"City"} required={true} placeholder={"Springfield"} />
        <Input type={"text"} labelValue={"Pincode"} required={true} placeholder={"62702"} />
        <Input type={"text"} labelValue={"Gstin No"} required={true} placeholder={"29ABCDE1234F1Z5"} />
        <Input type={"text"} labelValue={"Business Type"} required={true} placeholder={"Retail"} />
        <h1 className="w-full max-w-5xl pt-10 text-3xl font-bold lg:col-span-2 place-content-start">Bank Details</h1>
        <Input type={"text"} labelValue={"Account No"} required={true} placeholder={"123456789012"} />
        <Input type={"text"} labelValue={"Bank Name"} required={true} placeholder={"State Bank of India"} />
        <Input type={"text"} labelValue={"Branch Name"} required={true} placeholder={"Downtown Branch"} />
        <Input type={"text"} labelValue={"IFSC Code"} required={true} placeholder={"SBIN0001234"} />
        <Input type={"text"} labelValue={"Account Holder Name"} required={true} placeholder={"John Doe"} />
        <Button>Submit</Button>
      </form>
    </div >
  )
}