import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../assets/football.jpg'
import slide2 from '../assets//cricket.jpg'
import slide3 from '../assets/badminton.jpg'
import slide4 from '../assets/volleyball.jpg'
import slide5 from '../assets/hockey.jpg'
import slide6 from '../assets/rugby.jpg'

const Categories = () => (
  <section id="categories" className="py-12 border-b">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center text-text mb-6">
        Sports Items Categories
      </h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img className='w-full h-56' src={slide1} alt="" />
          <h3 className="text-2xl uppercase text-center -mt-16 text-white">
            Football
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-56' src={slide2} alt="" />
          <h3 className="text-2xl uppercase text-center -mt-16 text-white">
            Cricket
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-56' src={slide3} alt="" />
          <h3 className="text-2xl uppercase text-center -mt-16 text-white">
            Badminton
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-56' src={slide4} alt="" />
          <h3 className="text-2xl uppercase text-center -mt-16 text-white">
            Volleyball
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-56' src={slide5} alt="" />
          <h3 className="text-2xl uppercase text-center -mt-16 text-white">
            Hockey
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-56' src={slide6} alt="" />
          <h3 className="text-2xl uppercase text-center -mt-16 text-white">
            Rugby
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
);
export default Categories;
