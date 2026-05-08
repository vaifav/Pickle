import setURLParamsForArrayValue from "@/helper/setURLParamsForArrayValue";
import useFilterProducts from "@/hooks/useFilterProducts";
import { useSearchParams } from "react-router-dom";

const useSpiceLevelFilter = () => {
	const { updateFilter } = useFilterProducts();
	const [searchParams] = useSearchParams();
	const activeLevels = (currentLevel: string) => {
		return searchParams.get("spice")?.split(",")?.includes(currentLevel) ? true : false;
	};
	const filterBySpiceLevel = (value: string) => {
		setURLParamsForArrayValue("spice", value, searchParams, updateFilter);
	};
	return { filterBySpiceLevel, activeLevels };
};

export default useSpiceLevelFilter;
