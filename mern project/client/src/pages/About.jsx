import React from 'react';


export default function About() {
  return (
    
    <div className='h-screen flex justify-center items-center' style={{ backgroundImage: "url('https://media.istockphoto.com/id/1192403701/photo/residential-housing-background.jpg?s=612x612&w=0&k=20&c=8iquSynRiqeXDRaE53-0aKNEGe8y7RKslG2SoYwYGAQ=')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className='py-20 px-4 max-w-6xl mx-auto ' style={{backgroundColor:"rgba(22,174,230,0.466)"}}>
      
      <h1 className='text-3xl font-bold mb-4 text-blue-900'>About <span className='text-green-600'>Valley</span><span className='text-blue-600'>View</span><span className='text-slate-700'>Zones</span> </h1>
      <p className='mb-4 text-black'>ValleyViewZones is a  real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our application provides exceptional services , making the buying and selling process as smooth as possible.</p>
      <p className='mb-4 text-black'>
      Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
      </p>
      <p className='mb-4 text-black'>Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.</p>
    </div>
    </div>
  );
}
  
    
