import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const welcomeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const backgroundVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: 'easeInOut' } },
};

function Welcome() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <motion.div
      className="welcome-page flex justify-center items-center min-h-screen relative"
      variants={welcomeVariants}
      initial="hidden"
      animate={currentUser ? "visible" : "hidden"}
    >
      {/* Animated Background Image */}


      {/* Animated Background Shapes */}
      
      <motion.div
        className="background-shapes absolute inset-0 z-0"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.svg
          className="shape shape-1 absolute top-0 left-0 w-2/5 h-2/5 rounded-full bg-blue-300"
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1, transition: { duration: 2, ease: 'easeOut' } },
          }}
          initial="hidden"
          animate="visible"
        />
        <motion.svg
          className="shape shape-2 absolute bottom-0 right-0 w-1/3 h-1/3 rounded-full bg-violet-300"
          variants={{
            hidden: { x: '100%', rotate: 0 },
            visible: { x: 0, rotate: 360, transition: { duration: 2, ease: 'linear' } },
          }}
          initial="hidden"
          animate="visible"
        />
        {/* Add more shapes with different variants and animations */}
      </motion.div>

      <motion.div className="welcome-message text-right text-black font-bold text-5xl flex items-center absolute top-1/4 left-unset transform -translate-y-1/2 -translate-x-1/2"
  variants={{
    hidden: {
      y: '100%', // Starts the element off-screen at the bottom (100% height)
      opacity: 0, // Initially invisible
    },
    visible: {
      y: 0, // Animates the element to the top position (y: 0)
      opacity: 1, // Fades in during the animation
      transition: { duration: 1, ease: 'easeOut' }, // Defines animation duration and easing
    },
  }}
  initial="hidden"
  animate="visible"
>
  Welcome {currentUser.username}! 
  <img
    className="rounded-full h-15 w-15 object-cover mr-2" // Adjust size and margin as needed
    src={currentUser.avatar}
    alt="profile"
  />
</motion.div>


<motion.div className="hover:underline text-center text-blue-900 text-3xl absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2"
  variants={{
    hidden: {
      y: '100%', // Starts the element off-screen at the bottom (100% height)
      opacity: 0, // Initially invisible
    },
    visible: {
      y: 0, // Animates the element to the top position (y: 0)
      opacity: 1, // Fades in during the animation
      transition: { duration: 1, ease: 'easeOut' }, // Defines animation duration and easing
    },
  }}
>
  <Link to="/">
    Continue...
  </Link>
</motion.div>

      

      {/* Rest of your welcome page content */}
    </motion.div>
  );
}

export default Welcome;
