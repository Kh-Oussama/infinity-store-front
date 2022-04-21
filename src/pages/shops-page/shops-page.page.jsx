import React from 'react';
import NavigationBar from "../../components/navigartion-bar/navigation-bar.component";
import ShopsCollection from "../../components/Shops-collection/shops-collection.component";
import BottomNavigationBar from "./../../components/bottom-navigation/bottom-navigation.component";

const ShopsPage = () => {
    return (
        <div className="shop-page">
            <NavigationBar/>
            <ShopsCollection/>
            <BottomNavigationBar />
        </div>
    )
}

export default ShopsPage;