const setURLParamsForArrayValue = (key: string, value: string, searchParams: URLSearchParams, func: (x: object) => void) => {
	const params = searchParams.get(key);
	if (!params) {
		func({ [key]: [String(value.trim())] });
	} else {
		const currentLevels = params.split(",");
		if (!currentLevels.includes(value.trim())) {
			currentLevels.push(String(value.trim()));
			func({ [key]: currentLevels });
		} else {
			func({ [key]: currentLevels.filter((val) => val !== value) });
		}
	}
};

export default setURLParamsForArrayValue;
