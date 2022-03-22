import React from "react";
import ContentLoader from "react-content-loader";

const ProductItemLoader = () => {
    return (
        <ContentLoader
            speed={3}
            width={236}
            height={656}
            viewBox="0 0 236 656"
            backgroundColor="#ecebeb"
            foregroundColor="#bdbdbd"
        >
            <rect x="180" y="20" rx="3" ry="3" width="50" height="25" />
            <rect x="18" y="60" rx="3" ry="3" width="234" height="200" />
            <rect x="18" y="280" rx="3" ry="3" width="50" height="25" />
            <rect x="78" y="280" rx="3" ry="3" width="50" height="25" />
            <rect x="18" y="320" rx="3" ry="3" width="130" height="25" />
            <rect x="24" y="360" rx="3" ry="3" width="188" height="36" />
        </ContentLoader>
    );
}

export default ProductItemLoader;