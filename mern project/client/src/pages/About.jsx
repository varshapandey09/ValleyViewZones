import React from 'react'

export default function About() {
  return (
    <div style={{
      backgroundImage: "url('https://img.freepik.com/premium-photo/shower-curtain-isolated_719385-2471.jpg?w=740')",
      backgroundSize: 'cover', // Adjust as needed (cover, contain, etc.)
      backgroundPosition: 'center', // Adjust as needed (center, top left, etc.)
      height: '90vh', // Adjust height as needed
      width: '100vw', // Adjust width as needed
    }}>
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <h1 className='text-xl sm:text-3xl font-extrabold mb-4 text-slate-900'>About ValleyViewZones</h1>
      <p className='text-sm sm:text-lg mb-4 text-gray-800 font-bold'>ValleyViewZones is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.</p>
      <p className='text-sm sm:text-lg mb-4 text-gray-800 font-bold'>
      Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
      </p>
      <p className='text-sm sm:text-lg mb-4 text-gray-800 font-bold'>Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.</p>
    </div>
    </div>
  )
}