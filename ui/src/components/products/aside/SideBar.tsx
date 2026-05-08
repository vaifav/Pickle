import { X } from "lucide-react";
import type { StateProps } from "@/utils/types";
import SideBarCategoryList from "./SideBarCategoryList";
import PriceRangeFilter from "./PriceRangeFilter";
import SpiceLevelFilter from "./SpiceLevelFilter";
import JarSizeFilter from "./JarSizeFilter";
import useFilterProducts from "@/hooks/useFilterProducts";

const SideBar = ({ isFilterOpen, setIsFilterOpen }: StateProps<boolean, "isFilterOpen">) => {
	const { clearFilter } = useFilterProducts();
	const closeFilter = () => setIsFilterOpen(false);
	return (
		<aside
			className={`w-60 h-full z-10 col-start-1 row-start-1 px-2 py-3 bg-white overflow-y-scroll custom-scrollbar shadow-2xl opacity-0 border-secondary-text/10 custom-scrollbar lg:opacity-100 lg:border-r lg:shadow-[none] lg:col-start-auto lg:row-start-auto ${isFilterOpen && "opacity-100"}`}>
			<div className="w-full flex items-end justify-between py-3 text-secondary border-b border-secondary-text/10 lg:hidden">
				<p className="font-bold font-serif text-xl">Filter</p>
				<div className="cursor-pointer" onClick={closeFilter}>
					<X className="size-5 stroke-2" />
				</div>
			</div>
			<SideBarCategoryList />
			<PriceRangeFilter />
			<SpiceLevelFilter />
			<JarSizeFilter />
			<button
				className="border w-full py-2 mt-8 rounded-full border-secondary-text/20 text-center text-secondary-text transition-colors duration-100 cursor-pointer text-[14px] hover:border-primary-100/80 hover:bg-primary-50/30 hover:text-primary-100/80"
				onClick={() => {
					clearFilter();
				}}>
				Clear all filters
			</button>
		</aside>
	);
};

export default SideBar;
