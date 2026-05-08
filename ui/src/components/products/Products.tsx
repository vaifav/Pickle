import { useState } from "react";
import ProductList from "./ProductList";
import ProductSectionHead from "./ProductSectionHead";
import SideBar from "./aside/SideBar";

const Products = () => {
	const [isFilterOpen,setIsFilterOpen] = useState(false)
    return (
        <section className="flex flex-col pt-5 font-secondary-sans">
            <ProductSectionHead setIsFilterOpen={setIsFilterOpen}/>
            <section className="grid h-dvh lg:grid-cols-[auto_1fr]"> 
                <SideBar isFilterOpen={isFilterOpen} setIsFilterOpen={setIsFilterOpen}/>
                <ProductList />
            </section>
        </section>
    );
};

export default Products;
