import React from 'react';
import NavigationBar from "../../components/navigartion-bar/navigation-bar.component";
import Header from "../../components/hedaer/header.compoenent";
import BannerSwiper from "../../components/baner-swiper/baner-swiper.component";
import ShoppingSection from "../../components/shoping-section/shoping-section.component";

const Homepage = () => {
    return (
        <div className='home-page'>
            <NavigationBar/>
            <Header/>
            <BannerSwiper/>
            <ShoppingSection/>
        </div>
    )
}

export default Homepage;