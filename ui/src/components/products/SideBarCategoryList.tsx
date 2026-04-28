import { useState } from "react";
import { FOOTER_DATA } from "../../utils/constants";
import Divider from "./Divider";

const SideBarCategoryList = () => {
	const [activeCategory, setActiveCategory] = useState(FOOTER_DATA.shop[0]);
	return (
		<div className="flex flex-col">
			<Divider text="category" />
			<ul className="flex flex-col gap-2">
				{FOOTER_DATA.shop.map((category) => {
					const isActive = activeCategory === category;
					return (
						<button
							key={category}
							onClick={() => setActiveCategory(category)}
							className={`capitalize cursor-pointer p-2 text-left rounded-[5px] text-[15px] transition-colors ${isActive ? "bg-primary-100 text-white" : "bg-transparent text-secondary"}`}>
							{category}
						</button>
					);
				})}
			</ul>
		</div>
	);
};

export default SideBarCategoryList;
