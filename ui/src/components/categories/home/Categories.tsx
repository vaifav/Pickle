import { DUMMY_CATEGORIES } from "../../../utils/constants";

const comingSoonClass = (isComingSoon: boolean) => {
	return (
		isComingSoon &&
		"after:content-['Coming_Soon'] after:w-fit after:font-secondary-sans after:font-normal after:p-2 after:rounded-full after:border after:border-rust-100 after:text-rust-100 after:bg-secondary/60 after:text-[12px] after:absolute after:top-0 after:right-0 after:m-3"
	);
};

const Categories = () => {
	return (
		<section className="grid gap-2 h-300 md:h-100 md:grid-cols-4">
			{DUMMY_CATEGORIES.map((cat) => (
				<div key={cat.id} className={`grid grid-cols-1 grid-rows-1 place-items-end bg-secondary rounded-lg font-bold overflow-hidden ${cat.styles}`}>
					{cat.image && <img className="col-start-1 row-start-1 size-full object-cover opacity-30" src={cat.image} alt={cat.name} />}
					<div className={`flex flex-col justify-end p-4 size-full col-start-1 row-start-1 z-10 relative ${comingSoonClass(cat.isComingSoon)}`}>
						<h1 className={`font-serif font-bold text-white leading-6 text-[clamp(20px,1vw,28px)] ${cat.isComingSoon && "text-rust-100!"}`}>{cat.name}</h1>
						<p className="font-medium font-secondary-sans mt-1 text-secondary-text opacity-95 text-[14px]">{cat.numberOfVarities ? `${cat.numberOfVarities} varities` : " ."}</p>
					</div>
				</div>
			))}
		</section>
	);
};

export default Categories;
// const Categories = () => {
// 	return (
// 		<section className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-3 bg-amber-400 md:max-h-220">
// 			{DUMMY_CATEGORIES.map((cat) => (
// 				<div key={cat.id} className={`grid grid-cols-1 grid-rows-1 place-items-end bg-secondary rounded-lg font-bold overflow-hidden h-100 md:h-auto ${cat.styles}`}>
// 					{cat.image && <img className="col-start-1 row-start-1 size-full object-cover opacity-40" src={cat.image} alt={cat.name} />}
// 					<div className="p-4 w-full col-start-1 row-start-1 z-10 text-white relative">{cat.name}</div>
// 				</div>
// 			))}
// 		</section>
// 	);
// };
