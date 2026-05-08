import { Slider } from "@/components/ui/slider";
import Divider from "../Divider";
import usePriceRangeFilter from "@/hooks/usePriceRangeFilter";

const PriceRangeFilter = () => {
	const { handleCommit, updateRange, updateFilter, setRange, range, MIN, MAX } = usePriceRangeFilter();
	return (
		<div>
			<Divider text="Price range" />
			<form className="flex items-center justify-between w-full mb-3 *:w-13 *:outline-0 *:text-center *:border-2 *:border-secondary-text/10 *:px-2 *:py-1 *:font-medium *:text-secondary *:text-[13px] *:rounded-[5px]">
				<input
					className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
					type="number"
					name="min-range"
					id="min-range"
					min={MIN}
					value={range[0]}
					onChange={(e) => {
						updateRange(Number(e.target.value), true);
					}}
					onBlur={(e)=>{updateFilter({min:Number(e.target.value)})}}
				/>
				<input
					className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
					type="number"
					name="max-range"
					id="mix-range"
					max={MAX}
					value={range[1]}
					onChange={(e) => {
						updateRange(Number(e.target.value), false);
					}}
					onBlur={(e)=>{updateFilter({max:Number(e.target.value)})}}
				/>
			</form>
			<Slider min={MIN} max={MAX} step={50} value={range} onValueChange={setRange} onValueCommit={handleCommit} />
		</div>
	);
};

export default PriceRangeFilter;
