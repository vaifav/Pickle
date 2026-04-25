import SectionDivider from "../hero/SectionDivider";
const Connect = () => {
	return (
		<section className={`connect-bg wrapper flex flex-col gap-5 py-20 bg-secondary/98 *:w-full *:md:w-1/2 md:flex-row md:items-center md:justify-between`} >
			<div className="flex flex-col items-center justify-center md:items-start lg:w-5/12">
				<SectionDivider text="stay,connected" />
				<h1 className="font-serif font-black leading-6 text-center text-white mb-2 tracking-[1px] text-[clamp(20px,6vw,40px)] sm:leading-10 md:text-left">
					Get notified when
					<em className="text-primary-100">new pickles </em>
					arrive
				</h1>
				<p className="font-semibold text-center tracking-[1.5px] text-secondary-text text-[11px] italic md:text-left">Plus 10% off your first order. No spam, ever — we promise.</p>
			</div>
			<form className="flex flex-col gap-2">
                <input className="border border-rust-100/30 w-full p-3 text-white/90 outline-0 bg-white/3 placeholder:text-white/50 placeholder:text-[14px] placeholder:italic" type="text" name="name" id="name" placeholder="Your name..."/>
                <input className="border border-rust-100/30 w-full p-3 text-white/90 outline-0 bg-white/3 placeholder:text-white/50 placeholder:text-[14px] placeholder:italic" type="email" name="email" id="email" placeholder="Your email..."/>
                <button className="w-full p-3 bg-rust-100 text-secondary text-[14px] font-bold"><em>✦</em> Notify Me</button>
            </form>
		</section>
	);
};

export default Connect;
