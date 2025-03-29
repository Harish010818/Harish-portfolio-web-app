"use client";
import { motion } from "framer-motion";

const SmoothScrollWrapper = ({ children, id }) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20}}
      animate={{ opacity: 1, y: 0 }} // Animate to normal position
      //whileInView={{ opacity: 1, y: 50 }}
      //viewport={{ once: true, amount: 0.1 }} // Jab 20% section dikhe tab animate ho

      transition={{
        duration: 1.5, // Animation ka smoothness
        ease: "easeOut",
        //delay: 0.3, // Thoda pause before animation
      }}
       
      style={{ position: "relative"}} // Smooth scrolling ke liye zaroori
    >
       {children}
    </motion.div>
  );
};

export default SmoothScrollWrapper;
