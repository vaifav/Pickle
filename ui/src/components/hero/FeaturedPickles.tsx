import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import { DUMMY_FEATURED_PICKLES, ENDPOINTS } from "../../utils/constants";
import { ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const FeaturedPickles = () => {
	return (
		<Swiper
			modules={[Autoplay, EffectFade]}
			slidesPerView={1}
			effect="fade"
			fadeEffect={{ crossFade: true }}
			autoplay={{
				delay: 1000,
				disableOnInteraction: false,
				pauseOnMouseEnter: false,
			}}
			loop={true}
			speed={1200}>
			{DUMMY_FEATURED_PICKLES.map((obj) => {
				return (
					<SwiperSlide key={obj.name}>
						<div className="flex flex-col items-center">
							<div className="max-w-90">
								<img className="relative z-10 size-full object-cover" src={obj.image} alt="pick" />
							</div>
							<div className="flex flex-col items-center *:text-center">
								<p className="font-semibold uppercase my-5 tracking-[1.5px] text-secondary-text text-[12px]">featured jar</p>
								<NavLink to={ENDPOINTS.SHOP} className="flex items-center gap-2   font-black leading-none text-secondary mb-3 text-xl uppercase sm:text-2xl">
									<span>
										Naadan <em className="text-primary-100">{obj.name}</em> pickle
									</span>
									<ChevronRight className="size-5 stroke-3" />
								</NavLink>
								<p className="font-semibold tracking-[1.5px] text-secondary-text text-[12px]">Wild-harvested, slow-cured, zero preservatives</p>
							</div>
						</div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default FeaturedPickles;
