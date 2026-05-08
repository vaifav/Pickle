import { useEffect, useRef, useState } from "react";
import { DUMMY_PRODUCT_IMAGES } from "@/utils/constants";

const useSelectProductImage = () => {
	const timer = useRef<number | null>(null);
	const [selectedImage, setSelectedImage] = useState(DUMMY_PRODUCT_IMAGES[0]);
	const handleMouseEnter = (img: string) => {
		if (timer.current) clearTimeout(timer.current);
		timer.current = setTimeout(() => {
			setSelectedImage(img);
		}, 100);
	};
	const handleMouseLeave = () => {
		if (timer.current) clearTimeout(timer.current);
	};
	useEffect(() => {
		return () => {
			if (timer.current) clearTimeout(timer.current);
		};
	}, []);

	return { selectedImage, handleMouseEnter, handleMouseLeave };
};

export default useSelectProductImage;
