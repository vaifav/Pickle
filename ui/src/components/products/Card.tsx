import { DUMMY_FEATURED_PICKLES } from "@/utils/constants";
import { Rating } from "@/components/ui/rating";
import { Heart, Plus } from "lucide-react";
const Card = ({ obj }: { obj: Partial<(typeof DUMMY_FEATURED_PICKLES)[0]> }) => {
	return (
		<article className="relative flex flex-col border border-secondary-text/15 bg-primary-100/5 rounded-3xl h-140 transition-all duration-150 hover:shadow-md">
			<div className="flex justify-between w-full rounded-t-[inherit] absolute top-0 left-0 p-4">
        <div className="flex grow items-center justify-end">
          <button className="aspect-square p-2.5 transition-all duration-150 rounded-full bg-white shadow cursor-pointer text-pink-500/95 hover:scale-110"><Heart className="size-4.5 stroke-2"/></button>
        </div>
      </div>
      <div className="rounded-t-[inherit] grow overflow-hidden">
				<img className="size-full object-contain p-8 lg:p-15" src={obj.image} alt={obj.name} />
			</div>
			<div className="rounded-b-[inherit] h-[35%] border-t border-secondary-text/15 px-3 pt-4">
        <p className="uppercase font-medium text-secondary-text text-[11px] tracking-[1px] mb-2">{obj.category}</p>
        <div className="flex flex-col gap-1">
          <h1 className="font-serif font-bold text-secondary capitalize text-[17px]">{obj.name}</h1>
          <p className="text-secondary-text font-light leading-[1.6] text-[12px]">{obj.description}</p>
        </div>
        <div className="flex items-center gap-1">
          <Rating rating={obj.rating || 1} size={'sm'}/>
          <span className="text-secondary-text font-light leading-[1.6] text-[13px]">{obj.rating?.toFixed(1)}</span>
        </div>
        <div className="flex items-center justify-between mt-3">
            <h1 className="font-serif text-secondary font-bold text-xl">₹{obj.price}</h1>
            <button className="aspect-square p-2 rounded-full bg-primary-100 text-white"><Plus className="size-4"/></button>
        </div>
      </div>
		</article>
	);
};

export default Card;

/*

{
  category,
  name,
  desc,
  rating, 
  spicelevel,
  price,
  jarsize,
}

*/
