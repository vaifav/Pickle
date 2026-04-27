import Categories from "../categories/home/Categories";
import Connect from "../connect/Connect";
import Hero from "../hero/Hero";
import CommonSection from "./CommonSection";

const Home = () => {
	return (
		<>
			<Hero />
			{/* <Categories /> */}
			<CommonSection Component={Categories} text="Find your perfect" emphasizedText="flavour" dividerText="Browse Categories" lineBreak />
			<Connect />
		</>
	);
};

export default Home;
