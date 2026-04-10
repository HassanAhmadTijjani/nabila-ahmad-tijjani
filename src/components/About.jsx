import React from 'react'
import { Briefcase, Award, Heart, Code } from 'lucide-react'

const About = () => {
    const highlights = [
        {
            icon: Award,
            title: 'Education',
            description: 'Physiology Graduate with Cybersecurity Certification'
        },
        {
            icon: Briefcase,
            title: 'Experience',
            description: 'Internship at Darth Technology | WHO Independent Monitor'
        },
        {
            icon: Heart,
            title: 'Passion',
            description: 'Healthcare Improvement & Disease Eradication'
        },
        {
            icon: Code,
            title: 'Skills',
            description: 'Technical Problem-Solving & Data Accuracy'
        }
    ]

    return (
        <section id='about' className='w-full py-16 px-4 bg-white'>
            <div className='max-w-7xl mx-auto'>
                {/* Section Header */}
                <div className='text-center mb-12'>
                    <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>About Me</h2>
                    <div className='w-20 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto'></div>
                </div>

                {/* Main Bio */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16'>
                    {/* Left - Main Text */}
                    <div>
                        <div className='space-y-6 text-gray-700 text-lg'>
                            <p className='leading-relaxed'>
                                I am a highly motivated <span className='font-semibold text-blue-600'>Physiology graduate</span> with a strong passion for healthcare improvement, data accuracy, and technology-driven solutions. My academic background has provided a solid understanding of human body systems and disease processes, while my <span className='font-semibold text-blue-600'>Cybersecurity certification</span> has equipped me with essential digital security knowledge.
                            </p>

                            <p className='leading-relaxed'>
                                Currently, I am gaining practical experience through an <span className='font-semibold text-purple-600'>internship at Darth Technology</span> in Kano, where I am developing technical and problem-solving skills in a professional environment. In addition, I work with the <span className='font-semibold text-purple-600'>World Health Organization (WHO)</span> as an Independent Monitor for polio immunization campaigns, ensuring that field teams follow proper procedures and that accurate data is collected to support disease eradication efforts.
                            </p>

                            <p className='leading-relaxed'>
                                I am committed to <span className='font-semibold'>continuous learning</span> and contributing positively to organizations through dedication, teamwork, and professionalism.
                            </p>
                        </div>
                    </div>

                    {/* Right - Highlights */}
                    <div className='grid grid-cols-2 gap-6'>
                        {highlights.map((item, index) => {
                            const Icon = item.icon
                            return (
                                <div key={index} className='p-6 rounded-lg bg-linear-to-br from-blue-50 to-purple-50 hover:shadow-lg transition transform hover:scale-105'>
                                    <Icon size={32} className='text-blue-600 mb-3' />
                                    <h3 className='font-bold text-gray-900 mb-2'>{item.title}</h3>
                                    <p className='text-sm text-gray-600'>{item.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Key Values */}
                <div className='bg-linear-to-r from-blue-50 to-purple-50 rounded-lg p-8'>
                    <h3 className='text-2xl font-bold text-gray-900 mb-6'>Core Values</h3>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div className='flex flex-col items-start'>
                            <div className='w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-4'>1</div>
                            <h4 className='font-bold text-gray-900 mb-2'>Data Integrity</h4>
                            <p className='text-gray-600 text-sm'>Committed to accuracy and precision in all professional endeavors</p>
                        </div>
                        <div className='flex flex-col items-start'>
                            <div className='w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mb-4'>2</div>
                            <h4 className='font-bold text-gray-900 mb-2'>Healthcare Impact</h4>
                            <p className='text-gray-600 text-sm'>Driven to improve health outcomes and support disease eradication</p>
                        </div>
                        <div className='flex flex-col items-start'>
                            <div className='w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mb-4'>3</div>
                            <h4 className='font-bold text-gray-900 mb-2'>Continuous Growth</h4>
                            <p className='text-gray-600 text-sm'>Always learning and adapting to new technologies and challenges</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About