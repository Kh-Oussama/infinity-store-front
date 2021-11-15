import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay, Navigation} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';


SwiperCore.use([ Autoplay, Navigation]);
const BannerSwiper = () => {
    return (
        <>
            <div className="BannerSwiper">
               <div className="content">
                   <Swiper
                       spaceBetween={18}
                       slidesPerView={3}
                       navigation
                       autoplay={{
                           delay: 4000,
                           disableOnInteraction: false
                       }}
                       // effect="Coverflow"
                       pagination={{clickable: true}}
                       // onSlideChange={() => console.log('slide change')}
                       // onSwiper={(swiper) => console.log(swiper)}

                   >

                       <SwiperSlide>
                           <div className="pub-card">
                               <img src="/images/pub-1.png" alt="pub"/>
                           </div>
                       </SwiperSlide>
                       <SwiperSlide>
                           <div className="pub-card">
                               <img src="/images/pub-2.png" alt="pub"/>
                           </div>
                       </SwiperSlide>
                       <SwiperSlide>
                           <div className="pub-card">
                               <img src="/images/pub-3.png" alt="pub"/>
                           </div>
                       </SwiperSlide>
                       <SwiperSlide>
                           <div className="pub-card">
                               <img src="/images/pub-4.png" alt="pub"/>
                           </div>
                       </SwiperSlide>


                   </Swiper>
               </div>
            </div>
        </>
    )
}

export default BannerSwiper;