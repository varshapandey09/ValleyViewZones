import { useEffect, useState } from 'react';
import {Link} from "react-router-dom";


   
 
  
  export default function Home() {
    const[offerListings,setOfferListings]=useState([]);
    const[saleListings,setSaleListings]=useState([]);
    const[rentListings,setRentListings]=useState([]);
    console.log(saleListings);
  
  
    useEffect(()=>{
      const fetchOfferListings=async()=>{
        try {
          const res = await fetch('/api/listing/get?type=rent&limit=4');
          const data = await res.json();
          setOfferListings(data);
          fetchRentListings
        } catch (error) {
          console.log(error);
        }
  
      }
      const fetchRentListings=async()=>{
        try{
          const res =await fetch('/api/listing/get?type=sale&limit=4');
          const data =await res.json();
          setSaleListings(data);
  
        }catch(error){
          log(error);
  
        }
      }
      fetchOfferListings();
  
    },[]);
    
  
    return (
     <div>
        
           
          {/* top */}
          <div className='h-screen flex justify-center items-center' style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/row-small-house-model-isolate-blue-background_693425-5401.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        
          <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'  style={{backgroundColor:"rgba(22,174,250,0.466)"}}>
          <h1  className="text-black font-bold text-3xl lg:text-6xl ">Welcome to <span className="text-blue-100">Valley</span><span className="text-blue-700">View</span><span className="text-blue-900">Zones</span></h1>
            <h1 className='text-black font-bold text-3xl lg:text-5xl'>
              Find your next <span className="text-blue-900">perfect</span>
              <br />
              place with ease
            </h1>
            <div className='text-blue-700 text-xs sm:text-sm'><b>
            ValleyViewZones is the best place to find your next perfect place to
              live.</b>
              <br />
             <b> We have a wide range of properties for you to choose from.</b>
            </div><b>
            <Link
              to={'/about'} className="text-xs sm:text-sm text-blue-900 fomt-bold hover:underline"><big>
            
              Let's get started...
           </big> </Link></b>
          </div>
        
  
     </div>
     </div>
     );}
  
       