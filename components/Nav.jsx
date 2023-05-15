"use client"
import Link from "next/link"
import Image from "next/image"
import { useStat, useEffect } from "react";
import {signIn,signOut,useSession,getProviders} from "next-auth/react"
const Nav = () => {
    const isLoggedIn = true;
  return (
   <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" as="/" className="flex gap-2 flex-center">
        <Image
         src="/images/logo.svg"
         alt="Promptopia Logo"
         width={30}
         height={30}
         className="object-contain"
         
         />
         <p className="logo-text">Promptopia</p>
      </Link>
      <div className="sm:flex hidden">
            {isLoggedIn
            ?(<div className="flex gap-3 md:gap-5">
                <Link href="/create-prompt" className="black_btn">Create Post</Link>
                <button type="button" onClick={signOut} className="outline_btn">Sign Out</button>
                <Link href="/profile">
                    <Image 
                    src="/images/logo.svg"
                    alt="Profile"
                    width={37}
                    height={37}
                    className="rounded-full"
                    />
                </Link>
            </div>)
            :(<></>)}
         </div>
   </nav>
  )
}

export default Nav