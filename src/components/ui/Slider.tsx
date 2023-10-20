"use client"
import { Carousel } from 'antd';
import Image from 'next/image';
import banner1 from '../../asets/banner-01.jpg';
import banner2 from '../../asets/banner-02.jpg';
import banner3 from '../../asets/banner-03.jpg';


const Slider = () => (
    <Carousel autoplay className=' mt-2'>
        <div>
            <Image src={banner3} alt='' width="1600" className=' w-full' />
        </div>
        <div>
            <Image src={banner2} alt='' width="1600" className=' w-full' />
        </div>
        <div>
            <Image src={banner1} alt='' width="1600" className=' w-full' />
        </div>

    </Carousel>
);

export default Slider;