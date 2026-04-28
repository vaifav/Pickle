import { useState } from "react";
import ProductList from "./ProductList";
import ProductListHead from "./ProductListHead";
import SideBar from "./SideBar";

const Products = () => {
	const [isFilterOpen,setIsFilterOpen] = useState(false)
    return (
        <section className="flex flex-col py-5 font-secondary-sans">
            <ProductListHead setIsFilterOpen={setIsFilterOpen}/>
            <section className="grid h-dvh lg:grid-cols-[auto_1fr]"> 
                <SideBar isFilterOpen={isFilterOpen} setIsFilterOpen={setIsFilterOpen}/>
                <ProductList />
            </section>
        </section>
    );
};

export default Products;
