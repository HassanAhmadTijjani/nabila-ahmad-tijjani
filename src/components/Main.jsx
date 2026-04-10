import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Award, Briefcase, BookOpen, Code, Heart, Share2, Link, MessageCircle, Phone, Mail } from 'lucide-react'

const SectionHeader = ({ icon: Icon, title, section, expandedSection, toggleSection }) => (
    <button
        onClick={() => toggleSection(section)}
        className='w-full flex items-center justify-between p-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition'
    >
        <div className='flex items-center gap-3'>
            <Icon size={24} />
            <h3 className='text-xl font-bold'>{title}</h3>
        </div>
        {expandedSection === section ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
    </button>
)

const Main = () => {
    const [expandedSection, setExpandedSection] = useState('objective')

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section)
    }

    return (
        <section id='experience' className='w-full py-16 px-4 bg-gray-50'>
            <div className='max-w-4xl mx-auto'>
                {/* Section Title */}
                <div className='text-center mb-12'>
                    <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>Career Profile</h2>
                    <div className='w-20 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto'></div>
                </div>

                <div className='space-y-6'>
                    {/* Career Objective */}
                    <div>
                        <SectionHeader icon={Briefcase} title='Career Objective' section='objective' expandedSection={expandedSection} toggleSection={toggleSection} />
                        {expandedSection === 'objective' && (
                            <div className='mt-4 p-6 bg-white rounded-lg shadow-md border-l-4 border-blue-600'>
                                <p className='text-gray-700 text-lg leading-relaxed'>
                                    To obtain a challenging position where I can apply my knowledge in <span className='font-semibold text-blue-600'>physiology, cybersecurity, and public health monitoring</span> to support innovation, improve health outcomes, and ensure effective data management.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Educational Background */}
                    <div>
                        <SectionHeader icon={BookOpen} title='Educational Background' section='education' expandedSection={expandedSection} toggleSection={toggleSection} />
                        {expandedSection === 'education' && (
                            <div className='mt-4 space-y-4'>
                                <div className='p-6 bg-white rounded-lg shadow-md'>
                                    <div className='flex items-start justify-between mb-3'>
                                        <div>
                                            <h4 className='text-xl font-bold text-gray-900'>Bachelor of Science (B.Sc.) Physiology</h4>
                                            <p className='text-gray-600 text-sm mt-1'>Completed with comprehensive understanding of human systems</p>
                                        </div>
                                        <Award className='text-blue-600 shrink-0' size={24} />
                                    </div>
                                    <div className='mt-4'>
                                        <p className='font-semibold text-gray-800 mb-2'>Knowledge Areas:</p>
                                        <ul className='grid grid-cols-2 gap-2 text-gray-700'>
                                            <li className='flex items-center gap-2'><span className='text-blue-600'>•</span> Human anatomy and physiology</li>
                                            <li className='flex items-center gap-2'><span className='text-blue-600'>•</span> Disease mechanisms</li>
                                            <li className='flex items-center gap-2'><span className='text-blue-600'>•</span> Laboratory and research methods</li>
                                            <li className='flex items-center gap-2'><span className='text-blue-600'>•</span> Scientific data interpretation</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className='p-6 bg-white rounded-lg shadow-md'>
                                    <div className='flex items-start justify-between mb-3'>
                                        <div>
                                            <h4 className='text-xl font-bold text-gray-900'>Certificate in Cybersecurity</h4>
                                            <p className='text-gray-600 text-sm mt-1'>Professional certification in digital security</p>
                                        </div>
                                        <Code className='text-purple-600 shrink-0' size={24} />
                                    </div>
                                    <div className='mt-4'>
                                        <p className='font-semibold text-gray-800 mb-2'>Skills Gained:</p>
                                        <ul className='grid grid-cols-2 gap-2 text-gray-700'>
                                            <li className='flex items-center gap-2'><span className='text-purple-600'>•</span> Cybersecurity principles</li>
                                            <li className='flex items-center gap-2'><span className='text-purple-600'>•</span> Data protection and privacy</li>
                                            <li className='flex items-center gap-2'><span className='text-purple-600'>•</span> Understanding cyber threats</li>
                                            <li className='flex items-center gap-2'><span className='text-purple-600'>•</span> Safe internet practices</li>
                                            <li className='flex items-center gap-2'><span className='text-purple-600'>•</span> Basic risk management</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Professional Experience */}
                    <div>
                        <SectionHeader icon={Briefcase} title='Professional Experience' section='experience' expandedSection={expandedSection} toggleSection={toggleSection} />
                        {expandedSection === 'experience' && (
                            <div className='mt-4 space-y-4'>
                                <div className='p-6 bg-white rounded-lg shadow-md border-l-4 border-blue-600'>
                                    <h4 className='text-lg font-bold text-gray-900'>IT Intern – Darth Technology, Kano</h4>
                                    <ul className='mt-3 space-y-2 text-gray-700'>
                                        <li className='flex items-start gap-2'><span className='text-blue-600 mt-1'>→</span> Assisting in IT-related tasks</li>
                                        <li className='flex items-start gap-2'><span className='text-blue-600 mt-1'>→</span> Learning cybersecurity practices</li>
                                        <li className='flex items-start gap-2'><span className='text-blue-600 mt-1'>→</span> Supporting technology solutions</li>
                                        <li className='flex items-start gap-2'><span className='text-blue-600 mt-1'>→</span> Developing technical skills</li>
                                    </ul>
                                </div>

                                <div className='p-6 bg-white rounded-lg shadow-md border-l-4 border-purple-600'>
                                    <h4 className='text-lg font-bold text-gray-900'>Independent Monitor – WHO Polio Campaign</h4>
                                    <ul className='mt-3 space-y-2 text-gray-700'>
                                        <li className='flex items-start gap-2'><span className='text-purple-600 mt-1'>→</span> Monitoring vaccination team activities</li>
                                        <li className='flex items-start gap-2'><span className='text-purple-600 mt-1'>→</span> Ensuring compliance with guidelines</li>
                                        <li className='flex items-start gap-2'><span className='text-purple-600 mt-1'>→</span> Recording and reporting field data</li>
                                        <li className='flex items-start gap-2'><span className='text-purple-600 mt-1'>→</span> Supporting disease eradication programs</li>
                                    </ul>
                                </div>

                                <div className='p-6 bg-white rounded-lg shadow-md border-l-4 border-green-600'>
                                    <h4 className='text-lg font-bold text-gray-900'>Medical Assistant (NYSC) – Panshekara Primary Health Center</h4>
                                    <ul className='mt-3 space-y-2 text-gray-700'>
                                        <li className='flex items-start gap-2'><span className='text-green-600 mt-1'>→</span> Assisting healthcare professionals</li>
                                        <li className='flex items-start gap-2'><span className='text-green-600 mt-1'>→</span> Recording vital signs</li>
                                        <li className='flex items-start gap-2'><span className='text-green-600 mt-1'>→</span> Supporting immunization services</li>
                                        <li className='flex items-start gap-2'><span className='text-green-600 mt-1'>→</span> Maintaining medical records</li>
                                        <li className='flex items-start gap-2'><span className='text-green-600 mt-1'>→</span> Health education support</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Core Skills */}
                    <div>
                        <SectionHeader icon={Code} title='Core Skills' section='skills' expandedSection={expandedSection} toggleSection={toggleSection} />
                        {expandedSection === 'skills' && (
                            <div className='mt-4 space-y-4'>
                                <div className='p-6 bg-white rounded-lg shadow-md'>
                                    <h4 className='text-lg font-bold text-gray-900 mb-3'>Technical Skills</h4>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                                        <div className='flex items-center gap-2 text-gray-700'><span className='text-blue-600 text-xl'>✓</span> Basic cybersecurity knowledge</div>
                                        <div className='flex items-center gap-2 text-gray-700'><span className='text-blue-600 text-xl'>✓</span> Data entry and documentation</div>
                                        <div className='flex items-center gap-2 text-gray-700'><span className='text-blue-600 text-xl'>✓</span> Microsoft Office</div>
                                    </div>
                                </div>

                                <div className='p-6 bg-white rounded-lg shadow-md'>
                                    <h4 className='text-lg font-bold text-gray-900 mb-3'>Professional Skills</h4>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                                        <div className='flex items-center gap-2 text-gray-700'><span className='text-purple-600 text-xl'>✓</span> Communication</div>
                                        <div className='flex items-center gap-2 text-gray-700'><span className='text-purple-600 text-xl'>✓</span> Teamwork</div>
                                        <div className='flex items-center gap-2 text-gray-700'><span className='text-purple-600 text-xl'>✓</span> Time management</div>
                                        <div className='flex items-center gap-2 text-gray-700'><span className='text-purple-600 text-xl'>✓</span> Problem solving</div>
                                    </div>
                                </div>

                                <div className='p-6 bg-white rounded-lg shadow-md'>
                                    <h4 className='text-lg font-bold text-gray-900 mb-3'>Field Skills</h4>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                                        <div className='flex items-center gap-2 text-gray-700'><span className='text-green-600 text-xl'>✓</span> Monitoring and evaluation</div>
                                        <div className='flex items-center gap-2 text-gray-700'><span className='text-green-600 text-xl'>✓</span> Data collection</div>
                                        <div className='flex items-center gap-2 text-gray-700'><span className='text-green-600 text-xl'>✓</span> Report writing</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Projects & Practical Experience */}
                    <div>
                        <SectionHeader icon={Award} title='Projects & Practical Experience' section='projects' expandedSection={expandedSection} toggleSection={toggleSection} />
                        {expandedSection === 'projects' && (
                            <div className='mt-4 space-y-4'>
                                <div className='p-6 bg-white rounded-lg shadow-md'>
                                    <h4 className='text-lg font-bold text-gray-900 mb-2'>Public Health Field Monitoring</h4>
                                    <p className='text-gray-700'>Participation in polio campaigns ensuring compliance with health guidelines and accurate data collection in the field.</p>
                                </div>
                                <div className='p-6 bg-white rounded-lg shadow-md'>
                                    <h4 className='text-lg font-bold text-gray-900 mb-2'>Technology Internship</h4>
                                    <p className='text-gray-700'>Practical exposure to IT operations and cybersecurity practices in a professional environment at Darth Technology.</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Professional Strengths & Values */}
                    <div>
                        <SectionHeader icon={Heart} title='Professional Strengths & Values' section='strengths' expandedSection={expandedSection} toggleSection={toggleSection} />
                        {expandedSection === 'strengths' && (
                            <div className='mt-4 space-y-4'>
                                <div className='p-6 bg-white rounded-lg shadow-md'>
                                    <h4 className='text-lg font-bold text-gray-900 mb-4'>Key Strengths</h4>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                        <div className='flex items-start gap-3'>
                                            <div className='w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center shrink-0 mt-1'>✓</div>
                                            <span className='text-gray-700'>Strong sense of responsibility</span>
                                        </div>
                                        <div className='flex items-start gap-3'>
                                            <div className='w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center shrink-0 mt-1'>✓</div>
                                            <span className='text-gray-700'>Accuracy in data collection</span>
                                        </div>
                                        <div className='flex items-start gap-3'>
                                            <div className='w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center shrink-0 mt-1'>✓</div>
                                            <span className='text-gray-700'>Good observation skills</span>
                                        </div>
                                        <div className='flex items-start gap-3'>
                                            <div className='w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center shrink-0 mt-1'>✓</div>
                                            <span className='text-gray-700'>Adaptability</span>
                                        </div>
                                        <div className='flex items-start gap-3'>
                                            <div className='w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center shrink-0 mt-1'>✓</div>
                                            <span className='text-gray-700'>Commitment to quality work</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                    <div className='p-6 bg-linear-to-br from-blue-50 to-blue-100 rounded-lg'>
                                        <h4 className='font-bold text-gray-900 mb-3'>Areas of Interest</h4>
                                        <ul className='space-y-2 text-gray-700 text-sm'>
                                            <li>• Public health programs</li>
                                            <li>• Disease prevention</li>
                                            <li>• Cybersecurity</li>
                                            <li>• Health technology</li>
                                            <li>• Research and development</li>
                                        </ul>
                                    </div>

                                    <div className='p-6 bg-linear-to-br from-purple-50 to-purple-100 rounded-lg'>
                                        <h4 className='font-bold text-gray-900 mb-3'>Professional Values</h4>
                                        <ul className='space-y-2 text-gray-700 text-sm'>
                                            <li>• Integrity</li>
                                            <li>• Accountability</li>
                                            <li>• Continuous learning</li>
                                            <li>• Respect for teamwork</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mt-8 my-4 '>Contact</h2>
                {/* Social Links */}
                <div className='flex flex-col gap-4'>
                    <a
                        href="https://wa.me/2349061197119"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 font-medium inline-flex items-center gap-2"
                    >
                        <MessageCircle />
                        Chat on WhatsApp
                    </a>
                    <div >

                    <div className='flex items-center justify-center gap-2'>
                        <Phone size={40} className='text-blue-600' />
                        <a href='tel:09061197119' className='hover:text-blue-600 transition'>09061197119</a>
                    </div>
                    <div className='flex items-center justify-center gap-2'>
                        <Mail size={40} className='text-blue-600' />
                        <a href='mailto:nabilaahmadtijjani@gmail.com' className='hover:text-blue-600 transition'>nabilaahmadtijjani@gmail.com</a>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main