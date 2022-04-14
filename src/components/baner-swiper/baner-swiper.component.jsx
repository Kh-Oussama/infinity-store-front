import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';
import NavigationBarLoader from "../navigartion-bar/navigation-bar-loader.component";
import BanerSwiperLoader from "./banner-loading.component";
import DropdownButton from "./../utils/dropdown-button/dropdown-button.component";


SwiperCore.use([Autoplay, Navigation]);
const BannerSwiper = ({ loading }) => {
    //Function to display side menu
    const displaySideMenu = _ => {
        const sideMenu = document.querySelector('.shop-container .side-menu');
        sideMenu.classList.add('active');
    }

    return (
        <>
            {
                loading
                    ? <BanerSwiperLoader />
                    :
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
                                breakpoints={{
                                    1024: {
                                        slidesPerView: 3,
                                    },
                                    580: {
                                        slidesPerView: 2,
                                    },
                                    0: {
                                        slidesPerView: 1,
                                    }
                                }}
                                // effect="Coverflow"
                                pagination={{ clickable: true }}
                            // onSlideChange={() => console.log('slide change')}
                            // onSwiper={(swiper) => console.log(swiper)}

                            >

                                <SwiperSlide>
                                    <div className="pub-card">
                                        <img src="/images/pub-1.png" alt="pub" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="pub-card">
                                        <img src="/images/pub-2.png" alt="pub" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="pub-card">
                                        <img src="/images/pub-3.png" alt="pub" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="pub-card">
                                        <img src="/images/pub-4.png" alt="pub" />
                                    </div>
                                </SwiperSlide>


                            </Swiper>
                        </div>
                        <div className='actions'>
                            <button className='filter-btn' onClick={displaySideMenu}>
                                <span className='fa-solid fa-sliders'></span>
                                <span>Filter</span>
                            </button>

                            <DropdownButton />
                        </div>
                    </div>

            }

        </>
    )
}

export default BannerSwiper;