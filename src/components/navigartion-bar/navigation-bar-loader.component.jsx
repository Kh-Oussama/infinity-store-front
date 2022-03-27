import React from "react";
import ContentLoader from "react-content-loader";

const NavigationBarLoader = () => {
    return (
        <ContentLoader
            speed={3}
            width={"100%"}
            height={"100%"}
            viewBox="0 0 100% 656"
            backgroundColor="#f2f2f2"
            foregroundColor="#e1e1e1"
        >
            <rect x="0" y="20" rx="3" ry="3" width="100%" height="100%" />
        </ContentLoader>
    );
}

export default NavigationBarLoader;