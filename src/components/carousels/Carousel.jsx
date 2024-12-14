import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { useEffect, useRef } from "react";
import "./Carousel.scss";
import "swiper/scss";

export default function Carousel({
  slides,
  currentSlide,
  onSlideChange,
}) {
  useEffect(() => {
    if (!Array.isArray(slides)) {
      console.error("Carousel: slides prop must be array", slides);
    }
  }, []);

  const swiperRef = useRef();

  useEffect(() => {
    console.log(swiperRef.current);
    swiperRef.current?.slideTo(currentSlide);
  }, [currentSlide]);

  return (
    <div className="carousel">
      <Swiper
        loop={true}
        centeredSlides
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        
      >
        {Array.isArray(slides) &&
          slides.map((item, i) => {
            return <SwiperSlide key={i}>{item}</SwiperSlide>;
          })}
      </Swiper>
    </div>
  );
}
