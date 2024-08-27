'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About JVIP" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">JVIP</span> is 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quos modi iste earum.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, eaque?
        Lorem ipsum dolor sit amet.{' '}
        <span className="font-extrabold text-white">
          bold
        </span>{' '}
        Lorem ipsum dolor sit.{' '}
        <span className="font-extrabold text-white">taste</span> Lorem, ipsum.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem expedita officia repudiandae magni ad molestiae!
        reality. Let's{' '}
        <span className="font-extrabold text-white">explore</span> the madness
        Lorem ipsum dolor sit amet.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
