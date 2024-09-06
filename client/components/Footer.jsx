"use client"
import Image from 'next/image'
import React from 'react'
import Logo from '@/public/Logo/SS.png'
import Link from 'next/link'
import { Apple, Contact, Globe2, LinkIcon, Mail, Phone, Smartphone, Store } from 'lucide-react'
import { SiteLinks } from '@/data/siteLinks'
import { usePathname } from 'next/navigation'

export default function Footer() {

  const year = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="grid w-full grid-cols-1 p-10 gap-14 min-h-[380px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl">

        <div className="flex flex-col gap-14">
          {/* Company Logo */}
          <Link href={"/"}>
            <Image src={Logo} width={100} alt="SS SOFTWARE" quality={100} fetchPriority="high" loading="eager" />
          </Link>

          {/* Our Address */}
          <div className="flex gap-2">
            <Store color="#f59e0b" size={24} />
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-neutral-950">Our Address</h1>
              <div className="flex flex-col gap-1">
                <h1 className="text-sm text-neutral-500">123, Abc Block, Abc Street,</h1>
                <h1 className="text-sm text-neutral-500">Chennai, Tamilnadu - XXXXXX</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Our Site Link */}
        <div className="flex gap-2">
          <LinkIcon color="#f59e0b" size={24} />
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-neutral-950">Our Site Links</h1>
            {SiteLinks.map((data, index) => (
              <Link href={data.href} key={index} className={`${pathname === data.href ? "text-amber-500 after:w-full w-fit after:bg-amber-500" : "text-neutral-500"} w-fit font-semibold tracking-tight relative after:content-[''] hover:text-blue-500 after:bg-blue-500 after:h-[1px] after:w-0 after:left-0 after:bottom-[-4px] after:absolute after:duration-300 hover:after:w-full`}>
                {data.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Get In Touch */}
        <div className="flex gap-2">
          <Contact color="#f59e0b" size={24} />
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-neutral-950">Get In Touch</h1>
            <div className="flex flex-col gap-2">
              <Link href={""} className="flex items-center gap-2 text-sm font-semibold tracking-tight text-neutral-500"><Phone size={18} color="#14b8a6" /> +91 00000 00000</Link>
              <Link href={""} className="flex items-center gap-2 text-sm font-semibold tracking-tight text-neutral-500"><Phone size={18} color="#14b8a6" /> +91 00000 00000</Link>
              <Link href={""} className="flex items-center gap-2 text-sm font-semibold tracking-tight text-neutral-500"><Mail size={18} color="#14b8a6" /> demo@gmail.com</Link>
            </div>
          </div>
        </div>

        {/* Our Apps */}
        <div className="flex gap-2">
          <Globe2 color="#f59e0b" size={24} />
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-neutral-950">Our Apps</h1>
            <div className="flex flex-col gap-2">
              <Link href={""} className="flex items-center gap-2 text-sm font-semibold tracking-tight text-neutral-500"><Apple size={18} color="#d946ef" /> IOS</Link>
              <Link href={""} className="flex items-center gap-2 text-sm font-semibold tracking-tight text-neutral-500"><Smartphone size={18} color="#d946ef" /> Android</Link>
            </div>
          </div>
        </div>

      </div>

      <div className="flex flex-col items-center justify-around w-full h-20 p-4 md:h-16 md:flex-row bg-amber-200">
        <h1 className="text-sm font-semibold">© {year} SS SOFTWARE, All Rights Reserved</h1>
        <h1 className="text-sm font-semibold">Built By :- Harshit Ostwal</h1>
      </div>
    </div>
  )
}