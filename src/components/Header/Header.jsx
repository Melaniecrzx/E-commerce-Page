import logo from "../../assets/images/logo.svg"
import navBtn from "../../assets/images/icon-menu.svg"
import closeBtn from "../../assets/images/icon-close.svg"
import cartBtn from "../../assets/images/icon-cart.svg"
import avatar from "../../assets/images/image-avatar.png"

import Cart from "./Cart/Cart"

import { useState } from "react"

export default function Header({ cartItems, setCartItems }) {
    //State
    const [navOpen, setNavOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);


    const navLinks = ["Collections", "Men", "Women", "About", "Contact"]

    return (
        <header className="font-kumbh flex flex-col gap-8 justify-center items-center relative">
            <div className="mt-7 flex w-full max-w-[327.5px] md:max-w-[608px] lg:max-w-[1110px] mx-auto items-center justify-between ">
                <div className="flex gap-4 lg:gap-14">
                    <img alt="nav btn" src={navBtn} className="lg:hidden" onClick={() => setNavOpen(true)} />
                    <img alt="logo icon" src={logo} className="h-5" />
                    <nav className="hidden lg:flex gap-8 ">
                        {navLinks.map(link => (
                            <div className="relative group">
                                <a href="#" key={link} className="text-grey-500">{link}</a>
                                <hr className="border-orange-500 border-2 absolute w-full top-[66px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></hr>
                            </div>


                        ))}
                    </nav>
                </div>
                <div className="flex gap-6 items-center relative">
                    {cartItems.length > 0 &&
                        <span className="absolute top-0 sm:top-2 left-2 text-white font-bold text-[10px] bg-orange-500 rounded-2xl px-[6.75px]">{totalItems}</span>
                    }
                    <div>
                        <img alt="cart icon" src={cartBtn} className="h-5 cursor-pointer" onClick={() => setCartOpen(prev => !prev)} />
                        <Cart cartItems={cartItems} setCartItems={setCartItems} className={`absolute z-50 w-[360px] top-14 md:top-[51px] -left-[275px] md:-left-[170px] lg:-left-[190px] transition-opacity duration-300 ease-in-out
            ${cartOpen ? "opacity-100" : " opacity-0"}`} />
                    </div>
                    <img alt="avatar icon" src={avatar} className="h-6 md:h-[50px] hover:border-2 rounded-full hover:border-orange-500 cursor-pointer" />
                </div>

                <div
                    className={`lg:hidden fixed inset-0 z-60 transition-opacity duration-300 ease-in-out
    ${navOpen ? "opacity-100 pointer-events-auto bg-black/75" : "opacity-0 pointer-events-none bg-black/0"}`}
                >
                    <div
                        className={`bg-white h-full w-2/3 md:w-1/3 max-w-sm p-6 transform transition-transform duration-500 ease-in-out flex flex-col gap-14 md:px-20 md:py-12
      ${navOpen ? "translate-x-0" : "-translate-x-full"}`}>
                        <img src={closeBtn} alt="close navbar" onClick={() => setNavOpen(false)} className="h-[13.44px] w-[13.44px]" />
                        <nav className="flex flex-col gap-5 font-bold">
                            {navLinks.map((link) => (
                                <a key={link} href="#" className="text-lg font-kumbh-sans text-grey-950">
                                    {link}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
            <hr className="md:w-[608px] lg:w-[1110px] hidden md:flex border-grey-100"></hr>
        </header>
    )
}