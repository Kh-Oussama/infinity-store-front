import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import { Link, withRouter, useHistory } from "react-router-dom";
import 'semantic-ui-css/components/table.min.css';
import 'semantic-ui-css/components/label.min.css';
import DetailsTable from "./details-table.component";
import { createStructuredSelector } from "reselect";
import { addItem, removeItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import { selectCartItems } from '../../redux/cart/cart.selectors';

SwiperCore.use([Navigation, Pagination, Thumbs]);

const ViewProduct = ({ product, addItem, removeItem, cartItems }) => {
    let history = useHistory();
    const [isPhone, setIsPhone] = useState(window.innerWidth > 600);
    const [selectedSize, setSelectedSize] = useState(0);
    const [selectedColor, setSelectedColor] = useState(0);
    const [selectedSizeError, setSelectedSizeError] = useState(false);
    const [selectedColorError, setSelectedColorError] = useState(false);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [selectedItem, setSelectedItem] = useState(0);
    const [currentItem, setCurrenItem] = useState(null);

    const thumbs = [];
    for (let i = 0; i < 3; i += 1) {
        thumbs.push(
            `/${product}`,
        );
    }

    const addItemToShoppingCard = item => {

        if (product.colors.length > 0 && !selectedColor) {
            return setSelectedColorError(true);
        }
        if (product.product_size && !selectedSize) {
            return setSelectedSizeError(true);
        }

        if (selectedColor && selectedSize)
            return addItem({ ...item, color: selectedColor, size: selectedSize });

        if (selectedColor) return addItem({ ...item, color: selectedColor });
        if (selectedSize) return addItem({ ...item, size: selectedSize });

        addItem(item);

    }

    useEffect(() => {
        setCurrenItem(cartItems.find(item => item.id === product.id));
    }, [cartItems]);
    
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
                            {
                                product.images.map(img => (
                                    <SwiperSlide>
                                        <div className="item">
                                            <img src={`http://localhost:8000/${img.path}`} alt="" className="img" />
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
                                breakpoints={{
                                    768: {
                                        slidesPerView: 3,
                                        //slidesPerGroup: 3,
                                    },
                                    580: {
                                        slidesPerView: 2,
                                        //slidesPerGroup: 2,
                                    },
                                    0: {
                                        slidesPerView: 1,
                                    }
                                }}
                            >

                                {
                                    product.images.map((item, i) => (
                                        <SwiperSlide
                                            key={i}
                                            onClick={() => setSelectedItem(i)}
                                        >
                                            <div className={`thumb-item ${selectedItem === i ? 'selected-item' : ""}`}>
                                                <img src={`http://localhost:8000/${item.path}`} alt="" className="img" />
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }


                            </Swiper>
                        </div>

                    </div>
                    <div className="detail">
                        <h1 className="detail-title" onClick={() => history.push(`/products/${product.slug}`)}>
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
                                {`${product.price}DA`}
                            </div>
                            <div className="oldPrice">
                                {`${product.old_price}DA`}
                            </div>
                        </div>


                        {
                            product.colors?.length > 0 &&
                            <div className="detail-sizes-block" >
                                <h4 className="detail-sizes-block-attribute" >Colors</h4>
                                <div className="detail-sizes-block-items" >
                                    {
                                        product.colors.map(item => (
                                            <div className={`category-item item color  ${item.name}`} onClick={() => {
                                                setSelectedColorError(false);
                                                setSelectedColor(item);
                                            }}>
                                                {
                                                    selectedColor.id === item.id &&
                                                    <i className="fa-solid fa-check-double" />
                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                                {
                                    selectedColorError
                                    &&
                                    <div className="errors-block">

                                        <span className={"input-validation-errors"}>
                                            <i className="fa-solid fa-triangle-exclamation" />
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        </span>

                                    </div>
                                }
                            </div>
                        }

                        {
                            product.product_size &&
                            <div className="detail-sizes-block" >
                                <h4 className="detail-sizes-block-attribute" >{product.product_size.name}</h4>
                                <div className="detail-sizes-block-items" >
                                    {
                                        product.product_size.details.map(item => (
                                            <div className={`category-item item  ${selectedSize.id === item.id ? 'active' : null}`} onClick={() => {
                                                setSelectedSizeError(false);
                                                setSelectedSize(item)
                                            }}>{item.name}</div>
                                        ))
                                    }
                                </div>
                                {
                                    selectedSizeError
                                    &&
                                    <div className="errors-block">

                                        <span className={"input-validation-errors"}>
                                            <i className="fa-solid fa-triangle-exclamation" />
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        </span>

                                    </div>
                                }
                            </div>
                        }


                        {/*<div className="divider"/>*/}
                        <div className="detail-action">
                            {/* Update quantity after click on add to cart button */}
                            {currentItem ? 
                            <div className='action update-qty'>
                                <span onClick={() => removeItem(currentItem)} className='fa-solid fa-minus'></span>
                                <span>{currentItem.quantity}</span>
                                <span onClick={() => addItemToShoppingCard(product)} className='fa-solid fa-plus'></span>
                            </div> :

                            <div className="action addButton" onClick={() => addItemToShoppingCard(product)}>
                                Add to Shopping cart
                            </div>}

                            <div className="qnt">
                                <span>{product.quantity}</span> pieces available
                            </div>
                        </div>


                        <div className="divider" />
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
                                <Link to={`/shops/${product?.store?.name}`}>
                                    {product?.store?.name}
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
                    {
                        product.description
                    }
                </p>
                <DetailsTable data={product.product_informations} />

            </div>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewProduct));