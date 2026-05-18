import { NavLink } from "react-router-dom";
import { ENDPOINTS, FOOTER_DATA } from "../../utils/constants";

const Footer = () => {
	return (
		<footer className="wrapper flex flex-col bg-secondary py-10 md:flex-row md:justify-between">
			<div className="mb-10 lg:w-1/2">
				<NavLink to={ENDPOINTS.HOME}>
					<h1 className="font-serif font-black text-xl text-primary-100 tracking-[-0.5px]">
						PickTaste<span>.</span>
					</h1>
				</NavLink>
				<p className="font-medium italic max-w-60 text-secondary-text text-[13px] leading-[1.7] py-4">
					Handcrafted pickles from the heart of Kerala. Small-batch, zero preservatives, generations of tradition in every jar.
				</p>
			</div>
			<div className="flex justify-between flex-wrap gap-10 md:grow">
				{Object.entries(FOOTER_DATA).map(([key, values]) => {
					return (
						<div key={key + values}>
							<h6 className="text-rust-100 uppercase leading-[2.5px] text-[11px] mb-5">{key}</h6>
							<div className="flex flex-col gap-2">
								{values.map((tag, index) => {
									return (
										<NavLink key={tag + index} to="" className="text-secondary-text text-[14px] italic transition-colors delay-200 hover:text-white/70">
											{tag}
										</NavLink>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</footer>
	);
};

export default Footer;
