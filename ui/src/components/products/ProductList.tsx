import { DUMMY_FEATURED_PICKLES } from "@/utils/constants";
import Card from "./Card";
import ProductListHead from "./ProductListHead";
import { NavLink } from "react-router-dom";

const ProductList = () => {
	return (
		<div className="h-full w-full col-start-1 row-start-1 overflow-y-scroll custom-scrollbar py-5 px-5 md:px-10 lg:col-start-auto lg:row-start-auto">
			<ProductListHead />
			<div className="grid gap-3 justify-center grid-cols-[repeat(auto-fill,minmax(min(320px,100%),1fr))] py-5">
				{DUMMY_FEATURED_PICKLES.map((obj) => {
					return (
						<NavLink key={obj.name} to="/products/1">
							<Card obj={obj} />
						</NavLink>
					);
				})}
			</div>
		</div>
	);
};

export default ProductList;
