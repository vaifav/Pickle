const SectionDivider = ({ text }: { text: string }) => {
    const words = text.split(",")
	return (
		<div className="flex items-center justify-center w-fit py-4">
			<div className="h-px w-6 bg-rust-200" />
			<p className="mx-3   italic text-[8px] font-medium uppercase tracking-[0.3em] text-rust-200 md:text-[10px]">
				{words.map((word, index) => {
					return words.length - 1 === index ? `${word}` : `${word} .`;
				}).join(' ')}
			</p>
			<div className="h-px w-6 bg-rust-200" />
		</div>
	);
};

export default SectionDivider;
