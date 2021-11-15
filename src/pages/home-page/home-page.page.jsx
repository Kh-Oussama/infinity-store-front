import React from 'react';
import NavigationBar from "../../components/navigartion-bar/navigation-bar.component";
import Header from "../../components/hedaer/header.compoenent";
import BannerSwiper from "../../components/baner-swiper/baner-swiper.component";

const Homepage = () => {
    return (
        <>
            <NavigationBar/>
            <Header/>
            <BannerSwiper/>
        </>
    )
}

export default Homepage;