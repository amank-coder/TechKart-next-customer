import Link from "next/link";
import { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import Search from "./Search";

export default function Header() {
    const { cartProducts } = useContext(CartContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };



    return (
        <header className="bg-[#222] text-white">
            {showSearch && (<Search setS={setShowSearch}/>)}
            <div className="max-w-[800px] lg:max-w-[1000px] mx-auto px-[20px] py-[15px] flex justify-between md:w-full text-center flex-col md:flex-row">
                <div>
                <Link href={'/'} className="font-handjet text-2xl">TechKart</Link>
                </div>
                <button
                    className="md:hidden absolute right-4"
                    onClick={toggleMenu}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                </button>
                <nav className={`flex flex-col md:flex-row gap-4 mt-8 space-x-6 md:mt-0 ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
                    <Link href={'/'} className="text-[#aaa]">Home</Link>
                    <Link href={'/products'} className="text-[#aaa]">All Products</Link>
                    <Link href={'/cart'} className="text-[#aaa]">Cart({cartProducts?.length})</Link>
                    <Link href={'/'} className="text-[#aaa]" onClick={()=>setShowSearch(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

                    </Link>

                </nav>
            </div>
        </header>
    );
}
