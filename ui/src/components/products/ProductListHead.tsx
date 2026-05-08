import useFilterProducts from "@/hooks/useFilterProducts";
import { ChevronDown, X } from "lucide-react";
import { useSearchParams } from "react-router-dom";
const ProductListHead = () => {
	const [searchParams] = useSearchParams();
	const { updateFilter } = useFilterProducts();
	const removeFilter = (key: string, value: string) => {
		const filteredValues = searchParams
			.get(key)
			?.split(",")
			.filter((val) => val !== value);
		updateFilter({ [key]: filteredValues });
	};
	const activeFilters = (key: string) => {
		return searchParams
			.get(key)
			?.split(",")
			?.map((val) => {
				return (
					<span key={val} className="flex items-center gap-1 rounded-full capitalize font-medium text-primary-100 py-0.5 px-3 bg-primary-100/20 text-[12px]">
						<span>{val}</span>
						<X
							className="size-3 cursor-pointer"
							onClick={() => {
								removeFilter(key, val);
							}}
						/>
					</span>
				);
			});
	};

	const isAnyPresent = searchParams.get("spice") || searchParams.get("size");
	return (
		<div className="flex items-center gap-5 capitalize font-medium text-[12px] text-secondary-text">
			{isAnyPresent && (
				<div className="w-9/12 flex items-center gap-2 overflow-x-scroll custom-scrollbar text-nowrap before:content-['active:'] before:px-2 md:w-10/12">
					{activeFilters("spice")}
					{activeFilters("size")}
				</div>
			)}
			<div className="flex justify-end grow relative">
				<div className="group flex justify-between items-center w-fit">
					<select name="other-filters" id="other-filters" className="appearance-none outline-0 pl-4 pr-6 py-2 border border-secondary-text/30 transition-colors duration-150 rounded-full w-full capitalize focus:border-primary-100/80">
						<option value="most-popular">Most popular</option>
						<option value="price-l-h">price: low to high</option>
						<option value="price-h-l">price: high to low</option>
						<option value="top-rated">top rated</option>
					</select>
					<label htmlFor="other-filters" className="absolute right-2 pointer-events-none">
						<ChevronDown className="size-4 transition-transform duration-300 group-focus-within:rotate-180" />
					</label>
				</div>
			</div>
		</div>
	);
};

export default ProductListHead;
