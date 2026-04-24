import { DUMMY_MARQUEE } from "../../utils/constants";

const Marque = () => {
	return (
		<section className="flex items-center h-10 bg-secondary px-0! my-5">
			<div className="flex animate-marquee w-max">
				{DUMMY_MARQUEE.map((tag) => {
					return (
						<div className="flex items-center justify-center gap-2 px-8 text-rust-50 font-medium font-serif text-[13px] text-nowrap">
							<span className="italic text-[12px]">✦</span>
							<p>{tag}</p>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Marque;
