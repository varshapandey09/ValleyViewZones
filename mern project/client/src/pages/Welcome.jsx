import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Welcome() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div style={{
      backgroundImage: "url('https://www.slidebackground.com/uploads/real-estate-background/real-estate-homebuy-home-banner-background-homebuym-1.jpg')",
      backgroundSize: 'cover', 
      height: '100vh', 
      width: '100vw', 
    }}>
    

      <motion.div className="welcome-message text-black font-bold text-5xl p-20 max-w-fit mx-auto text-center"
  variants={{
    hidden: {
      y: '100%', 
      opacity: 0, 
    },
    visible: {
      y: 0, 
      opacity: 1, 
      transition: { duration: 2, ease: 'easeOut' },
    },
  }}
  initial="hidden"
  animate="visible"
>
  Welcome {currentUser.username}!
</motion.div>
<motion.div className="hover:underline text-blue-950 text-3xl p-5 max-w-lg mx-auto text-center"
  variants={{
    hidden: {
      y: '100%', 
      opacity: 0,
    },
    visible: {
      y: 0, 
      opacity: 1, 
      transition: { duration: 2, ease: 'easeOut' }, 
    },
  }}
  initial="hidden"
  animate="visible"
><Link to="/">
    Click here to continue...
  </Link>
</motion.div>

  </div>
  );
}

export default Welcome;
