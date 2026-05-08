import { useSearchParams } from "react-router-dom";

const MIN = 100;
const MAX = 1000;

const useFilterProducts = () => {
	const [searchParams, setSearchParams] = useSearchParams({});

	const filterData = {
		min: Number(searchParams.get("min")) || MIN,
		max: Number(searchParams.get("max")) || MAX,
		spice: searchParams.get("spice")?.split(",") || [],
		size: searchParams.get("size")?.split(",") || [],
	};

	const updateFilter = (filter: Partial<typeof filterData>) => {
		const params = new URLSearchParams(searchParams);
		Object.entries(filter).forEach(([key, value]) => {
			if (Array.isArray(value)) {
				value.length > 0 ? params.set(key, value.join(",")) : params.delete(key);
			} else if (value) {
				params.set(key, String(value));
			} else {
				params.delete(key);
			}
		});
		setSearchParams(params);
	};

	const clearFilter = () => setSearchParams({});

	return { MIN, MAX, filterData, updateFilter, clearFilter };
};

export default useFilterProducts;
