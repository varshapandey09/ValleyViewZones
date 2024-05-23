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

  const divTexts = [
    "ValleyViewZones is your ultimate destination for finding the perfect property. Whether you're looking for a cozy apartment, a luxurious home, or a commercial space, ValleyViewZones has a diverse range of listings to suit your needs. Our user-friendly platform makes it easy to browse, compare, and select the best properties in your desired location. Trust ValleyViewZones to guide you in making one of life's most important decisions.",
    "At ValleyViewZones, we pride ourselves on providing comprehensive real estate solutions. From detailed property descriptions and high-quality images to virtual tours and neighborhood insights, ValleyViewZones equips you with all the information you need to make informed choices. Our dedicated team of real estate professionals is always ready to assist you, ensuring a seamless and satisfying experience.",
    "Explore the endless possibilities with ValleyViewZones. Our extensive database of properties includes options for every budget and lifestyle. Whether you're a first-time homebuyer, an experienced investor, or looking to rent, ValleyViewZones offers the best deals and exclusive listings. Stay ahead in the competitive real estate market with ValleyViewZones by your side.",
    "ValleyViewZones is committed to making your real estate journey as smooth as possible. Our advanced search filters, personalized recommendations, and expert advice help you find properties that match your preferences. With ValleyViewZones, you can be confident that you're getting the best value for your investment. Discover your dream property today with ValleyViewZones."
  ];

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
    hidden: { opacity: 0, y: '100%' },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 3 }
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Background image with text overlay */}
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

      {/* Horizontal div with 4 vertical divs */}
      <div className="flex justify-center my-8">
        <div className="flex gap-4 w-full max-w-6xl">
          {divTexts.map((text, index) => (
            <div
              key={index}
              className="flex-1  bg-opacity-75 h-64 rounded-md flex items-center justify-center p-4 text-center text-black font-italic" style={{height:'50vh', backgroundColor:"rgba(255,255,255,0.7)" }}
            >
              <p>{text}</p>
            </div>
          ))}
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
