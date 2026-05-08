import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper/modules";
import { DUMMY_PRODUCT_IMAGES } from "@/utils/constants";
import useSelectProductImage from "@/hooks/useSelectProductImage";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const ProductImages = () => {
	const { selectedImage, handleMouseEnter, handleMouseLeave } = useSelectProductImage();
	return (
		<>
			<div className="py-5 w-full flex justify-center lg:hidden">
				<Swiper
					effect="fade"
					slidesPerView={1}
					centeredSlides={true}
					fadeEffect={{ crossFade: true }}
					modules={[Pagination, EffectFade]}
					pagination={{
						dynamicBullets: true,
						clickable: true,
					}}
					className="mySwiper h-full w-[min(500px,100%)]">
					{DUMMY_PRODUCT_IMAGES.map((img) => {
						return (
							<SwiperSlide key={img} className="grid place-items-center pb-10">
								<div className="size-[min(450px,100%)] border border-primary-100/20 rounded-3xl">
									<img src={img} alt={img} className="size-full object-contain p-10 rounded-[inherit]" />
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>

			<div className="flex-col gap-3 hidden w-[clamp(450px,40vw,800px)] pr-20 border-r border-secondary-text/10 lg:flex xl:pr-30">
				<div className="w-full border border-primary-100/20 aspect-square rounded-3xl">
					<img src={selectedImage} alt="main image" className="size-full object-contain p-10 rounded-[inherit]" />
				</div>
				<div className="flex gap-1 w-full overflow-scroll custom-scrollbar">
					{DUMMY_PRODUCT_IMAGES.map((img) => {
						return (
							<span
								className={`max-w-[clamp(80px,6vw,180px)] cursor-pointer aspect-square flex-1 rounded-xl border border-primary-100/${selectedImage === img ? "50" : "20"}`}
								key={img}
								onMouseEnter={() => handleMouseEnter(img)}
								onMouseLeave={handleMouseLeave}>
								<img src={img} alt="sub images" className="size-full object-contain p-2 rounded-[inherit]" />
							</span>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default ProductImages;
