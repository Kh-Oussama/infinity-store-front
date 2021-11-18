import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Thumbs} from 'swiper';
import 'swiper/swiper-bundle.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';


SwiperCore.use([Navigation, Pagination, Thumbs]);

const ViewProduct = () => {
    const [isPhone, setIsPhone] = useState(window.innerWidth > 600);
    const [active, setActive] = useState("SecondCard");
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
                               }else setSelectedItem(swiper.activeIndex-1)
                            }}
                            // onSwiper={(swiper) => console.log(swiper)}

                        >

                            <SwiperSlide >
                                <div className="item">
                                    <img src={"/images/products/Apples.jpg"} alt="" className="img"/>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="item">
                                    <img src={"/images/products/Apples.jpg"} alt="" className="img"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="item">
                                    <img src={"/images/products/Apples.jpg"} alt="" className="img"/>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                        <div className={"second-swiper"}>
                            <Swiper

                                spaceBetween={8}
                                slidesPerView={3}
                                onSwiper={setThumbsSwiper}
                            >

                                {
                                    thumbs.map((item, i) => (
                                        <SwiperSlide
                                            key={i}
                                            onClick={() => setSelectedItem(i)}
                                            >
                                            <div className={`thumb-item ${selectedItem === i ? 'selected-item' : ""}`} >
                                                <img src={item} alt="" className="img"/>
                                            </div>
                                        </SwiperSlide>
                                   ))
                                }



                            </Swiper>
                        </div>

                    </div>
                    <div className="detail">
                        <h1 className="detail-title">
                            EVERMORE LONDON
                        </h1>
                        <p className="detail-p">
                            Grove Earth & Aged Pine Scented Candle - 300g
                        </p>
                        <div className="detail-product-number">Product Number : 15885</div>
                        <div className="detail-stars">
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="far fa-star"/>
                        </div>
                        <div className="detail-description-header">
                        <span className={active === "FirstCard" ? "active" : null}
                              onClick={() => setActive("FirstCard")}>Description</span>
                            <span className={active === "SecondCard" ? "active" : null}
                                  onClick={() => setActive("SecondCard")}>Basic Info</span>
                            <span className={active === "ThirdCard" ? "active" : null}
                                  onClick={() => setActive("ThirdCard")}>Caliber</span>
                        </div>

                        <p>1111111Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet asperiores blanditiis
                            consequuntur doloribus error excepturi exercitationem iusto labore laborum, laudantium maxime
                            nisi omnis quibusdam quos ratione sapiente unde venia?</p>



                        <div className="detail-priceBlock">
                            <div className="price">22$</div>
                            <div className="qnt">10+ in stock</div>
                        </div>
                        <div className="detail-actions">
                            <button className="add">Add to Carte</button>
                            <div className="heart">
                                <i className="far fa-heart"/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ViewProduct;