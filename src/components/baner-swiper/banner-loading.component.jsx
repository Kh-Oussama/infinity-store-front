import React from "react";
import ContentLoader from "react-content-loader";
import {Swiper, SwiperSlide} from "swiper/react";

const BanerSwiperLoader = () => {
    return (
          <div className="BannerSwiper">
              <div className="content">
                  <Swiper
                      spaceBetween={18}
                      slidesPerView={3}
                      navigation
                      autoplay={{
                          delay: 4000,
                          disableOnInteraction: false
                      }}
                      // effect="Coverflow"
                      pagination={{clickable: true}}
                      // onSlideChange={() => console.log('slide change')}
                      // onSwiper={(swiper) => console.log(swiper)}

                  >
                      <SwiperSlide>
                          <div className="pub-card">
                              <ContentLoader
                                  speed={3}
                                  width={"100%"}
                                  height={"100%"}
                                  viewBox="0 0 100% 656"
                                  backgroundColor="#f2f2f2"
                                  foregroundColor="#e1e1e1"
                              >
                                  <rect x="0" y="0" rx="3" ry="3" width="100%" height="100%" />
                              </ContentLoader>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide>
                          <div className="pub-card">
                              <ContentLoader
                                  speed={3}
                                  width={"100%"}
                                  height={"100%"}
                                  viewBox="0 0 100% 656"
                                  backgroundColor="#f2f2f2"
                                  foregroundColor="#e1e1e1"
                              >
                                  <rect x="0" y="0" rx="3" ry="3" width="100%" height="100%" />
                              </ContentLoader>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide>
                          <div className="pub-card">
                              <ContentLoader
                                  speed={3}
                                  width={"100%"}
                                  height={"100%"}
                                  viewBox="0 0 100% 656"
                                  backgroundColor="#f2f2f2"
                                  foregroundColor="#e1e1e1"
                              >
                                  <rect x="0" y="0" rx="3" ry="3" width="100%" height="100%" />
                              </ContentLoader>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide>
                          <div className="pub-card">
                              <ContentLoader
                                  speed={3}
                                  width={"103%"}
                                  height={"100%"}
                                  viewBox="0 0 100% 656"
                                  backgroundColor="#f2f2f2"
                                  foregroundColor="#e1e1e1"
                              >
                                  <rect x="0" y="0" rx="3" ry="3" width="103%" height="100%" />
                              </ContentLoader>
                          </div>
                      </SwiperSlide>



                  </Swiper>
              </div>
          </div>


    );
}

export default BanerSwiperLoader;