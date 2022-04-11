import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Thumbs} from 'swiper';
import 'swiper/swiper-bundle.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import {Link} from "react-router-dom";
import 'semantic-ui-css/components/table.min.css';
import 'semantic-ui-css/components/label.min.css';
import DetailsTable from "./details-table.component";

SwiperCore.use([Navigation, Pagination, Thumbs]);

const ViewProduct = ({product}) => {
    const [isPhone, setIsPhone] = useState(window.innerWidth > 600);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [selectedItem, setSelectedItem] = useState(0);

    const thumbs = [];
    for (let i = 0; i < 3; i += 1) {
        thumbs.push(
            `/${product}`,
        );
    }


    console.log(product);
    return (
        <>
            <div className="view-product">
                <div className="view-product-content">
                    <div className="imageBlock">

                        <Swiper

                            thumbs={{swiper: thumbsSwiper}}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation={isPhone}
                            loop
                            pagination={{
                                clickable: true,
                            }}
                            onSlideChange={(swiper) => {

                                if (swiper.activeIndex === 4) {
                                    setSelectedItem(0);
                                } else {
                                    if (swiper.activeIndex === 0) {
                                        setSelectedItem(2);
                                    } else setSelectedItem(swiper.activeIndex - 1)
                                }

                            }}
                            // onSwiper={(swiper) => console.log(swiper)}

                        >
                            {
                                product.images.map(img => (
                                        <SwiperSlide>
                                            <div className="item">
                                                <img src={`http://localhost:8000/${img.path}`} alt="" className="img"/>
                                            </div>
                                        </SwiperSlide>
                                    )
                                )
                            }


                        </Swiper>
                        <div className={"second-swiper"}>
                            <Swiper

                                spaceBetween={8}
                                slidesPerView={3}
                                onSwiper={setThumbsSwiper}
                            >

                                {
                                    product.images.map((item, i) => (
                                        <SwiperSlide
                                            key={i}
                                            onClick={() => setSelectedItem(i)}
                                        >
                                            <div className={`thumb-item ${selectedItem === i ? 'selected-item' : ""}`}>
                                                <img src={`http://localhost:8000/${item.path}`} alt="" className="img"/>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }


                            </Swiper>
                        </div>

                    </div>
                    <div className="detail">
                        <h1 className="detail-title">
                            {product.name}
                        </h1>
                        <p className="detail-subtitle">
                            1lb
                        </p>
                        <div className="detail-description">
                            <p>
                                {
                                    product.description
                                }
                            </p>
                            {/*<span>Read more</span>*/}
                            <span>less</span>
                        </div>
                        <div className="detail-price">
                            <div className="newPrice">
                                {`${product.price}Da`}
                            </div>
                            <div className="oldPrice">
                                {`${product.old_price}Da`}
                            </div>
                        </div>
                        <div className="divider"/>
                        {
                            product.product_size &&
                            <div className="detail-sizes-block" >
                                <h4 className="detail-sizes-block-attribute" >{product.product_size.name}</h4>
                                <div className="detail-sizes-block-items" >
                                    {
                                        product.product_size.details.map(item => (
                                            <div className="category-item item">{item.name}</div>
                                        ))
                                    }
                                </div>
                            </div>
                        }

                        {/*<div className="divider"/>*/}
                        <div className="detail-action">
                            <div className="addButton">
                                Add to Shopping cart
                            </div>
                            <div className="qnt">
                                <span>{product.quantity}</span> pieces available
                            </div>
                        </div>
                        <div className="divider"/>
                        <div className="detail-categories">
                            <div className="category">
                                Categories
                            </div>
                            <div className="category-item">{product?.category?.name}</div>
                            <div className="category-item">{product?.subcategory?.name}</div>

                        </div>
                        <div className="detail-categories sellers">
                            <div className="category">
                                Sellers
                            </div>
                            <div className="seller">
                                <Link to={`/shops/${product.store.name}`}>
                                    {product.store.name}
                                </Link>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className="divider"/>
            <div className="moreDetails">
                <div className="title">
                    Details
                </div>
                <p>
                    {
                        product.description
                    }
                </p>
                <DetailsTable data={product.product_informations} />

            </div>
        </>
    )
}

export default ViewProduct;