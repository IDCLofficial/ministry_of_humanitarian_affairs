"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

function Advert() {
    const [showAd, setShowAd] = useState(true);
    const [width, setWidth] = useState(0)
    const [isClosing, setIsClosing] = useState(false)
    const duration = 10000; // 10 seconds total
    const interval = 100; // Update every 100ms for smoother animation

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsClosing(true);
            // Wait for the close animation to finish before unmounting
            setTimeout(() => setShowAd(false), 300);
        }, duration);
        
        const progressInterval = setInterval(() => {
            setWidth(prev => {
                const newWidth = prev + (100 / (duration / interval));
                return newWidth > 100 ? 100 : newWidth;
            });
        }, interval);
        
        return () => {
            clearTimeout(timer);
            clearInterval(progressInterval);
        };
    }, [])
    

    if (!showAd) return null;

    return (
        <div className={`h-screen w-full fixed top-0 z-50 flex items-center bg-black/40 p-8 transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}>
            <div className="bg-white text-black rounded-lg shadow-2xl md:w-[80%] w-full mx-auto overflow-hidden">
                <div className='w-full h-1.5 bg-gray-100'>
                    <div 
                        className="h-full bg-yellow-500 transition-all duration-300 ease-linear"
                        style={{ width: `${width}%` }}
                    ></div>
                </div>
                <div className="flex flex-col md:flex-row p-6 items-center justify-between">
                    <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Imo State Economic & Investment Summit 2025</h2>
                    <p className="mb-6 leading-relaxed">
                        On December 4<sup>th</sup>&minus;5<sup>th</sup>, Imo State will host a powerful gathering of leaders, investors, and visionaries ready to unlock new opportunities for growth and innovation.
                    </p>
                    <p className="mb-8 leading-relaxed">
                        From digital transformation to agriculture, education, energy, and youth empowerment, this summit is where ideas meet investment and where the future of Imo&apos;s economy takes shape.
                    </p>
                    
                    <div className="space-y-2 mb-8">
                        <div className="flex items-center gap-3">
                        <span className="text-yellow-400">📍</span>
                        <span>Owerri, Imo State</span>
                        </div>
                        <div className="flex items-center gap-3">
                        <span className="text-yellow-400">📅</span>
                        <span>Dec 4<sup>th</sup>&minus;5<sup>th</sup>, 2025</span>
                        </div>
                        <div className="flex items-center gap-3">
                        <span className="text-yellow-400">📩</span>
                        <a href="mailto:info@imoeconomicsummit.com" className="hover:underline">info@imoeconomicsummit.com</a>
                        </div>
                    </div>
                    </div>
                    <div className="h-full w-[400px] mt-6 md:mt-0">
                        <div className="relative h-full w-full rounded-lg overflow-hidden">
                            <Image
                                src="/images/events/econ_summit.jpg"
                                alt="Imo State Economic Summit"
                                height={1000}
                                width={1000}
                                className="object-contain w-full h-full"
                                priority
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-2 text-center">
                            Join us in shaping the future of Imo State's economy
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Advert;