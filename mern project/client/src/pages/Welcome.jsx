import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Welcome() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div style={{
      backgroundImage: "url('https://learn.g2.com/hubfs/what%20is%20real%20esate.jpg')",
      backgroundSize: 'cover', // Adjust as needed (cover, contain, etc.)
      backgroundPosition: 'center', // Adjust as needed (center, top left, etc.)
      height: '100vh', // Adjust height as needed
      width: '100vw', // Adjust width as needed
    }}>
    

      <motion.div className="welcome-message text-black font-bold text-5xl flex absolute top-1/4 transform -translate-y-1/2"
      style={{display: 'flex', justifyContent: 'center'}}
  variants={{
    hidden: {
      y: '100%', // Starts the element off-screen at the bottom (100% height)
      opacity: 0, // Initially invisible
    },
    visible: {
      y: 0, // Animates the element to the top position (y: 0)
      opacity: 1, // Fades in during the animation
      transition: { duration: 2, ease: 'easeOut' }, // Defines animation duration and easing
    },
  }}
  initial="hidden"
  animate="visible"
>
  Welcome {currentUser.username}! 
</motion.div>
<motion.div className="hover:underline text-center text-blue-900 text-3xl absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
  variants={{
    hidden: {
      y: '100%', // Starts the element off-screen at the bottom (100% height)
      opacity: 0, // Initially invisible
    },
    visible: {
      y: 0, // Animates the element to the top position (y: 0)
      opacity: 1, // Fades in during the animation
      transition: { duration: 2, ease: 'easeOut' }, // Defines animation duration and easing
    },
  }}
><Link to="/">
    Continue...
  </Link>
</motion.div>

  </div>
  );
}

export default Welcome;
