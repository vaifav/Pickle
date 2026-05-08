import { useEffect, useState } from "react";
import useFilterProducts from "./useFilterProducts";

const usePriceRangeFilter = () => {
	const { MIN, MAX, filterData, updateFilter } = useFilterProducts();
	const [range, setRange] = useState([filterData.min, filterData.max]);

	useEffect(() => {
		setRange([filterData.min, filterData.max]);
	}, [filterData.min, filterData.max]);

	const handleCommit = (values: number[]) => {
		updateFilter({ min: values[0], max: values[1] });
	};

	const updateRange = (value: number, min: boolean) => {
		setRange(min ? [value, range[1]] : [range[0], value]);
	};

	return { handleCommit, updateFilter, updateRange, setRange, range, MIN, MAX };
};

export default usePriceRangeFilter;
