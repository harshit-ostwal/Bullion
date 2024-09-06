"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/Logo/SS.png';
import { SiteLinks } from '@/data/siteLinks';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Bell, Menu, User2 } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navbar() {

  const pathname = usePathname();

  return (
    <>
      <div className="flex justify-center w-full h-full">
        <div className="flex flex-col items-center w-full gap-6 p-4 md:justify-around max-w-7xl">

          <div className="flex items-center justify-between w-full">

            <div className="flex items-center gap-4">

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger className="md:hidden"><Menu size={32} /></SheetTrigger>
                <SheetContent side="left" className="flex flex-col items-center justify-center gap-8">
                  {SiteLinks.map((data, index) => (
                    <SheetClose asChild key={index}>
                      <Link href={data.href} className="text-sm font-semibold">
                        {data.title}
                      </Link>
                    </SheetClose>
                  ))}
                </SheetContent>
              </Sheet>

              {/* Company Logo */}
              <Link href={"/"}><Image src={Logo} width={90} quality={100} fetchPriority="high" loading="eager" alt="SS SOFTWARE" /></Link>

            </div>

            {/* Actions */}
            <div className="flex gap-2">

              {/* Notification */}
              <button className="p-2 rounded-md bg-neutral-200"><Bell size={24} /></button>

              {/* User */}
              <Link href={"/Login"} className="flex items-center gap-2 p-2 text-sm font-bold rounded-md outline-1 outline-dashed"><User2 size={24} />Login</Link>

            </div>
          </div>

          {/* Desktop Navbar */}
          <div className="hidden gap-8 md:flex">
            {SiteLinks.map((data, index) => (
              <Link href={data.href} key={index} className={`${pathname === data.href ? "text-amber-500 after:w-full after:bg-amber-500" : "text-neutral-500"} font-semibold tracking-tight relative after:content-[''] hover:text-blue-500 after:bg-blue-500 after:h-[1px] after:w-0 after:left-0 after:bottom-[-4px] after:absolute after:duration-300 hover:after:w-full`}>
                {data.title}
              </Link>
            ))}
          </div>
        </div>
      </div >
    </>
  );
}