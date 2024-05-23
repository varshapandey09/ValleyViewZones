import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import ListingItem from '../components/ListingItem';
import { motion } from 'framer-motion';

SwiperCore.use([Navigation, Autoplay]);

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  
  const backgroundImage = 'https://static.vecteezy.com/system/resources/previews/034/814/698/non_2x/ai-generated-green-beautiful-wallpaper-real-estate-free-photo.jpg';

  

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOfferListings();
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: '25%' },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 3 }
    }
  };
  
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100vw',
          position: 'relative',
        }}
      >
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center text-center text-white"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <h1 className="text-5xl font-bold">
            <span className='text-blue-900'>Valley</span>
            <span className='text-green-900'>View</span>
            <span className='text-violet-900'>Zones</span>
          </h1>
          <h3 className="mt-4 text-3xl font-bold text-black">
            <big> Find your next <span className="text-blue-900">perfect</span> place with ease</big>
          </h3>
          <div className="mt-2 text-lg">
            <big><p className='text-black'>ValleyViewZones is the best place to find your next perfect place to live.</p></big>
            <big><p className='text-black'>We have a wide range of properties for you to choose from.</p></big>
          </div>
          <Link
            to={'/search'}
            className="mt-4 text-lg text-blue-950 font-bold hover:underline px-4 py-2 rounded"
          >
            Let's get started...
          </Link>
        </motion.div>
      </div>

      <div class="flex flex-row bg-white rounded-lg py-10">
        <div class="text-container bg-white w-3/5 mx-auto py-10 pl-16 ">
          <h2 class="text-4xl font-bold mb-10 text-blue-900">
            Imagine your dream home...
          </h2>
          <p class="text-lg mb-8 leading-loose text-slate-400">
            Is it a place filled with laughter and cozy evenings by the fireplace? 
            Maybe it's a bright and airy space perfect for entertaining friends and family.
            Whatever your vision, <span className='text-blue-700 font-bold'>Valley</span><span className='text-green-700 font-bold'>View</span><span className='text-violet-700 font-bold'>Zones</span> helps you find the perfect match.
          </p>
          <ul class="list-none p-0 mb-8 pl-6">
            <li class="flex items-center space-x-4">
              <span class="text-slate-500 text-lg font-bold leading-loose">Stop endless searching! Find your haven in minutes.</span>
            </li>
            <li class="flex items-center space-x-4">
              <span class="text-slate-500 text-lg font-bold leading-loose">Fall in love with beautiful listings curated for you.</span>
            </li>
            <li class="flex items-center space-x-4">
              <span class="text-slate-500 text-lg font-bold leading-loose">Turn the key and unlock a new chapter filled with joy.</span>
            </li>
          </ul>
          <p class="text-lg font-bold text-slate-400">
            Let's make your dream home a  <span className='text-blue-900'> R E A L I T Y!</span>
          </p>
        </div>
        <div className='pb-16'>
          <img src="https://t3.ftcdn.net/jpg/01/67/07/12/360_F_167071270_P6D1HSu3HD9FYngLzF5bmCIJMgTDL32b.jpg"
          alt="Dream home image"
          class="object-cover h-full"
          ></img>
        </div>
      </div>
      <div className="flex-grow">
        {/* Swiper for listings */}
        <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='h-[500px]'
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

        {/* Listing results for offer, sale and rent */}
        <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-100'>
          {offerListings && offerListings.length > 0 && (
            <div>
              <div className='my-3'>
                <h2 className='text-2xl font-semibold text-slate-900'>Recent offers</h2>
                <Link className='text-sm text-blue-900 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
              </div>
              <div className='flex flex-wrap gap-4'>
                {offerListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )}
          {rentListings && rentListings.length > 0 && (
            <div>
              <div className='my-3'>
                <h2 className='text-2xl font-semibold text-slate-900'>Recent places for rent</h2>
                <Link className='text-sm text-blue-900 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
              </div>
              <div className='flex flex-wrap gap-4'>
                {rentListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )}
          {saleListings && saleListings.length > 0 && (
            <div>
              <div className='my-3'>
                <h2 className='text-2xl font-semibold text-slate-900'>Recent places for sale</h2>
                <Link className='text-sm text-blue-900 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
              </div>
              <div className='flex flex-wrap gap-4'>
                {saleListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
