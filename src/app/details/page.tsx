import React from 'react'
import Navbar from '@/components/navbar'
import Sidebar from '@/components/sideBar'
import Footer from '@/components/footer'
import Db from "@/assets/Profil.svg"
import review from "@/assets/Reviews.svg"
import Image from 'next/image'
import girl from "@/assets/girl.svg"
import data from "@/assets/data.svg"
import view from '@/assets/poster-view.svg'
import view1 from '@/assets/View 1.svg'
import view2 from '@/assets/View 2.svg'
import view3 from '@/assets/View 3.svg'
import Link from "next/link";

import Card from "@/components/card";
import car1White from "@/assets/image 7.svg"
import car2Gray from "@/assets/image 8.svg"
import car3Blue from "@/assets/Car (1).svg"
import carLGray from "@/assets/Car (2).svg"
import carLBrown from "@/assets/Car (3).svg"
import carLBlue from "@/assets/Car (4).svg"
import heartStroke from "@/assets/Like (3).svg"
import heartfill from "@/assets/Like (2).svg"

const Detail = () => {
    const cardData = [
        {
            name1: "Koenigsegg",
            sport: "sport",
            heart: heartfill.src,
            carImg: car1White.src,
            gasName: "90L",
            wheelName: "Manual",
            people: "2 People",
            dollar: "$99.00"


        },
        {
            name1: "Nissan GT - R",
            sport: "sport",
            heart: heartStroke.src,
            carImg: car2Gray.src,
            gasName: "80L",
            wheelName: "Manual",
            people: "2 People",
            dollar: "$80.00",
            deletePrice: "$100.00"
        },
        {
            name1: "Rolls - Royce",
            sport: "Sedan",
            heart: heartfill.src,
            carImg: car3Blue.src,
            gasName: "70L",
            wheelName: "Manual",
            people: "4 People",
            dollar: "$96.00"


        },
      

    ]
    const cardData2 = [
        {
            name1: "All New Rush",
            sport: "SUV",
            heart: heartStroke.src,
            carImg: carLGray.src,
            gasName: "70L",
            wheelName: "Manual",
            people: "6 People",
            dollar: "$72.00",
            deletePrice: "$80.00"


        },
        {
            name1: "CR - V",
            sport: "SUV",
            heart: heartfill.src,
            carImg: carLBrown.src,
            gasName: "80L",
            wheelName: "Manual",
            people: "6 People",
            dollar: "$80.00"


        },
        {
            name1: "All New Rush",
            sport: "SUV",
            heart: heartStroke.src,
            carImg: carLBlue.src,
            gasName: "90L",
            wheelName: "Manual",
            people: "6 People",
            dollar: "$74.00",



        },
    ]
    return (
        <>
            <Navbar />
            <div className='flex '>
                <Sidebar />
                <div className='bg-gray-100 p-8 flex flex-col gap-5'>
                    <div className='bg-gray-100 rounded-md flex gap-5'>
                        <div className='bg-red-500 lg:w-1/2 rounded-md'>
                            <div className='bg-blue-400'>
                                <Image src={view} alt='view' />
                            </div>
                            <div className='bg-blue-100 flex gap-3 p-3'>
                                <Image src={view1} alt='view1' className='cursor-pointer w-[30%] lg:w-auto' />
                                <Image src={view2} alt='view2' className='cursor-pointer w-[30%] lg:w-auto' />
                                <Image src={view3} alt='view3' className='cursor-pointer w-[30%] lg:w-auto' />
                            </div>
                        </div>
                        <div className='bg-white p-4 w-1/2 rounded-md lg:flex flex-col gap-10 hidden'>
                            <h2 className='font-bold text-2xl '>Nissan GT - R</h2>
                            <div className='flex mt-[-35px] gap-2 items-center'>
                                <Image src={review} alt='review' />
                                <p className='text-xs  text-gray-500'>440+ Reviews</p>
                            </div>
                            <p className='text-gray-500'>NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</p>
                            <Image src={data} alt='image' />
                            <div className='flex justify-between mt-10'>
                                <div >
                                    <p className='text-2xl font-bold'>$80.00 / <span className='text-sm text-gray-500 font-normal'>days</span></p>
                                    <del className='text-gray-500'>$100.00</del>
                                </div>
                                <div>
                                    <button className='px-7 py-3 rounded-md text-sm text-white bg-[#3563E9] '>Rent Now</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='bg-white rounded-md p-3 flex flex-col gap-3'>
                        <div className=' flex gap-3 pb-3'><p className='font-semibold'>Reviews</p><div className='bg-[#3563E9] text-white px-3 text-xs content-center rounded-md'>13</div></div>


                        <div className=' flex'>
                            <div className=' p-2'><Image src={Db} alt='girl' className='cursor-pointer' /></div>
                            <div className=''>
                                <div className='flex  justify-between'>
                                    <div className=''>
                                        <h3 className='font-semibold'>Alex Stanton</h3>
                                        <p className='text-gray-400 text-xs my-2'>CEO at Bukalapak</p>
                                    </div>
                                    <div className=' flex flex-col gap-1 items-end justify-center'><p className='text-xs text-gray-400'>21july2024</p><Image src={review} alt='review' /></div>
                                </div>
                                <p className='text-xs text-gray-400'>We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
                                <div></div>
                            </div>
                        </div>
                        <div className=' flex'>
                            <div className=' p-2'><Image src={girl} alt='girl'className='cursor-pointer' /></div>
                            <div className=''>
                                <div className='flex  justify-between'>
                                    <div className=''>
                                        <h3 className='font-semibold'>Skylar Dias</h3>
                                        <p className='text-gray-400 text-xs my-2'>CEO at Bukalapak</p>
                                    </div>
                                    <div className=' flex flex-col gap-1 items-end justify-center'><p className='text-xs text-gray-400'>21july2024</p><Image src={review} alt='review' /></div>
                                </div>
                                <p className='text-xs text-gray-400'>We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
                                <div></div>
                            </div>
                        </div>


                    </div>

                    {/*       RECENT CAR  -------- */}
                    <div className="space-y-6">
                        <div className="flex justify-between">
                            <p className="text-[#90A3BF]">Recent Car</p>
                            <p className="font-[500] text-[16px] leading-[20px] text-[#3563E9] cursor-pointer">View All </p>
                        </div>

                        <div className="flex flex-wrap  justify-center items-center gap-7 overflow-hidden">
                            {cardData.map((elem, index) => (

                                <Card
                                    name1={elem.name1}
                                    sport={elem.sport}
                                    heart={elem.heart}
                                    carImg={elem.carImg}
                                    gasName={elem.gasName}
                                    wheelName={elem.wheelName}
                                    people={elem.people}
                                    dollar={elem.dollar}
                                    deletePrice={elem.deletePrice}
                                />

                            ))}
                        </div>


                    </div>

                    {/* ------ RECOMMENDE CAR---- */}
                    <div className="space-y-6">
                        <div className="flex justify-between">
                            <p className="text-[#90A3BF]">Recomendation Car</p>
                            <p className="font-[500] text-[16px] leading-[20px] text-[#3563E9] cursor-pointer">View All </p>
                        </div>

                        <div className="flex flex-wrap  justify-center items-center gap-7 overflow-hidden">
                            {cardData2.map((elem, index) => (

                                <Card
                                    name1={elem.name1}
                                    sport={elem.sport}
                                    heart={elem.heart}
                                    carImg={elem.carImg}
                                    gasName={elem.gasName}
                                    wheelName={elem.wheelName}
                                    people={elem.people}
                                    dollar={elem.dollar}
                                    deletePrice={elem.deletePrice}
                                />

                            ))}
                        </div>


                    </div>

                </div>
            </div>


            <Footer />
        </>
    )
}

export default Detail