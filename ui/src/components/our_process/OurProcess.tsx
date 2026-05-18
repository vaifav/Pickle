import { OUR_PROCESS_STEPS } from "../../utils/constants";

const OurProcess = () => {
	return (
		<section className="grid gap-10 font-serif relative z-0 before:hidden before:content-[''] before:absolute before:h-px before:top-8 before:right-[10%] before:left-[10%] before:-z-10 before:bg-primary-100 lg:before:block md:grid-cols-2 lg:grid-cols-4">
			{OUR_PROCESS_STEPS.map(({ title, description }, index) => {
				return (
					<div key={title + index} className="group flex flex-col items-center gap-1">
						<span className="size-16 grid place-items-center bg-white rounded-full border-2 border-primary-100 font-bold text-primary-100 text-2xl mb-4 transition-all duration-300 group-hover:-translate-y-1">
							<span>{index + 1}</span>
						</span>
						<h1 className="capitalize text-center text-[18px] font-bold text-secondary">{title}</h1>
						<p className="text-center text-secondary-text text-[13px] leading-[1.65] font-light font-secondary-sans">{description}</p>
					</div>
				);
			})}
		</section>
	);
};

export default OurProcess;
