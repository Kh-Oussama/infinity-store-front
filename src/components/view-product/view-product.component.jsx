import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import { Link } from "react-router-dom";


SwiperCore.use([Navigation, Pagination, Thumbs]);

const ViewProduct = () => {
    const [isPhone, setIsPhone] = useState(window.innerWidth > 600);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [selectedItem, setSelectedItem] = useState(0);

    const thumbs = [];
    for (let i = 0; i < 3; i += 1) {
        thumbs.push(

            `/images/products/Apples.jpg`,

        );
    }



    return (
        <>
            <div className="view-product">
                <div className="view-product-content">
                    <div className="imageBlock">

                        <Swiper

                            thumbs={{ swiper: thumbsSwiper }}
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

                            <SwiperSlide >
                                <div className="item">
                                    <img src={"/images/products/Apples.jpg"} alt="" className="img" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="item">
                                    <img src={"/images/products/BabySpinach.jpg"} alt="" className="img" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="item">
                                    <img src={"/images/products/blueberries.jpg"} alt="" className="img" />
                                </div>
                            </SwiperSlide>

                        </Swiper>
                        <div className={"second-swiper"}>
                            <Swiper

                                spaceBetween={8}
                                slidesPerView={3}
                                onSwiper={setThumbsSwiper}
                                breakpoints= {{
                                    768:{
                                        slidesPerView: 3,
                                        //slidesPerGroup: 3,
                                    },
                                    580: {
                                        slidesPerView: 2,
                                        //slidesPerGroup: 2,
                                    },
                                    0:{
                                        slidesPerView: 1,
                                    }
                                }}
                            >

                                {
                                    thumbs.map((item, i) => (
                                        <SwiperSlide
                                            key={i}
                                            onClick={() => setSelectedItem(i)}
                                        >
                                            <div className={`thumb-item ${selectedItem === i ? 'selected-item' : ""}`} >
                                                <img src={item} alt="" className="img" />
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }



                            </Swiper>
                        </div>

                    </div>
                    <div className="detail">
                        <h1 className="detail-title">
                            Apples
                        </h1>
                        <p className="detail-subtitle">
                            1lb
                        </p>
                        <div className="detail-description">
                            <p>
                                An apple is a sweet, edible fruit produced by an apple tree (Malus domestica). Apple trees are ... The skin of ripe apples is generally red, yellow, green, pink, or russetted, though many bi- or tri-colored cultivars may be found.
                            </p>
                            {/*<span>Read more</span>*/}
                            <span>less</span>
                        </div>
                        <div className="detail-price">
                            <div className="newPrice">
                                $1.60
                            </div>
                            <div className="oldPrice">
                                $2.00
                            </div>
                        </div>

                        <div className="detail-action">
                            <div className="addButton">
                                Add to Shopping cart
                            </div>
                            <div className="qnt">
                                <span>18</span> pieces available
                            </div>
                        </div>
                        <div className="divider" />
                        <div className="detail-categories">
                            <div className="category">
                                Categories
                            </div>
                            <div className="category-item">fruits & Vegetable</div>
                            <div className="category-item">fruits & Vegetable</div>
                            <div className="category-item">fruit</div>
                            <div className="category-item">fruit</div>
                            <div className="category-item">fruit</div>
                            <div className="category-item">fruit</div>
                        </div>
                        <div className="detail-categories sellers">
                            <div className="category">
                                Sellers
                            </div>
                            <div className="seller">
                                <Link to={''}>
                                    Grocery Shop
                                </Link>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
            <div className="divider" />
            <div className="moreDetails">
                <div className="title">
                    Details
                </div>
                <p>
                    An apple is a sweet, edible fruit produced by an apple tree (Malus domestica). Apple trees are ... The skin of ripe apples is generally red, yellow, green, pink, or russetted, though many bi- or tri-colored cultivars may be found.
                </p>
            </div>
        </>
    )
}

export default ViewProduct;