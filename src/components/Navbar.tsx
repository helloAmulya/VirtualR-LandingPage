import { useState } from 'react'
import logo from '../assets/logo.png'
import { navItems } from '../constants'
import { Menu, X } from 'lucide-react'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    };

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    {/* logo */}
                    <div className="flex items-center flex-shrink-0">
                        <img src={logo} alt="" className='w-10 h-10 mr-2' />
                        <span className="text-xl tracking-tight">VirtualR</span>
                    </div>
                    {/* nav Items */}
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    {/* signin/signup buttons */}
                    <div className="hidden lg:flex justify-center items-center space-x-12">
                        <a href="#" className='py-2 px-3 rounded-md border-[0.5px] border-neutral-500'>SignIn</a>
                        <a href="#" className='py-2 px-3 border-[0.5px] rounded-md bg-gradient-to-r from-orange-500 to-orange-800  border-orange-700'>Create an Account</a>
                    </div>

                    <div className='lg:hidden md:flex flex-col justify-end '>
                        <button onClick={toggleMenu}>
                            {
                                isOpen ? <X /> : <Menu />
                            }
                        </button>
                    </div>
                </div>
                {/* mobile menu */}
                {isOpen && (
                    <div className="fixed right-0 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center">
                        <ul className="">
                            {navItems.map((item, index) => (
                                <li key={index} className='py-4'>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className='flex space-x-6'>
                            <a href="#" className='py-2 px-3 border rounded-md'>SignIn</a>
                            <a href="#" className='py-2 px-3 border-[0.5px] rounded-md bg-gradient-to-r from-orange-500 to-orange-800  border-orange-700'>Create an Account</a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
