import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Container = () => {
	return (
		<section className="h-dvh overflow-y-scroll">
			<Header />
			<main className="relative pt-20 w-full">
				<Outlet />
			</main>
			<Footer />
		</section>
	);
};

export default Container;
