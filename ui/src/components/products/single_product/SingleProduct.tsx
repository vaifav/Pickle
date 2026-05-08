import { ChevronRight } from "lucide-react";
import ProductImages from "./ProductImages";
import ProductDetails from "./ProductDetails";

const SingleProduct = () => {
	return (
		<section>
			<p className="wrapper flex items-center gap-1 font-secondary-sans text-[13px] text-secondary-text/80 py-5  border-b border-secondary-text/10">
				<span>Home</span> <ChevronRight className="size-2" /> <span>Shop</span> <ChevronRight className="size-2" />
				<span>Mango Pickle</span>
			</p>
			<section className="wrapper *:py-10 flex flex-col gap-2 lg:flex-row">
				<ProductImages />
				<ProductDetails />
			</section>
		</section>
	);
};

export default SingleProduct;
