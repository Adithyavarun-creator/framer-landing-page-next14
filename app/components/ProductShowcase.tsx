"use client"

import productImage from '@/public/assets/product-image.png'
import pyramidImage from '@/public/assets/pyramid.png'
import tubeImage from '@/public/assets/tube.png'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const ProductShowcase = () => {
    const sectionRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    })
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

    return (
        <section ref={sectionRef} className="p-5 md:px-8 bg-gradient-to-b from-[#ffffff] to-[#d2dcff] py-24 overflow-x-clip">
            <div className="container">
                <div className='section-heading'>
                    <div className="flex justify-center">
                        <div className='tag'>
                            Boost your productivity
                        </div>
                    </div>
                    <h2 className="section-title mt-5">A more effective way to track progress</h2>
                    <p className="section-description mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor officia reprehenderit aspernatur harum aliquam ducimus reiciendis soluta, totam doloribus quis.</p>
                </div>
                <div className="relative">
                    <Image
                        src={productImage} alt='product'
                        className='mt-10'
                    />
                    <motion.img
                        src={pyramidImage.src} alt='pyramid'
                        height={262}
                        width={262}
                        className='hidden md:block absolute -right-36 -top-32'
                        style={{
                            translateY: translateY
                        }}
                    />
                    <motion.img
                        src={tubeImage.src} alt='tube'
                        height={248}
                        width={248}
                        className='hidden md:block absolute bottom-24 -left-36'
                        style={{
                            translateY: translateY
                        }}
                    />
                </div>
            </div>
        </section>
    )
}

export default ProductShowcase