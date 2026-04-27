import BestSellers from "../bestsellers/BestSellers";
import Categories from "../categories/home/Categories";
import Connect from "../connect/Connect";
import Hero from "../hero/Hero";
import OurProcess from "../our_process/OurProcess";
import CommonSection from "./CommonSection";

const Home = () => {
	return (
		<>
			<Hero />
			<CommonSection Component={Categories} text="Find your <br/> perfect" emphasizedText="flavour" dividerText="Browse Categories"/>
			<CommonSection Component={BestSellers} text="Bestsellers" dividerText="Most loved" linkText="View all" className="bg-secondary **:text-white"/>
			<CommonSection Component={OurProcess} text="From our kitchen <br/> to your" emphasizedText="table" dividerText="simple process" hasLink={false}/>
			<Connect />
		</>
	);
};

export default Home;
