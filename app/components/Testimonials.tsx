"use client"

import avatar1 from '@/public/assets/avatar-1.png'
import avatar2 from '@/public/assets/avatar-2.png'
import avatar3 from '@/public/assets/avatar-3.png'
import avatar4 from '@/public/assets/avatar-4.png'
import avatar5 from '@/public/assets/avatar-5.png'
import avatar6 from '@/public/assets/avatar-6.png'
import avatar7 from '@/public/assets/avatar-7.png'
import avatar8 from '@/public/assets/avatar-8.png'
import avatar9 from '@/public/assets/avatar-9.png'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'
import React from 'react'

const testimonials = [
    {
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        imageSrc: avatar1.src,
        name: "Jamie",
        username: '@refs@88'
    },
    {
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        imageSrc: avatar2.src,
        name: "Jamie",
        username: '@iteg@88'
    },
    {
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        imageSrc: avatar3.src,
        name: "Jamie",
        username: '@nki@88'
    },
    {
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        imageSrc: avatar4.src,
        name: "Jamie",
        username: '@uio@88'
    },
    {
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        imageSrc: avatar5.src,
        name: "Jamie",
        username: '@haha@88'
    },
    {
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        imageSrc: avatar6.src,
        name: "Jamie",
        username: '@love@88'
    },
    {
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        imageSrc: avatar7.src,
        name: "Jamie",
        username: '@guru@88'
    },
    {
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        imageSrc: avatar8.src,
        name: "Jamie",
        username: '@jguru@88'
    },
    {
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        imageSrc: avatar9.src,
        name: "Jamie",
        username: '@jamieguru@8'
    },
]


const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const TestimonialColumn = (props: {
    className?: string;
    testimonials: typeof testimonials;
    duration?: number
}) => (
    <div className={props.className}>
        <motion.div
            animate={{
                translateY: '-50%',

            }}
            transition={{
                duration: props.duration || 10,
                repeat: Infinity,
                ease: 'linear',
                repeatType: 'loop'
            }}
            className='flex flex-col gap-6 pb-6 -translate-y-1/2'>
            {
                [...new Array(2)].fill(0).map((_, index) => (
                    <React.Fragment key={index}>
                        {
                            props.testimonials.map(({ text, imageSrc, name, username }) => (
                                <div className='card' key={username}>
                                    <div className=''>{text}</div>
                                    <div className='flex items-center gap-2 mt-5'>
                                        <Image
                                            src={imageSrc} alt={name}
                                            className='h-10 w-10 rounded-full'
                                            width={40}
                                            height={40}
                                        />
                                        <div className='flex flex-col'>
                                            <div className='font-medium tracking-tight leading-5'>{name}</div>
                                            <div className='leading-5 tracking-tight'>{username}</div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </React.Fragment>
                ))
            }
        </motion.div>
    </div >

)

const Testimonials = () => {
    return (
        <section className='p-5 md:px-8 bg-white'>
            <div className='container'>
                <div className="flex justify-center">
                    <div className='tag'>Testimonials</div>
                </div>
                <h2 className='section-title mt-5'>What our users say</h2>
                <p className='section-description mt-5'>From inuitive design to powerful features, our app has become an
                    essential test for users around the world</p>

                <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
                    <TestimonialColumn testimonials={firstColumn} duration={15} />
                    <TestimonialColumn testimonials={secondColumn} duration={19} className='hidden md:block' />
                    <TestimonialColumn testimonials={thirdColumn} duration={17} className='hidden lg:block' />
                </div>
            </div >
        </section >
    )
}

export default Testimonials