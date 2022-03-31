import React from 'react';
import NavigationBar from "../../components/navigartion-bar/navigation-bar.component";
import Header from "../../components/hedaer/header.compoenent";
import BannerSwiper from "../../components/baner-swiper/baner-swiper.component";
import ShoppingSection from "../../components/shoping-section/shoping-section.component";
import BottomNavigation from '../../components/bottom-navigation/bottom-navigation.component';

const Homepage = () => {
    return (
        <div className='home-page'>
            <NavigationBar/>
            <Header/>
            <BannerSwiper/>
            <ShoppingSection/>
            <BottomNavigation />
        </div>
    )
}

export default Homepage;