"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section 
            
            className="lg:py-16  ">
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-12 py-20 "
            >
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className='text-white mb-4 text-4xl  sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold transition-colors duration-700 hover:text-purple-500 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
'>Hello, I&apos;m
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Maciej Sitarski',
                                
                                2000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Web Developer',
                                2000,
                                'Techno DJ',
                                2000,
                                'Martial Artist',
                                2000
                            ]}
                            wrapper="span"
                            speed={20}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-white mb-6 text-lg lg:text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
 ">

                        I&apos;m software delevoper with love of creating responsive and interactive websites, also, I&apos;m a techno DJ and Muay Thai enthusiast.
                    </p>
                    <div>
                        
                    </div>
                    <div>
                        <Link href="#contact" className="text-black bg-white px-6 py-3 w-full sm:w-fit  rounded-full hover:bg-slate-200 mr-4">Hire me</Link>
                        <Link href= "https://drive.google.com/file/d/1lxM1oSQQksos66JfE6fzsh_7m-LrmS94/view?usp=sharing" className="text-white bg-black border w-full sm:w-fit px-6 py-3 rounded-full hover:bg-slate-900 mt-4 mr-4">Download CV</Link>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">

                        {/* <Image
                            src="/images/sit.png"
                            alt="hero-image"
                            className="absolute transform rounded -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={350}
                            height={400}
                        /> */}
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
export default HeroSection;