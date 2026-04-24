import { NavLink } from "react-router-dom";
import SectionDivider from "./SectionDivider";
import { ENDPOINTS } from "../../utils/constants";
import { ChevronRight } from "lucide-react";
import { Leaf } from "../../utils/icons";
import FeaturedPickles from "./FeaturedPickles";
import Marque from "./Marque";

const Hero = () => {
	return (
		<>
			<section className="flex flex-col mt-5 gap-10 *:px-5 *:md:px-10 lg:gap-0 lg:flex-row">
				<div className="flex flex-col w-full shrink-0 lg:w-5/12">
					<div className="border-b border-secondary-text/40 pb-10">
						<SectionDivider text="naadan,handcrafted,pure" />
						<div>
							<h1 className="font-serif font-black leading-none text-secondary mb-3 tracking-[-2px] text-[clamp(52px,6vw,85px)]">
								The Art of <br /> <em className="text-primary-100">Tangy</em>
							</h1>
							<p className="font-normal font-serif italic mb-7 leading-[1.1] text-secondary-text text-[clamp(36px,6vw,54px)]">
								Kerala Pickles,
								<br />
								Delivered Fresh.
							</p>
							<p className="max-w-100 mb-6 font-secondary-sans italic text-secondary-text leading-[1.85] text-[15px]">
								Generations-old recipes. Wild-harvested spices. Every jar is slow-cured to perfection — no preservatives, no shortcuts.
							</p>
							<div className="flex items-center gap-5">
								<button className="flex items-center justify-center gap-1 text-white bg-primary-100 rounded-full px-5 py-3 font-medium text-[15px] text-nowrap">
									<NavLink to={ENDPOINTS.PRODUCTS}>Shop Pickles</NavLink> <ChevronRight className="size-4 stroke-3" />
								</button>
								<button className="flex items-center justify-center gap-1 text-secondary rounded-full px-5 py-3 font-medium text-[15px] transition-colors ease-in-out text-nowrap hover:bg-secondary-text/30">
									<NavLink to={ENDPOINTS.OUR_STORY}>Our Story</NavLink> <ChevronRight className="size-4 stroke-3" />
								</button>
							</div>
						</div>
					</div>
					<div className="flex items-center w-full justify-between my-5">
						<div className="flex flex-col items-center justify-center gap-1">
							<h1 className="font-serif font-bold text-3xl text-secondary">40+</h1>
							<span className="font-normal text-secondary-text text-[12px]">Vareities</span>
						</div>
						<div className="flex flex-col items-center justify-center gap-1">
							<h1 className="font-serif font-bold text-3xl text-secondary">12K+</h1>
							<span className="font-normal text-secondary-text text-[12px]">Happy Customers</span>
						</div>
						<div className="flex flex-col items-center justify-center gap-1">
							<h1 className="font-serif font-bold text-3xl text-secondary">15</h1>
							<span className="font-normal text-secondary-text text-[12px]">Years Crafting</span>
						</div>
					</div>
				</div>

				<div className="relative flex items-center justify-center grow overflow-hidden">
					<span className="absolute -top-20 opacity-5 lg:top-0">
						<Leaf />
					</span>
					<span className="absolute z-11 left-100 top-0 animate-[fall_7s_linear_infinite]">🌸</span>
					<span className="absolute z-11 left-30 top-0 animate-[fall_12s_2s_linear_infinite]">💮</span>
					<span className="absolute z-11 left-120 top-0 animate-[fall_11s_4s_linear_infinite]">🌺</span>
					<FeaturedPickles />
				</div>
			</section>
			<Marque />
		</>
	);
};

export default Hero;

{
	/* <div className="flex flex-col items-center">
					<div className="max-w-90">
						<img className="relative z-10 size-full object-cover" src={heroImage} alt="pick" />
					</div>
					<div className="flex flex-col items-center *:text-center">
						<p className="font-semibold uppercase my-5 tracking-[1.5px] text-secondary-text text-[12px]">featured jar</p>
						<NavLink to={ENDPOINTS.SHOP} className="flex items-center gap-2 font-secondary-sans font-black leading-none text-secondary mb-3 text-xl uppercase sm:text-2xl">
							<span>
								Naadan <em className="text-primary-100">Lemon</em> pickle
							</span>
							<ChevronRight className="size-5 stroke-3" />
						</NavLink>
						<p className="font-semibold tracking-[1.5px] text-secondary-text text-[12px]">Wild-harvested, slow-cured, zero preservatives</p>
					</div>
				</div>*/
}
