import React from 'react';
import NavigationBar from "../../components/navigartion-bar/navigation-bar.component";
import ShopsCollection from "../../components/Shops-collection/shops-collection.component";

const ShopsPage = () => {
    return (
        <>
            <div className="shop-page">
                <NavigationBar/>
                <ShopsCollection/>
            </div>
        </>
    )
}

export default ShopsPage;