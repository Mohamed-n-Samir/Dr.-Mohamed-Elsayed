import React, { useRef, useState } from "react";
import Card from "../Card/Card";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Autoplay } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./slider-styles.css";



// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

function Slider() {
	const [swiperRef, setSwiperRef] = useState(null);
	// SwiperCore.use([Autoplay]);
	return (
		<>
			<div
				className=""
				dir = "ltr"
				style={{ position: "relative" }}
			>
				<div className="swiper-button image-swiper-button-next">
					<i className="fa-solid fa-circle-chevron-right"></i>
				</div>
				<div className="swiper-button image-swiper-button-prev">
					<i className="fa-solid fa-circle-chevron-left"></i>
				</div>
				<Swiper
					onSwiper={setSwiperRef}
					grabCursor={true}
					slidesPerView={1}
					centeredSlides={false}
					spaceBetween={20}
					loop={true}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
					}}
					navigation={{
						nextEl: ".image-swiper-button-next",
						prevEl: ".image-swiper-button-prev",
						disabledClass: "swiper-button-disabled",
					}}
					// navigation={true}
					modules={[Navigation, Autoplay]}
					className="mySwiper"
					breakpoints={{
						// when window width is >= 0px
						0: {
							slidesPerView: 1,
						},
						// when window width is >= 768px
						768: {
							slidesPerView: 2,
						},
						// when window width is >= 991px
						991: {
							slidesPerView: 3,
						},
					}}
				>
					<SwiperSlide>
						<Card />
					</SwiperSlide>
					<SwiperSlide>
						<Card />
					</SwiperSlide>
					<SwiperSlide>
						<Card />
					</SwiperSlide>
					<SwiperSlide>
						<Card />
					</SwiperSlide>
					<SwiperSlide>
						<Card />
					</SwiperSlide>
					<SwiperSlide>
						<Card />
					</SwiperSlide>
					<SwiperSlide>
						<Card />
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
}

export default Slider;
