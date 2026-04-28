import { Slider } from "@/components/ui/slider";
import Divider from "./Divider";
import { useState } from "react";

const MIN = 100;
const MAX = 1000;
const PriceRangeFilter = () => {
	const [range, setRange] = useState([MIN, MAX]);
	const updateRange = (value: number, min: boolean) => {
		setRange(min ? [value, range[1]] : [range[0], value]);
	};
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
				/>
			</form>
			<Slider min={MIN} max={MAX} step={50} value={range} onValueChange={setRange} />
		</div>
	);
};

export default PriceRangeFilter;
