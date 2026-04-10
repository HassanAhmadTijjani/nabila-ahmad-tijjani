import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Experience', href: '#experience' },
        
        { name: 'Contact', href: '#contact' }
    ]

    return (
        <nav className='fixed w-full top-0 z-50 bg-white shadow-md'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16'>
                    {/* Logo */}
                    <div className='shrink-0'>
                        <a href='#home' className='text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                            NAT
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className='hidden md:flex space-x-1'>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className='px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-all duration-300'
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className='hidden md:block'>
                        <button className='px-6 py-2 rounded-lg bg-linear-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300'>
                            Let's Talk
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className='md:hidden'>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition-all'
                        >
                            {isOpen ? (
                                <X size={24} />
                            ) : (
                                <Menu size={24} />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className='md:hidden bg-white border-t border-gray-200'>
                    <div className='px-2 pt-2 pb-3 space-y-1'>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-all'
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className='w-full mt-4 px-3 py-2 rounded-lg bg-linear-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg transition-all'>
                            Let's Talk
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar