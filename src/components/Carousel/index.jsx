import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Virtual } from "swiper/modules";
import { useEffect, useRef } from "react";
import "./Carousel.scss";
import "swiper/scss";
import "swiper/scss/virtual";

export default function Carousel({ slides, currentSlide, onSlideChange }) {
  useEffect(() => {
    if (!Array.isArray(slides)) {
      console.error("Carousel: slides prop must be array", slides);
    }
  }, []);

  const swiperRef = useRef();

  useEffect(() => {
    swiperRef.current?.slideTo(currentSlide);
  }, [currentSlide]);

  return (
    <div className="carousel">
      <Swiper
        modules={[Virtual]}
        virtual
        centeredSlides
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          onSlideChange && onSlideChange(swiper.activeIndex);
        }}
      >
        {Array.isArray(slides) &&
          slides.map((slide, i) => {
            return (
              <SwiperSlide key={i} virtualIndex={i}>
                <div className="carousel-slide">
                  <div className="carousel-slide-title-container">
                    <div className="carousel-slide-title">{slide.title}</div>
                    {slide.icon && (
                    <div className="carousel-slide-icon-container">
                      <img src={slide.icon} />
                    </div>
                  )}
                  </div>
                  {slide.description && (
                    <div className="carousel-slide-description">
                      <p>{slide.description}</p>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
