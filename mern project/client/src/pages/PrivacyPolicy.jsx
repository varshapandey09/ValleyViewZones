import React from 'react'

export default function PrivacyPolicy() {
  return (
    <div style={{
      backgroundImage: "url('https://img.freepik.com/free-photo/background-with-simple-white-wall_23-2151020040.jpg?size=626&ext=jpg&ga=GA1.1.1539263789.1716731795&semt=ais_user')",
      backgroundSize: 'cover', // Adjust as needed (cover, contain, etc.)
      backgroundPosition: 'center', // Adjust as needed (center, top left, etc.)
      height: '90vh', // Adjust height as needed
      width: '100vw', // Adjust width as needed
    }}>
      <div className='py-20 px-4 max-w-6xl mx-auto'>
        <h1 className='text-xl sm:text-3xl font-extrabold mb-4 text-slate-900'>ValleyViewZones Privacy Policy</h1>
        <p className='text-sm sm:text-lg mb-4 text-gray-800 font-bold'>
        ValleyViewZones takes your privacy seriously. 
        </p>
        <p className='text-sm sm:text-lg mb-4 text-gray-800 py-2 font-bold'>
        This Privacy Policy explains how we collect, use, and disclose your information when you use our web application. We collect information you provide directly (email, search criteria) and information collected automatically (device type, IP address, usage data). 
        </p>
        <p className='text-sm sm:text-lg mb-4 text-gray-800 font-bold'>
        We use this information to operate the app, personalize your experience, connect you with relevant listings and agents and comply with legal requirements. You can access and update your information within the profile page. We may share information with third-party service providers who assist us and may disclose it to law enforcement if required. We will never sell or rent your personal information.
        </p> 
    </div>
  </div>
)
}
