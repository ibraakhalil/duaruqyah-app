'use client'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"


const TextSlider = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    )
    return (
        <Carousel plugins={[plugin.current]} className='w-full'>
            <CarouselContent className='text-center'>
                <CarouselItem>
                    <p className="w-[85%] mx-auto text-center text-white">None has the right to be worshipped except Allah, He is alone, without any partner, to Him belong all sovereignty and praise... <br /><br />

                        [Bukhari: 3293]</p>
                </CarouselItem>
                <CarouselItem>
                    <p className="w-[85%] mx-auto text-center text-white">None has the right to be worshipped except Allah, He is alone, without any partner, to Him belong all sovereignty and praise... <br /><br />

                        [Bukhari: 3293]</p>
                </CarouselItem>
                <CarouselItem>
                    <p className="w-[85%] mx-auto text-center text-white">None has the right to be worshipped except Allah, He is alone, without any partner, to Him belong all sovereignty and praise... <br /><br />

                        [Bukhari: 3293]</p>
                </CarouselItem>
                <CarouselItem>
                    <p className="w-[85%] mx-auto text-center text-white">None has the right to be worshipped except Allah, He is alone, without any partner, to Him belong all sovereignty and praise... <br /><br />

                        [Bukhari: 3293]</p>
                </CarouselItem>
                <CarouselItem>
                    <p className="w-[85%] mx-auto text-center text-white">None has the right to be worshipped except Allah, He is alone, without any partner, to Him belong all sovereignty and praise... <br /><br />

                        [Bukhari: 3293]</p>
                </CarouselItem>
                <CarouselItem>
                    <p className="w-[85%] mx-auto text-center text-white">None has the right to be worshipped except Allah, He is alone, without any partner, to Him belong all sovereignty and praise... <br /><br />

                        [Bukhari: 3293]</p>
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    );
}

export default TextSlider;