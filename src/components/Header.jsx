import { Mail, MapPin, Phone, Code, Link, Share2, MessageCircle } from 'lucide-react'
import React from 'react'
// @ts-ignore
import profileImage from '../assets/profile.jpeg' // Import your profile picture here

const Header = () => {
    return (
        <div className='w-full bg-linear-to-r from-blue-50 to-purple-50 py-12 px-4'>
            <div className='max-w-7xl mx-auto flex flex-col items-center text-center'>
                {/* Avatar */}
                <div className='mb-6'>
                    <div className='w-32 h-32 bg-linear-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg overflow-hidden border-4 border-white'>
                        <img
                            src={profileImage}
                            alt='Nabila Ahmad Tijjani'
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>

                {/* Name/Title */}
                <div className='mb-6'>
                    <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-2'>Nabila Ahmad Tijjani</h1>
                    <p className='text-lg text-gray-600 mb-4'>Physiology Graduate | Cyber Security Professional | Public Health Advocate</p>
                </div>

                {/* Contact Info */}
                <div className='flex flex-col md:flex-row gap-6 text-gray-700 mb-8 text-sm md:text-base'>
                    <div className='flex items-center justify-center gap-2'>
                        <MapPin size={20} className='text-blue-600' />
                        <span>Kano, Nigeria</span>
                    </div>
                    <div className='flex items-center justify-center gap-2'>
                        <Phone size={20} className='text-blue-600' />
                        <a href='tel:09061197119' className='hover:text-blue-600 transition'>09061197119</a>
                    </div>
                    <div className='flex items-center justify-center gap-2'>
                        <Mail size={20} className='text-blue-600' />
                        <a href='mailto:nabilaahmadtijjani@gmail.com' className='hover:text-blue-600 transition'>nabilaahmadtijjani@gmail.com</a>
                    </div>
                </div>

               
                </div>
            </div>
       
    )
}

export default Header