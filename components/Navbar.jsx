'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <a href="https://jvic-waitlist.vercel.app/"> <img src="/clock.png" alt="search" className="pt-2 w-[44px] h-[44px] object-contain" /> </a>
      <img src="JVIC.png" className='h-20 w-20'></img>
      <a href="https://jvic-book.vercel.app/"> <img src="/book.png" alt="menu" className="w-[50px] h-[50px] object-contain" /> </a>
    </div>
  </motion.nav>
);

export default Navbar;
