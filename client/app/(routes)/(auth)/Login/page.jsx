import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import React from 'react'

export default function page() {

    return (
        <div className="flex flex-col items-center justify-center w-full gap-20 py-28">
            <h1 className="text-5xl font-extrabold tracking-tighter md:text-6xl">Login</h1>
            <form className="flex flex-col items-center justify-center gap-5">
                <Input type={"email"} labelValue={"Email"} required={true} placeholder={"abc@gmail.com"} />
                <Input type={"password"} labelValue={"Password"} required={true} placeholder={"•••••••••"} />
                <Button>Sign In</Button>
            </form>
        </div>
    )
}