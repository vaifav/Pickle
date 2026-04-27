import { NavLink } from "react-router-dom";
import { DUMMY_FEATURED_PICKLES } from "../../utils/constants";
import { Plus } from "lucide-react";

const BestSellers = () => {
	return (
		<section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
			{DUMMY_FEATURED_PICKLES.map(({ name, image, price, description }) => {
				return (
					<NavLink to="" key={name + price} className="flex flex-col rounded-3xl shadow h-95 bg-white/2 border border-secondary-text/20 overflow-hidden transition-all duration-300 hover:bg-white/4 hover:border-primary-50/20 hover:-translate-y-1">
						<div className="p-5 h-[65%] rounded-t-[inherit]">
							<img className="opacity-90 size-full object-contain" src={image} alt={name} />
						</div>
						<div className="grow flex flex-col border-t border-secondary-text/20 p-4  rounded-b-[inherit]">
							<div>
								<h1 className="font-serif font-bold tracking-[1.2px] capitalize text-[18px]">{name} pickle</h1>
								<p className="text-secondary-text! font-light font-secondary-sans leading-[1.6] text-[12px]">{description}</p>
							</div>
                            <div className="flex items-center justify-between">
                                <p className="text-primary-100! font-serif font-bold tracking-[1.2px] capitalize text-[20px]">₹{price}</p>
                                <button className="grid place-items-center size-8 cursor-pointer bg-primary-100 rounded-full"><Plus className="size-4"/> </button>
                            </div>
						</div>
					</NavLink>
				);
			})}
		</section>
	);
};

export default BestSellers;
