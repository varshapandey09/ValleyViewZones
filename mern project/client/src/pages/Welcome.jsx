import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

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
          className="shape shape-1 absolute top-0 left-0 w-1/2 h-1/2 rounded-full bg-blue-300"
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
            visible: { x: 0, rotate: 360, transition: { duration: 3, ease: 'linear' } },
          }}
          initial="hidden"
          animate="visible"
        />
        {/* Add more shapes with different variants and animations */}
      </motion.div>

      <motion.div className="welcome-message text-center text-blue-900 font-bold text-5xl absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
        variants={{
          hidden: { opacity: 0, scale: 0 }, // Start hidden and zoomed out
          visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } },
        }}
      >
        Welcome {currentUser.username}!
      </motion.div>

      {/* Rest of your welcome page content */}
    </motion.div>
  );
}

export default Welcome;
