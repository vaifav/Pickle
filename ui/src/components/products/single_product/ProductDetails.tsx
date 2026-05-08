import { Rating } from "@/components/ui/rating";
import { DUMMY_FEATURED_PICKLES } from "@/utils/constants";
import { Heart, Minus, Plus, ShoppingBag, Truck } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const { name, price, rating, description } = DUMMY_FEATURED_PICKLES[0];
const ProductDetails = () => {
	const [quantity, setQuantity] = useState(1);
	const reduceQuantity = () => quantity > 1 && setQuantity(quantity - 1);
	const increaseQuantity = () => quantity < 10 && setQuantity(quantity + 1);

	return (
		<section className="font-secondary-sans grow lg:pl-20">
			<div>
				<h1 className="text-secondary font-serif font-black capitalize mb-1 text-[40px]">{name}</h1>
				<p className="text-secondary-text font-normal max-w-130 mb-3 leading-[1.7] text-[13px]">
					{description}
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi consequuntur cupiditate eius dignissimos quidem nemo odio, quaerat vitae a illum assumenda, eaque consectetur magni placeat
					saepe sapiente quo, possimus architecto!
				</p>
			</div>

			<div className="flex items-center justify-between border-y border-secondary-text/20 py-2 mb-4">
				<div className="flex gap-4 items-baseline">
					<span className="font-serif font-bold text-secondary text-[30px]">{rating.toFixed(1)}</span>
					<div className="flex flex-col justify-center gap-1">
						<Rating rating={5} />
						<NavLink to="" className="w-fit font-medium border-b border-primary-100 text-primary-100/80 text-[14px]">
							324 reviews
						</NavLink>
					</div>
				</div>
				<button className="flex items-center gap-2 border rounded-full py-1.5 px-4 border-green-600/20 text-green-600 bg-green-600/10 transition-colors duration-100 hover:bg-green-600/20 hover:border-green-600/30">
					<span className="size-1.5 rounded-full bg-green-600"></span>
					<span className="font-medium text-[12px]">In Stock</span>
				</button>
			</div>

			<div className="flex flex-col mb-2">
				<span className="flex items-center gap-2.5 font-serif">
					<b className="text-secondary text-[32px]">₹{price}</b>
					<del className="text-secondary-text text-[22px] pt-1">₹{price + 20}</del>
				</span>
				<span className="text-secondary-text font-medium text-[12px]">Inclusive of all taxes. Free delivery above ₹499</span>
			</div>

			<div className="flex items-start gap-3 text-secondary bg-primary-100/20 rounded-xl leading-[1.6] px-3 py-4 mb-6 text-[14px]">
				<Truck className="size-5 text-primary-100" />
				<p>
					<b>Order within 3 hrs</b> for dispatch today. Estimated delivery: <b>Apr 30 – May 2.</b> <br /> Free shipping on orders above ₹499.
				</p>
			</div>

			<div className="flex gap-2 h-fit mb-3">
				<div className="h-full rounded-full border border-secondary-text/15 flex items-center justify-between grow *:px-3 *:py-2.5">
					<span className="h-full cursor-pointer transition-colors duration-100 rounded-l-[inherit] hover:bg-secondary-text/30" onClick={reduceQuantity}>
						<Minus className="size-4" />
					</span>
					<span className="text-[14px] font-medium py-0! pointer-events-none">{quantity}</span>
					<span className="h-full cursor-pointer transition-colors duration-100 rounded-r-[inherit] hover:bg-secondary-text/30" onClick={increaseQuantity}>
						<Plus className="size-4" />
					</span>
				</div>
				<button className="h-full rounded-full bg-primary-100 flex items-center justify-center grow-4 gap-2 px-3 py-2 text-white cursor-pointer">
					<ShoppingBag className="size-4" />
					<span className="text-[14px] font-medium">Add to Cart</span>
				</button>
				<button className="aspect-square h-full p-2 transition-all duration-150 rounded-full bg-white cursor-pointer text-pink-500/95 border border-pink-500/10">
					<Heart className="size-4.5 stroke-2" />
				</button>
			</div>

			<button className="cursor-pointer border border-primary-100 text-secondary-text px-3 py-2 w-full rounded-full transition-colors duration-150 hover:bg-primary-100 hover:text-white">Buy Now</button>
		</section>
	);
};

export default ProductDetails;
