import setURLParamsForArrayValue from "@/helper/setURLParamsForArrayValue";
import useFilterProducts from "@/hooks/useFilterProducts";
import { useSearchParams } from "react-router-dom";

const useJarSizeFilter = () => {
	const { updateFilter } = useFilterProducts();
	const [searchParams] = useSearchParams();
	const activeSizes = (currentSize: string) => {
		return searchParams.get("size")?.split(",")?.includes(currentSize) ? true : false;
	};
	const filterByJarSize = (value: string) => {
		setURLParamsForArrayValue("size", value, searchParams, updateFilter);
	};
	return { filterByJarSize, activeSizes };
};

export default useJarSizeFilter;
