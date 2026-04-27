import BestSellers from "../bestsellers/BestSellers";
import Categories from "../categories/home/Categories";
import Connect from "../connect/Connect";
import Hero from "../hero/Hero";
import CommonSection from "./CommonSection";

const Home = () => {
	return (
		<>
			<Hero />
			<CommonSection Component={Categories} text="Find your perfect" emphasizedText="flavour" dividerText="Browse Categories" lineBreak />
			<CommonSection Component={BestSellers} text="Bestsellers" dividerText="Most loved" linkText="View all" className="bg-secondary **:text-white"/>
			<Connect />
		</>
	);
};

export default Home;
