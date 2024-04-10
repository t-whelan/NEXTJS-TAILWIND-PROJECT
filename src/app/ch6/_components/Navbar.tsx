import React from 'react'
import Link from 'next/link'

const Navbar = ()=>{
    const links = [
    {id:1, label:'Home', href:'/'},
    {id:1, label:'About', href:'/'},
    {id:2, label:'Contact', href:'/ch1'},
    {id:3, label:'Sign In', href:'/ch3'},
    {id:4, label:'Sign Out', href:'/ch6'},
    {id:4, label:'About', href:'/about'},
]

    return(
       <header className='bg-teal-800 py-2'>
        <nav className='w-[80%]  mx-auto flex gap-6'>
            {links.map((link)=>(
            <Link href={link.href} key={link.id} className='text-white font-medium text-lg'>{link.label}</Link>
            ))}
        </nav>
       </header>
    )
}
export default Navbar