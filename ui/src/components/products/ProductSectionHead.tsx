import { ChevronRight, SlidersHorizontal } from "lucide-react";
import type { StateProps } from "../../utils/types";

const ProductSectionHead = ({ setIsFilterOpen }: StateProps<boolean, "isFilterOpen">) => {
	const openFilter = () => setIsFilterOpen(true);
	return (
		<div className="wrapper border-b border-secondary-text/10 pb-5">
			<p className="flex items-center gap-1 font-secondary-sans text-[13px] text-secondary-text/80 mb-2 ml-2">
				<span>Home</span> <ChevronRight className="size-2" /> <span>Shop</span> <ChevronRight className="size-2" />{" "}
			</p>
			<div className="flex items-center justify-between text-secondary">
				<h1 className="font-bold font-serif leading-[1.1] tracking-[-1px] text-[clamp(28px,3vw,42px)] capitalize">all pickles</h1>
				<div
					className="group flex justify-center items-center gap-2 rounded-full transition-all duration-400 border border-secondary/20 bg-secondary/7 text-secondary font-secondary-sans font-semibold text-[15px] fill-secondary cursor-pointer overflow-hidden size-10 hover:w-25 lg:hidden"
					onClick={openFilter}>
					<div>
						<SlidersHorizontal className="size-4" />
					</div>
					<span className="hidden opacity-0 group-hover:opacity-100 group-hover:block">Filter</span>
				</div>
			</div>
		</div>
	);
};

export default ProductSectionHead;
