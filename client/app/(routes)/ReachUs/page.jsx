import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import React from 'react'

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-28 py-28">
      <h1 className="text-5xl font-extrabold tracking-tighter md:text-6xl">Reach Us</h1>
      <form className="grid items-center justify-center grid-cols-1 gap-5 lg:grid-cols-2">
        <Input type={"text"} labelValue={"Full Name"} required={true} placeholder={"ABC"} />
        <Input type={"text"} labelValue={"Company Name"} required={true} placeholder={"ABC Company"} />
        <Input type={"email"} labelValue={"Email"} required={true} placeholder={"abc@gmail.com"} />
        <Input type={"text"} labelValue={"Mobile No"} required={true} placeholder={"+91 00000 00000"} />
        <Input type={"text"} labelValue={"Address"} required={true} placeholder={"123 Main St, Apt 4B, Springfield, IL 62701, USA"} />
        <Input type={"text"} labelValue={"Message"} required={true} placeholder={"Type Your Message Here..."} />
        <Button>Submit</Button>
      </form>

      <iframe className="w-11/12 h-80 xl:h-[500px] rounded-3xl" src="https://maps.google.com/maps?q=Parth%20Studio,%2026/5,%2058th%20street,%2010th%20Ave,%20Ashok%20Nagar,%20Chennai,%20Tamil%20Nadu%20600083+(Parth%20Studios)&amp;z=19&amp;output=embed" loading="eager"></iframe>
    </div >
  )
}