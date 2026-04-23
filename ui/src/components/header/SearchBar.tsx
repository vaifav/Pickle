import { Search, X } from "lucide-react";

interface SearchBarProps {
	unFocusSearch: () => void;
	className: string;
	isMobile?: boolean;
}

const SearchBar = ({ unFocusSearch, className, isMobile }: SearchBarProps) => {
	return (
		<form className={className}>
			<Search className={`${isMobile ? "size-4" : "size-4"} text-gray-500`} />
			<input
				className={isMobile ? "grow px-2 bg-transparent border-none outline-none text-sm transition-all" : "bg-transparent border-none outline-none text-sm ml-2 w-32 focus:w-48 transition-all"}
				placeholder="Search..."
			/>
			<X className={`size-4 text-gray-500 ${!isMobile && "lg:hidden"}`} onClick={unFocusSearch} />
		</form>
	);
};

export default SearchBar;
