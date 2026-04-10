import React from 'react'
import { Heart } from 'lucide-react'

const Footer = () => {
    return (
        <footer className='bg-gray-900 text-gray-300 py-12 px-4'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
                    {/* Brand */}
                    <div>
                        <h3 className='text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4'>NAT</h3>
                        <p className='text-gray-400 text-sm'>Building innovative solutions through psychology, cybersecurity, and public health advocacy.</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className='text-white font-semibold mb-4'>Quick Links</h4>
                        <ul className='space-y-2 text-sm'>
                            <li><a href='#home' className='text-gray-400 hover:text-blue-400 transition'>Home</a></li>
                            <li><a href='#projects' className='text-gray-400 hover:text-blue-400 transition'>Projects</a></li>
                            <li><a href='#skills' className='text-gray-400 hover:text-blue-400 transition'>Skills</a></li>
                            <li><a href='#contact' className='text-gray-400 hover:text-blue-400 transition'>Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className='text-white font-semibold mb-4'>Get In Touch</h4>
                        <ul className='space-y-2 text-sm text-gray-400'>
                            <li>Email: <a href='mailto:nabilaahmadtijjani@gmail.com' className='text-blue-400 hover:underline'>nabilaahmadtijjani@gmail.com</a></li>
                            <li>Phone: <a href='tel:09061197119' className='text-blue-400 hover:underline'>09061197119</a></li>
                            <li>Location: Kano, Nigeria</li>
                        </ul>
                    </div>
                </div>

                <div className='border-t border-gray-800 pt-8'>
                    <div className='flex flex-col md:flex-row justify-between items-center text-sm text-gray-400'>
                        <p className='flex items-center gap-1'>
                            © 2025 Nabila Ahmad Tijjani. Made with <Heart size={16} className='text-red-500' /> All rights reserved.
                        </p>
                        <div className='flex gap-4 mt-4 md:mt-0'>
                            <a href='#' className='hover:text-blue-400 transition'>Privacy Policy</a>
                            <a href='#' className='hover:text-blue-400 transition'>Terms</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer