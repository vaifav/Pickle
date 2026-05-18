import { Star } from "lucide-react";
import { DUMMY_REVIEWS } from "../../../utils/constants";

const ICON_NUMBER = [...Array(5)];
const Review = () => {
	return (
		<section className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
			{DUMMY_REVIEWS.map(({ name, review, place }) => {
				return (
					<div key={name + review} className="flex flex-col justify-between shadow rounded-xl p-4 text-secondary">
						<div className="flex items-center gap-1">
							{ICON_NUMBER.map((_, index) => {
								return <Star key={"star" + index} className="fill-rust-200 size-3 stroke-0" />;
							})}
						</div>
						<p className="italic py-3 font-normal leading-[1.75] text-[15px]">&ldquo;{review}&rdquo;</p>
						<div className="flex items-start gap-3">
							<span className="grid place-items-center size-10 bg-secondary-text/10 rounded-full border-2 border-secondary-text/40 uppercase font-medium text-[12px]">
								<span>{name[0] + name[1]}</span>
							</span>
							<div>
								<h3 className="font-semibold font-serif text-[14px]">{name}</h3>
								<p className="text-secondary-text italic text-[12px]">{place}</p>
							</div>
						</div>
					</div>
				);
			})}
		</section>
	);
};

export default Review;
